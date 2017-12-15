<template lang="html">
  <div class="loading-page" v-if="loading">
    <div class='animatedimage'>
    <img src='~/assets/icons/1.svg' width='128' height='128' />
    <img src='~/assets/icons/2.svg' width='128' height='128' />
    <img src='~/assets/icons/3.svg' width='128' height='128' />
    <img src='~/assets/icons/4.svg' width='128' height='128' />
    <img src='~/assets/icons/5.svg' width='128' height='128' />
    <img src='~/assets/icons/6.svg' width='128' height='128' />
    <img src='~/assets/icons/7.svg' width='128' height='128' />
    <img src='~/assets/icons/8.svg' width='128' height='128' />
    <img src='~/assets/icons/9.svg' width='128' height='128' />
    <img src='~/assets/icons/10.svg' width='128' height='128' />
    <img src='~/assets/icons/11.svg' width='128' height='128' />
    <img src='~/assets/icons/12.svg' width='128' height='128' />
    <img src='~/assets/icons/13.svg' width='128' height='128' />

    <!-- With this preloader, the 'empty' frame is the last frame, so we set image 16 to be the poster. animation will always start from the first image, which works well in this case -->
  </div>

  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    animate () {
             if (process.browser) {
      console.log('loading...')
      var tl = new this.$gsap.TimelineMax()
            var tl2=new this.$gsap.TimelineMax({repeat:-1,repeatDelay:1})

      var tg = document.querySelectorAll('.el')
       var img = document.querySelectorAll('.animatedimage img')
      const elastic = this.$gsap.Elastic.easeOut.config(2, 0.3)


       tl2.staggerTo(img,0,{opacity:0},0.08);
         console.log('finished start')
    }
    },
    start () {
      this.loading = true
this.animate()
    },
    finish () {

   this.loading = false
       console.log('finished load')

    }
  }
}
</script>



<style scoped>

.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  z-index:999;
  font-family: sans-serif;
}
.loading-page img {position: fixed;  top: 0;
  left: 0;right:0;bottom:0;  text-align: center;}
</style>
