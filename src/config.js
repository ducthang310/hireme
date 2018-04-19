/**
 * Main config for App:
 *  - api url
 *  - development mode
 *  - ...
 *
 * @type {}
 */
const mainConfig = {
  baseApiUrl: 'https://api.f45-academy.project-staging.com/v1',
  baseUrl: '',
  isDevelopmentMode: true,
  useFakeData: false,
  api: {}
}

mainConfig.api = {
  user: {
    create: mainConfig.baseApiUrl + '/users',
  },

  file: {
    upload: mainConfig.baseApiUrl + '/files'
  }
}

export default function (Vue) {
  window.mcf = Vue.mcf = mainConfig

  Object.defineProperties(Vue.prototype, {
    $mcf: {
      get: function () {
        return mainConfig
      }
    },
  })
}
