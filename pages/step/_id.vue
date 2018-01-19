
<template>
<section class="section step-wrap">
  <div class="container-fluid wrp">
<div class="columns is-gapless">
  <div class="column is-half left">

<section class="hero is-pink is-bold" :style="`background:url(${paramStep.image}),linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,.4) 100%);background-color:RGBA(254,234,233,.8);background-size:cover;background-blend-mode: soft-light, darken;`">
  <div class="hero-head">
  </div>

  <div class="hero-body">

    <div class="content">



        <div><a href="https://www.nigelbeauty.com/">
          <img src="../../assets/nigel.svg" class="el logo" alt="Logo">
          </a></div>

<h4 class="title el">{{paramStep.heading}} <span class="step-number">
  <span class="tag el">STEP {{paramStep.text}}</span>
      </span></h4>
       <div class="productname el has-text-danger subtitle">
         <nuxt-link to="/" exact><div class='animatedimage'></div></nuxt-link> {{paramStep.productname}} 
       </div>
<div class="columns">
  <div class="column is-half"><figure><img :src="paramStep.image" class="el prodphoto" :alt="paramStep.productname"></figure></div>
  <div class="column is-half">   </div>

</div>

<div class="field box">
         <span class="control">
    <a :href="paramStep.url" target="_blank" class="el button is-rounded is-outlined">
                <span>Shop for {{paramStep.heading}}</span>
              </a>
              </span>
              <span v-if="paramStep.id !== 10" class="control">
                  <nuxt-link :to="`/step/${paramStep.id + 1}`" class="el button is-rounded is-outlined cta-main">
                <span>Next Step ➜ </span>

              </nuxt-link></span>
              </div>


       <p class="description el" v-html="paramStep.fulltext"></p>


       <BR/>
<share/>

    </div>
  </div>

  <div class="hero-foot">
       <div class="content">

</div>
  </div>
</section>



    <k-footer/>
</div>
  <div class="column is-half aside"><steps :steps="steps.regimen"/></div>
</div>
</div>
</section>
</template>

<script>
import kFooter from '~/components/k-footer'
import anime from 'animejs'
import steps from '~/components/steps'
import share from '~/components/share'

  export default {
    data () {
      return {
        currentParam: this.$route.params.id,
        title: 'K-Beauty Step' + this.$route.params.id
      }
    },
    components:{
kFooter,
steps,
share
    },
    filters: {
booleanfilt (value) {
return Boolean(value)
}
    },
    computed: {
    steps() {
      return this.$store.state;
    },
hideSteps() {

      return this.$store.state.regimen
},
    paramStep() {
      var param = this.currentParam
      return this.$store.state.regimen[param]

      }


  },
    mounted () {


    },
    destroyed() {
    },
    methods: {




                toggle (clicked, $event) {


     event.currentTarget.classList.toggle('expand')
     event.currentTarget.classList.toggle('active')
     this.$store.commit('SET_REGIMEN', value)
    },



    },

  }
</script>

<style scoped>

