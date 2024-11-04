
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'

// Create Pinia Instance
const pinia = createPinia()
const app = createApp(App);

// Use Pinia Instance
app.use(pinia)
app.use(router)
app.mount('#app')

