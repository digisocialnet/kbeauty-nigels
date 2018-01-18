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

    start () {
  if (process.browser) {

    }
      this.loading = true

    },
    finish () {
       console.log('finished load')
       this.loading = false

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
  display: flex;
  align-content: center;
  font-family: sans-serif;
}
.loading-page img {position: fixed;  top: 0;
  left: 0;right:0;bottom:0;  text-align: center;}
</style>
