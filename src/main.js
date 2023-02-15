import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { upperFirst, camelCase } from 'lodash'

library.add(fas, far)
Vue.component('font-awesome-icon', FontAwesomeIcon)

const requireComponent = require.context(
  '@/components/global',
  true,
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // Pegando configuração do componente
  const componentConfig = requireComponent(fileName)

  // Transformando o nome do componente para PascalCase
  const componentName = upperFirst(
    camelCase(
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )

    // Registrando componente globalmente
    Vue.component(
      componentName,
      componentConfig.default || componentConfig
    )
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
