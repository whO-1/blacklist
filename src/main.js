import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';



window.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;

const pinia = createPinia();


createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app');
