
<template>
<section class="section">
  <div class="container-fluid wrp">
<div class="columns is-gapless">
  <div class="column is-half left">

<section class="hero is-pink is-bold">
  <div class="hero-head">

  </div>

  <div class="hero-body">
    <div class="content">

 <div class='animatedimage el'></div>
        <nuxt-link to="/" exact><span class="title has-text-center el">K-Beauty:<br/><small>Perfect Skin in 10 Steps</small></span></nuxt-link>  <a href="https://www.nigelbeauty.com/">
          <img src="../assets/nigel.svg" class="el logo" alt="Logo">
          </a>
                       <p class="field box el">


                       <span class="control">
    <a href="https://www.nigelbeauty.com/c-700-new-k-beauty.aspx" target="_new" class="el button is-rounded is-outlined">
                <span>Shop for K-Beauty</span>
              </a>&nbsp;
              </span>
                <span class="control">
                  <nuxt-link to="/step/1" class="el button is-rounded is-outlined cta-main">
                <span>Start Step 1 ➜ </span>

              </nuxt-link></span>
              </p>
              <div class="content description el"> {{steps.intro.text}}<br/><br/>
<share />

              </div>
    </div>
  </div>

  <div class="hero-foot">
       <div class="content">

</div>
  </div>
</section>



    <k-footer class="is-hidden-mobile"/>
</div>
  <div class="column is-half aside">
    <steps :steps="steps.regimen"/>
    <k-footer class="is-hidden-desktop"/>
    </div>
</div>
</div>
</section>
</template>

<script>
import kFooter from "~/components/k-footer";
import steps from "~/components/steps";
import share from "~/components/share";
const anime = require('animejs')

export default {
   transition: {
    mode: 'out-in',
    enter (el, done) {
  if (process.browser) {
      var enter = anime.timeline();
      enter.add({
  targets: ['.left','aside'],
  duration: 150,
    opacity:{
    value: [0,1],
    elasticity: function(el, i, l) {
    return (200 + i * 200);
  },
    duration: 200,
    easing: 'easeInOutSine'
  },
  delay: function(el, i, l) {
    return i * 100;
  }
})
      .add({
  targets: '.el',
  duration: 150,
    opacity:{
    value: [0,1],
    elasticity: function(el, i, l) {
    return (200 + i * 200);
  },
    duration: 200  },
    translateY:{
    value: [-20,0],
    duration: 400,
    offset: '-=600',
    elasticity: function(el, i, l) {
    return (100 + i * 200);
  }  },
  delay: function(el, i, l) {
    return i * 100;
  }
}).add({
  targets: '.step',
  duration: 250,
    scale:{
    value: [0,1],
    duration: 200,
    offset: '-=600',
  },
  delay: function(el, i, l) {
    return i * 20;
  }
   
}).add({
  targets: ['.sel'],
  duration: 250,
    opacity:{
    value: 1,
    duration: 200,
    offset: '-=200',
  },
  delay: function(el, i, l) {
    return i * 20;
  },
    complete: function(done) {
    done
  }
});done();}},
    leave (el, done) {
        if (process.browser) {
      var leave = anime.timeline();
      leave.add({
  targets: '.el',
  duration: 250,
    opacity:{
    value: [1,0],
    elasticity: function(el, i, l) {
    return (200 + i * 200);
  },
    duration: 200,
    easing: 'easeInOutSine'
  },
    translateY:{
    value: [0,20],
    duration: 150,
    elasticity: function(el, i, l) {
    return (200 + i * 200);
  },
    easing: 'easeInOutSine'
  },
  delay: function(el, i, l) {
    return i * 20;
  }
}).add({
  targets: '.step',
  duration: 250,
    scale:{
    value: [0,1],
    duration: 200,
    offset: '-=600',
    easing: 'easeInOutSine'
  },
  delay: function(el, i, l) {
    return i * 20;
  }
}).add({
  targets: ['.sel'],
  duration: 250,
    opacity:{
    value: 0,
    duration: 200,
    offset: '-=200',
    easing: 'easeInOutSine'
  },
  delay: function(el, i, l) {
    return i * 20;
  },
    complete: function(done) {
    done
  }
}).add({
  targets: ['.left','aside'],
  duration: 200,
    opacity:{
    value: [1,0],
    elasticity: function(el, i, l) {
    return (200 + i * 200);
  },
    duration: 200,
    easing: 'easeInOutSine'
  },
  delay: function(el, i, l) {
    return i * 100;
  }
});done();
   
        
      }
     
    }
  },
  data() {
    return {
      title: "K-Beauty"
    };
  },
  head() {
    return {
      title: this.title
    };
  },
  components: {
    kFooter,
    steps,
    share
  },
  mounted() {
    if (process.browser) {
    }
  },

  computed: {
    steps() {
      return this.$store.state;
    }
  },
  destroyed() {},
  methods: {}
};
</script>

<style>

</style>
