module.exports = {
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    vendor: [
      'animejs',
      'webfontloader',
      'vue-social-sharing'
    ]
  },
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  },
  routeParams: {
    '/step/:id': function () {
      const ids = this.$store.state.regimen.id
      return ids.id
    }
  },
  generate: {
    routes: [
      '/step/1',
      '/step/2',
      '/step/3',
      '/step/4',
      '/step/5',
      '/step/6',
      '/step/7',
      '/step/8',
      '/step/9',
      '/step/10'
    ]
  },
  workbox: {
    runtimeCaching: [
      {
        // Should be a regex string. Compiles into new RegExp('https://my-cdn.com/.*')
        urlPattern: 'https://www.nigelbeauty.com/.*',
        // Defaults to `networkFirst` if omitted
        handler: 'cacheFirst',
        // Defaults to `GET` if omitted
        method: 'GET'
      }
    ]
  },
  performance: {
    hints: process.env.NODE_ENV === 'production' ? 'warning' : false,
    maxAssetSize: 200,
    maxInitialChunkSize: 200
  },
  css: ['~/assets/main.css'],


  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {},
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FF5E7E', height: '3px' },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#FF5E7E'
  },
  plugins: [
    '~plugins/share',
    '~plugins/matchheights'
  ],
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa',
    ['@nuxtjs/google-analytics', {
      id: 'UA-32725640-1'
    }]
  ]
}
