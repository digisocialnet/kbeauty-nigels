
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
css: [
  '@/assets/main.css'
],
workbox: {

  handleFetch: true
},
  render: {
  },
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {


  },
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
  plugins: ['~/plugins/vue-form-generator', '~/plugins/vue-form-wizard'
  ],
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa', '@nuxtjs/bulma', '@nuxtjs/axios'
  ]
}
