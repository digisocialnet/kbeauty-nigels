<template>
  <div>
<nuxt/>

  </div>
</template>
<script>
export default {
  created() {
    if (process.browser) {
 var WebFont = require('webfontloader');

  WebFont.load({
    typekit: { id: 'gec0rsv' }
  });
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

</style>
