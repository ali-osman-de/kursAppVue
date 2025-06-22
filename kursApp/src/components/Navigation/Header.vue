<template>

    <header>
        <div class="container headerContainer">
            <div class="header-title">
                <router-link to="/">Ana Sayfa</router-link>
            </div>
            <div>
                <ul class="userAction">
                    <li class="header-title" v-if="!userStore.auth">
                        <router-link to="/sign-in">
                            Giriş Yap
                        </router-link>
                    </li>
                    <div class="userLoggedAction" v-if="userStore.auth">
                        <li>
                            <router-link to="/user/dashboard">
                                Kullanıcı Sayfası
                            </router-link>
                        </li>
                        <li @click="userStore.signOut()">
                            Çıkış Yap
                        </li>

                    </div>
                </ul>
            </div>
        </div>
    </header>

</template>

<script setup>
import { useUserStore } from "@/stores/user"
const userStore = useUserStore();

</script>