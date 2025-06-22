import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index';
import './assets/main.css'
import { createPinia } from 'pinia'

const pinia = createPinia()

//ToastNotificaiton
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';

//Firebase
import { onAuthStateChanged } from 'firebase/auth';
import { AUTH } from './utils/firebase';

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// Components

const vuetify = createVuetify({
    components,
    directives,
})

let app;

onAuthStateChanged(
    AUTH,
    () => {
        if (!app) {
            app = createApp(App)
                .use(vuetify)
                .use(ToastPlugin)
                .use(router)
                .use(pinia)
                .mount('#app')
        }

    }
)

