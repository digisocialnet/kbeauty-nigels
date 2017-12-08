module.exports = {
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      '~/plugins/vuepackeryplugin'
    ]

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
    '~/plugins/buefy',
    {src: '~/plugins/vuepackeryplugin', ssr: false}
  ],
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa'
  ]
}
