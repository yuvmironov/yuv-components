import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Components from '@/components'

const app = createApp(App)

for (const key in Components) {
  app.component(key, Components[key])
}

app.use(store).use(router).mount('#app')
