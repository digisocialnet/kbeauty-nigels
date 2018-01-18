module.exports = {
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'animejs'
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
  loading: false,
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#3B8070'
  },
  plugins: [
    '~plugins/buefy',
    '~plugins/share'
  ],
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa'
  ]
}
