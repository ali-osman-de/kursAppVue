import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { AUTH, DB } from "@/utils/firebase.js";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore"
import router from "@/router"
import { useToast } from 'vue-toast-notification'


const $toast = useToast();

const DEFAULT_USER = {
    uid: null,
    id: null,
    firstName: null,
    lastName: null,
    isAdmin: null
}

export const useUserStore = defineStore('user', {
    state: () => ({
        loading: false,
        user: DEFAULT_USER,
        auth: false
    }),
    getters: {

    },
    actions: {
        setUser(user) {
            this.user = { ...this.user, ...user };
            this.auth = true;
        },
        async autoSignIn(uid) {
            try {
                const userData = await this.getUserProfile(uid)
                this.setUser(userData)
                router.push('/user/dashboard');
                $toast.success('Hoşgeldiniz!')
                return true
            } catch (error) {
                $toast.error('Hata Oluştu!');
                console.log(error)
            }
        },
        async getUserProfile(uid) {
            try {
                const userRef = await getDoc(doc(DB, 'users', uid))
                return userRef.data()
            } catch (error) {

            }
        },
        async signIn(formData) {
            try {
                this.loading = true;
                const res = await signInWithEmailAndPassword(AUTH, formData.email, formData.password)
                console.log(res);

                const userData = await this.getUserProfile(res.user.uid)

                this.setUser(userData);
                router.push('/user/dashboard');
                $toast.success('Hoşgeldiniz!')
            } catch (error) {
                this.loading = false;
                $toast.error('Hata Oluştu!');
            }
            finally {
                this.loading = false;
            }

        },
        async register(formData) {
            try {
                this.loading = true;
                const res = await createUserWithEmailAndPassword(AUTH, formData.email, formData.password)
                console.log(res);

                const newUser = {
                    uid: res.user.uid,
                    email: res.user.email,
                    isAdmin: false
                }

                await setDoc(doc(DB, 'users', res.user.uid), newUser);

                this.setUser(newUser);
                router.push('/user/dashboard');
                $toast.success('Hoşgeldiniz!');
            } catch (error) {
                this.loading = false;
                $toast.error('Hata Oluştu!');
            }
            finally {
                this.loading = false;
            }
        }
    }
})