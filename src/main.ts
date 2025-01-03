import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/index.css'
import { BaseButton } from './components/button'
import { BaseSelect } from './components/select'

const app = createApp(App)
app.use(router)
app.component('BaseButton', BaseButton)
app.component('BaseSelect', BaseSelect)
app.mount('#app')