.prodphoto {height:auto;width:40vw;border: 2px solid #FEEAE9;border-radius:8px;margin-right:8px;}
.field.box {margin-top:16px;background: rgba(255,255,255,.2);}
.animatedimage {width: 20px;
  height: 20px;
  background: url('~/assets/ico.svg') left center;
  background-repeat: repeat-x;
  background-size: 1300% 100%;
  backface-visibility: hidden;
  display: inline-block;
  animation: play 2.5s steps(13) infinite;}
  @keyframes play {
   100% { background-position: -1300px; }
}
.wrp {height:100vh;}
.step-wrap .tag {letter-spacing: 0px !important;font-size: 13px;color:RGBA(160,138,137,1.00);background: RGBA(255,255,255,0.8);border:2px solid RGBA(255,255,255,0.8);box-shadow: 0 2px 3px rgba(10, 10, 10, .1), 0 0 0 1px rgba(10, 10, 10, .1);line-height: 1.4;font-weight:600;}
.aside, .left {overflow-y:auto;max-height:100vh;width:50vw;}
.step-wrap .logo {position: absolute;top:20px;left:20px;height:16px;  fill: #7a707a;}
body{font-family:'futura-pt',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;}
.title, .subtitle {    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);font-family:orpheuspro,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;}
.param-item.packery-item .notification {background:#FFFAF9;}
.notification {transition: width 0.4s, height 0.4s;}
.step-number {font-weight:900;display:inline-block;}
.step-number.tiny {font-size:9px;font-weight:400;}
.steps {margin-top: 48px; padding: calc(24px + 2vw);font-weight: 400;}
.slide-enter-active, .slide-leave-active {
  overflow-x: hidden;
	max-width: 800px;
  opacity:1;
  	transition-property: all;
	transition-duration: .5s;
  transition-delay: .2s;
	transition-timing-function: ease-out;
}
.field .control {margin-right: 8px;}
.slide-enter, .slide-leave-to {
  max-width: 0px;
  opacity:0;
  	transition-property: all;
	transition-duration: .5s;
  transition-delay: .25s;
	transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.notification.intro {background-color:#fff;margin: 18px;}
.notification {padding: 36px; color:#B19998;flex: 1 0 auto;}
a.button span {color:#7a707a;font-weight: 700;}
.is-pink {background: #FEEAE9;}
.step .title {font-size:calc( 20px + (160 - 100) * (100vw - 800px) / (1920 - 100) );letter-spacing: -.2vw;}
.grid-sizer {height: 200px;}
figure {margin-bottom:16px;}
figure img {border-radius: 8px;background: #fff;padding: 12px;border:2px solid #FEEAE9;pointer-events:none;}
.expand, .active {width :100%;min-height: 50vh;transform: scale3d(20);transition: .4s all;}
.is-pink-outline {border:2px solid #FEEAE9;border-radius: 18px;background: #fff;transition: .6s background-color ease-in, 1s border-color ease-in-out, .4s transform ease;}
.step:hover {background: #FEF3F2;border:2px solid #FFCDCA;transition: 1.3s background-color ease-out, .3s border-color ease-in-out, .3s transform cubic-bezier(0, 1, 0.5, 1); transform: scale(1.1) perspective(2000px) rotateY(8deg) translate3d(8px,0,0);
z-index:100}
.notification .box {background:rgba(255,255,255,.3);}
.notification .box:hover {transform: scale(1.003);transition: transform .3s ease-in;}
.param-item .notification  {background:#F28292;border:2px solid #FEEAE9;border-radius: 18px;background: #fff;}
.logo {height:24px;width:auto;fill:#7a707a;}
.hero.is-pink .title {color:#1D3C65;font-weight: 100;font-size:calc( 44px + (160 - 100) * (100vw - 300px) / (1920 - 300) )}
  .network {
    font-weight: 400;
    font-size: 1rem;
  }
  .hero.is-pink .subtitle {color:#a89aa8;font-weight: 100;font-size:calc( 28px + (160 - 100) * (100vw - 300px) / (1920 - 300) )}
.packery-item[index="0"]  {visibility:hidden !important;display:none !important;}
.currentParam {visibility:hidden !important;display:none !important;}
  .network .circle {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    background: green;
    padding: .1rem .5rem;
    border-radius: 1rem;
  }
  .column {padding: 0;}
  .columns.is-variable .column {
    padding-left: 0;
    padding-right: 0;
    display: flex;
  }
  .title {letter-spacing: -.1vw;}

.is-pink .title {color: #7957D5;}
  .network.offline .circle {
    background: red;
  }
  .param-item h4.title {font-size:5rem;}
  h4.title {color:#1D3C65;}
  .packery-item {display: inline-block;
   flex-direction: column;}
.packery-item article {padding-right: 4px; padding-left: 4px; padding-top: 4px; padding-bottom: 4px;cursor:pointer;}
.packery-item[data-clicked="true"] .notification {
  border:6px solid #FFCDCA;z-index:101;transition: .3s all;
}

.packery-item[data-clicked="true"] .title {
color: #ff3860;
}

.packery-item[data-clicked="true"] .notification {
  box-shadow: 7px 9px 105px 0px rgba(0,0,0,0.3);
  border-color: #ff3860;
  transition: .3s all ease-in-out;
  max-height:90vh;
  overflow-y: hidden;
}
.description {padding-bottom:16px;color:RGBA(160,138,137,1.00);max-width:74ch;}
.packery-item[data-clicked="true"] .description {  overflow-y: scroll;}
.packery-item[data-clicked="true"] .notification:hover {transform:scale(.99); transition: .3s all;border-width:8px;}
.packery-item[data-clicked="true"] .notification:active {background: #FEF3F2 ;transform:translateY(3px); transition: .05s all;}
.packery-item[data-clicked="true"] .notification:hover h4.title {opacity: .7;}
.packery-item[data-clicked="true"] .notification:active h4.title {opacity: .3;}
.packery-item, .packery-item[data-size="false"] {
  width: 50%;

}

  @media (min-width:100px) and (max-width: 468px) {
    .param-item {width:100% !important;}
    .title {
  letter-spacing: 0;
}
  }
    @media (min-width:469px) and (max-width: 899) {
    .param-item {width:50% !important;}
        .title {
  letter-spacing: 0;
}
  }

  @media (min-width: 900px) and (max-width: 1199px) {

.packery-item, .packery-item[data-size="false"] {
  width: 33%;

}
.step-number, h4.title {top:-32px;}
.step.notification img, .step.notification figure {width:100%; height:auto;}
.notification {padding: 18px;margin-bottom:9px;}
.packery-item[data-size="true"],.active.packery-item[data-size="true"] {
  width: 100%;
}
.step.notification figure {margin-bottom:0;}
    .param-item {width:50% !important;}
   }



  @media (min-width: 1200px) and (max-width: 1600px) {
    .param-item {width:50% !important;}
.packery-item, .packery-item[data-size="false"] {
  width: 25%;
}
.packery-item[data-size="true"],.active.packery-item[data-size="false"] {
  width: 50%;
}
.packery-item[data-size="2"] {
  width: 75%;
}
   }



     @media (min-width: 1601px) {
.packery-item, .packery-item[data-size="false"] {
  width: 20%;
}
.packery-item[data-size="true"],.active.packery-item[data-size="false"] {
  width: 40%;
}
.packery-item[data-size="2"]{
  width: 60%;
}
   }
   .step-intro .notification {border-color:#fff !important;background-color:#fff !important;}
   .productname {display:block;font-size: 32px;font-weight:400;color:#333;letter-spacing:0;opacity:.8;line-height: 1.3;}
   @media (max-width: 801px) {
.aside, .left {overflow-y:auto;max-height:initial;width:100vw;border-left: 1px solid rgba(0,0,0,.1);}
 }
.is-pink .productname {font-size: 28px !important;}
.content,.notification {text-shadow: 0 2px 0 rgba(255, 255, 255, 0.6);}
.description a {color:#77829A !important; font-weight: 700;}
</style>
