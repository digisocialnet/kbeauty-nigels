module.exports = {
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      '~/plugins/vuepackeryplugin'
    ]
  },
  render: {
  },
  routeParams: {
    '/:id': function () {
      const ids = this.$store.state.regimen.step.id
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
    {src: '~/plugins/vuepackeryplugin', ssr: false}
  ],
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa', '@nuxtjs/bulma'
  ]
}
