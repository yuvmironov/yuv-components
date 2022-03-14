import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Components from '@/components'
import './Styles/ResetStyle.styl'
import './Styles/Variable.styl'
import './Styles/Fonts.styl'

const app = createApp(App)

for (const key in Components) {
  app.component(key, Components[key])
}

app.use(store).use(router).mount('#app')
