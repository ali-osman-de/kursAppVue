import { ref } from "vue"
import { AUTH, DB } from "@/utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useUserStore } from "@/stores/user";


export const firstLoad = () => {
    const userStore = useUserStore();
    const loading = ref(true);
    onAuthStateChanged(AUTH, async (user) => {
        if (user) {
            await userStore.autoSignIn(user.uid)
        }
        loading.value = false
    })

    return { loading }
}

export const isAuth = () => {
    let user = AUTH.currentUser;
    if (!user) return '/sign-in';
    return true
}

export const isLoggedIn = () => {
    let user = AUTH.currentUser;
    if (user) return '/user/dashboard';
    return true
}