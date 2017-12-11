
module.exports = {
  /*
  ** Build configuration
  */
  build: {
    plugins: [
     
    ],
    postcss: [

    ]
},
  render: {
  },
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {},
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ffd9dc' },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#ffd9dc'
  },
  plugins: [
  ],
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa', '@nuxtjs/bulma'
  ]
}
