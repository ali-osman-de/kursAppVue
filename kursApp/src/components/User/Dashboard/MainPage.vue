<template>
    <div class="container-fluid">
        <div class="row">
            <nav class="sidebar col-md-2 d-block collapse">
                <div>
                    <ul class="nav">
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'dashboard' }">
                                <v-icon class="mdi mdi-view-dashboard" />
                                <span>Kullanıcı Sayfası</span>
                            </router-link>
                        </li>

                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'profile' }">
                                <v-icon class="mdi mdi-account-box" />
                                <span>Eğitmen</span>
                            </router-link>
                        </li>

                        <li class="nav-item" v-if="userStore.user.isAdmin">
                            <router-link class="nav-link" :to="{ name: 'courses' }">
                                <v-icon class="mdi mdi-note-outline" />
                                <span>Kurslarım</span>
                            </router-link>
                        </li>

                        <li class="nav-item" v-if="userStore.user.isAdmin">
                            <router-link class="nav-link" :to="{ name: 'add-course' }">
                                <v-icon class="mdi mdi-note-edit-outline" />
                                <span>Kurs Ekle</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div class="col-md-10">
                <router-view>

                </router-view>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
const userStore = useUserStore();



</script>