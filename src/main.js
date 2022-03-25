import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import router from '../routes/routes.js'
import layout from '../src/layout.vue'

createApp(layout).use(router).mount('#app');
