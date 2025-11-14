import './assets/main.css';
import 'primeicons/primeicons.css';
import router from './router';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import "sweetalert2/dist/sweetalert2.min.css";


import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

app.use(router);
app.use(Toast);
app.mount('#app');
