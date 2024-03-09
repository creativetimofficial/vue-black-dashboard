import { createApp } from 'vue'
import App from './App'
import PrimeVue from 'primevue/config'

import 'primevue/resources/themes/lara-light-green/theme.css'
import 'primeicons/primeicons.css'

import Tree from 'primevue/tree';
import Calendar from 'primevue/calendar';
import TreeSelect from 'primevue/treeselect';

const app = createApp(App);

app.use(PrimeVue);

app.component('Tree', Tree);
app.component('Calendar', Calendar);
app.component('TreeSelect', TreeSelect);

app.mount('#app');
