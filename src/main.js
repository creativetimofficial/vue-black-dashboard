import { createApp } from 'vue'
import App from './App'
import PrimeVue from 'primevue/config'
import router from '@/router/router';

import 'primevue/resources/themes/lara-light-green/theme.css'
import 'primeicons/primeicons.css'

import Tree from 'primevue/tree';
import Button from 'primevue/button';

const app = createApp(App);

app.use(PrimeVue);

app
    .component('Tree', Tree)
    .component('Button', Button)

app
    .use(router)
    .mount('#app');
