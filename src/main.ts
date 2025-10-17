import { createApp } from 'vue'
import { createPinia } from 'pinia'
import FontAwesome from './plugins/icons'

import './assets/main.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(FontAwesome)

app.mount('#app')
