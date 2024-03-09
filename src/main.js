import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeicons/primeicons.css'
import App from './App'

const app = createApp(App);

app.use(PrimeVue);``

app.mount('#app');

