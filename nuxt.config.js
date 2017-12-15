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
  transition: {
    name: 'page',
    mode: 'out-in',
    css: false,

    enter: function (el, done) {
      if (process.browser) {
        if (this.$store.state.menuIsActive === false) {
          console.log('initmenu')
          console.log('animenter nuxtconfig')
          var tl = new this.$gsap.TimelineMax()
          var tg = document.querySelectorAll('.el')
          var st = document.querySelector('img')
          var box = document.querySelectorAll('.box')
            const bounce = this.$gsap.Bounce.easeInOut
             tl.fromTo(st, 0.3, { y: -100, autoAlpha: 1 }, { y: 0, autoAlpha: 1 })
           .staggerTo(tg, 0.3, { autoAlpha: 1, ease: bounce }, 0.1)
            .staggerTo(box, 0.3, { autoAlpha: 1}, 0.1)
                      .staggerTo(el, 0.3, { autoAlpha: 1, onComplete: done }, 0.1)
        }


           }
        }

  },
  leave: function (el, done) {
    if (process.browser) {
      console.log('leaving nuxtconfig...')
      var tl = new this.$gsap.TimelineMax()
      var tg = document.querySelectorAll('.el')
      var st = document.querySelector('img')
      const elastic = this.$gsap.Elastic.easeOut.config(2, 0.3)

      var box = document.querySelectorAll('.box')
      tl.fromTo(st, 0.3, { y: 0, autoAlpha: 1, ease: elastic }, { y: -100, autoAlpha: 1, ease: elastic })

      .staggerTo(tg, 0.3, { autoAlpha: 0, ease: elastic }, 0.1)

      .staggerTo(box, 0.2, { autoAlpha: 0, ease: elastic }, 0.1)
       .staggerTo(el, 0.3, { autoAlpha: 0, onComplete: done }, 0.1)
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
    '@nuxtjs/pwa', '@nuxtjs/bulma'
  ]
}
