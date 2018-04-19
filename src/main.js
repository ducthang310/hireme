// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VeeValidate from 'vee-validate'
import VueAxios from 'vue-axios'
import axios from 'axios'
import VueAnalytics from 'vue-analytics'
import Toasted from 'vue-toasted'
import VueLocalStorage from 'vue-localstorage'
import moment from 'moment'
import VueMomentJS from 'vue-momentjs'
import { loadProgressBar } from 'axios-progress-bar'
import mainConfig from './config'


import './assets/scss/styles.scss'
Vue.use(VueLocalStorage)
Vue.use(VueAxios, axios)
Vue.use(VueAnalytics, {
  id: '123123',
  router
})
Vue.use(Toasted, {duration: 3000})
Vue.use(VueMomentJS, moment)
Vue.use(mainConfig)
loadProgressBar({showSpinner: false})
const configVeeValidate = {
  errorBagName: 'errors', // change if property conflicts
  fieldsBagName: 'fields',
  delay: 0,
  locale: 'en',
  dictionary: null,
  strict: true,
  classes: true,
  classNames: {
    touched: 'touched', // the control has been blurred
    untouched: 'untouched', // the control hasn't been blurred
    valid: 'valid', // model is valid
    invalid: 'invalid', // model is invalid
    pristine: 'pristine', // control has not been interacted with
    dirty: 'dirty' // control has been interacted with
  },
  events: 'input|blur',
  inject: true,
  validity: false,
  aria: true
}
Vue.use(VeeValidate, configVeeValidate)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
