import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import './assets/main.css'

//ToastNotificaiton
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';

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

createApp(App)
    .use(vuetify)
    .use(ToastPlugin)
    .use(router)
    .mount('#app')