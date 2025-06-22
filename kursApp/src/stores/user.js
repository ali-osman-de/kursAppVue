import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { AUTH, DB } from "@/utils/firebase.js";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore"
import router from "@/router/index"

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

                this.setNewUser(newUser);
                router.push({ path: '/user/dashboard' })

            } catch (error) {
                this.loading = false;
                return error
            }
            finally {
                this.loading = false;
            }
        }
    }
})