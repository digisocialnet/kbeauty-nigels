module.exports = {
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      '~/plugins/vuepackeryplugin'
    ]
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
  render: {
  },
  routeParams: {
    '/step/:id': function () {
      const ids = this.$store.state.regimen.id
      return ids.id
    }
  },
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {},
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#3B8070'
  },
  plugins: [
    {src: '~/plugins/vuepackeryplugin', ssr: false},
    {
      src: '~/plugins/vuescrollmagic',
      ssr: false
    }
  ],
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa', '@nuxtjs/bulma'
  ]
}
