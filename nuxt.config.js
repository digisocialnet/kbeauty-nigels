module.exports = {
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      '~/plugins/vuepackeryplugin',
      '~/plugins/vuescrollmagic'
    ]
  },
  generate: {
    routes: [
      '/',
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
  css: ['bulma/css/bulma.css','~/assets/main.css'],

  transition: {
    name: 'page',
    mode: 'out-in',
    css: false,

    enter: function (el, done) {
      if (process.browser) {
          console.log('initmenu')
          console.log('animenter nuxtconfig')
          var tl = new this.$gsap.TimelineMax()
          var tg = document.querySelectorAll('.el')
          var st = document.querySelectorAll('img')
          var not = document.querySelectorAll('.notification')
          var hero = document.querySelectorAll('.hero')

          const elastic = this.$gsap.Elastic.easeOut.config(2, 0.3)
            const bounce = this.$gsap.Bounce.easeInOut
             tl.staggerTo(hero, 0.3, { autoAlpha: 1, ease: elastic }, 0.1)
             .staggerFromTo(st, 0.3, { y: 10, autoAlpha: 0 }, { autoAlpha: 1 })
           .staggerTo(tg, 0.3, { autoAlpha: 1, ease: bounce }, 0.1)
           .staggerTo(not, 0.3, { autoAlpha: 1, ease: elastic }, 0.1)
            .staggerTo(el, 0.3, { autoAlpha: 1, onComplete: done }, 0.1);
        }


           }


  },
  leave: function (el, done) {
    if (process.browser) {
      console.log('leaving nuxtconfig...')
      var tl = new this.$gsap.TimelineMax()
      var st = document.querySelectorAll('img')
      var tg = document.querySelectorAll('.el')
      var not = document.querySelectorAll('.notification')
      var hero = document.querySelectorAll('.hero')
      const elastic = this.$gsap.Elastic.easeOut.config(2, 0.3)


      tl.staggerFromTo(tg, 0.3, { autoAlpha: 1, ease: elastic }, { autoAlpha: 0, ease: elastic }, 0.1)
      .staggerFromTo(st, 0.3, { autoAlpha: 1, ease: elastic }, { autoAlpha: 0, ease: elastic }, 0.1)
      .staggerTo(not, 0.3, { autoAlpha: 0, ease: elastic }, 0.1)
      .staggerTo(hero, 0.3, { autoAlpha: 0, ease: elastic }, 0.1)
       .staggerTo(el, 0.3, { autoAlpha: 0, onComplete: done }, 0.1);
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
  loading: '~/components/loading.vue',
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
    '@nuxtjs/pwa'
  ]
}
