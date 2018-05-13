/**
 * Main config for App:
 *  - api url
 *  - development mode
 *  - ...
 *
 * @type {}
 */
const mainConfig = {
  baseApiUrl: 'https://shiroad.com',
  baseUrl: '',
  isDevelopmentMode: true,
  useFakeData: false,
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
