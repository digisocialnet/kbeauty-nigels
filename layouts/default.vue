<template>
  <div>
<nuxt/>

  </div>
</template>
<script>
export default {
  mounted() {
    if (process.browser) {
 var WebFont = require('webfontloader');

  WebFont.load({
    typekit: { id: 'gec0rsv' }
  });
    }
  },
   head() {
    let product = this.product
    return {
      meta: [
        {
          hid: `description`,
          name: 'description',
          content: "K-Beauty is the latest trend in the beauty world. People are beginning to realize that the secret to great skin lies in the Korean method of layering on multiple targeted products. If you'd like to get the best skin of your life but don't know where to start, experiment with these products from Nigel Beauty in Los Angeles."
        },
        {
          hid: `og:title`,
          property: 'og:title',
          content: 'K-Beauty: Perfect Skin in 10 Steps'
        },
        {
          hid: `og:url`,
          property: 'og:url',
          content: 'https://kbeauty.nigelbeauty.com'
        },
        {
          hid: `og:image`,
          property: 'og:image',
          content: 'https://kbeauty.nigelbeauty.com/kbeauty.jpg'
        },
        {
          hid: `og:description`,
          property: 'og:description',
          content: "K-Beauty is the latest trend in the beauty world. People are beginning to realize that the secret to great skin lies in the Korean method of layering on multiple targeted products. If you'd like to get the best skin of your life but don't know where to start, experiment with these products from Nigel Beauty in Los Angeles."
        }
      ]
    }
  },
  methods: {


  }
};

</script>
<style>
html, body, p, div
{

font-family:'futura-pt',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body {  background: #FBEBEA;}
</style>
