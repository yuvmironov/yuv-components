import components from './src/components'

const plugin = {
  install: Vue => {
    for (const key in components) {
      Vue.component(key, components[key])
    }
  }
}

components.install = plugin.install
export default components
