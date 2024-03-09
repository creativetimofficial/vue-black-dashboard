import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeicons/primeicons.css'
import App from './App'
import LoginForm from './pages/LoginForm.vue' 

const app = createApp(App);

app.use(PrimeVue);
app.component('LoginForm', LoginForm); 

app.mount('#app');
