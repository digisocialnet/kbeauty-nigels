<template>
<div>
<section class="hero is-pink is-bold">
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">


      </div>
    </nav>
  </div>

  <div class="hero-body">
    <div class="container has-text-center">
      <span class="title has-text-center">
        For Rent:
      </span>
      <span class="subtitle">532 N. Mariposa Ave., Los Angeles, CA 90004</span>
      </span>

    </div>
  </div>

  <div class="hero-foot">
     
  </div>
</section>
<section>
  <div class="steps container is-fluid">

  <div class="columns is-multiline is-variable is-5">
<div v-bind:data-size="steps.intro.size | booleanfilt" v-bind:key="steps.intro.id" class="column">
        <article>
        <div class="notification intro is-light is-bold">
        <h4 class="title is-primary intro-text">
        {{steps.intro.heading}}
      </h4>
        <h5>
         {{steps.intro.text}}. Call <a href="tel:4242592206">424-259-2206</a> for more information or to make a viewing appointment.
      </h5>
        </div>
       </article>
      </div>
      <div v-for="(stp, index) in steps.regimen" v-bind:data-clicked="stp.clicked | booleanfilt" v-bind:data-size="stp.size | booleanfilt" :index="index" v-bind:key="stp.id" class="column is-12 step">
        <article>
        <div class="notification step is-pink-outline is-bold">
          <figure v-if="stp.image" class="image">
          <img :src="stp.image">
          </figure>
        <h4 class="title">
          {{stp.heading}}
      </h4>
      <transition name="slide">
       <p class="description" v-if="stp.clicked">
         {{stp.fulltext}}
       </p>
</transition>

        </div>
       </article>
      </div>

   </div>
</div>
</section>
<section>
  <div class="container">
  <div :class="['network',online ? 'online' : 'offline']">
        <div class="circle"></div>
        {{ online ? 'online' : 'offline' }}
      </div><BR/><BR/>
      </div>
  </section>
</div>
</template>

<script>

  export default {
    data () {
      return {
        online: true,

      }
    },
    filters: {
booleanfilt (value) {
return Boolean(value)
}
    },
    computed: {
    steps() {
      return this.$store.state;
    }
  },
    mounted () {


      if (!window.navigator) {
        this.online = false
        return
      }
      this.online = Boolean(window.navigator.onLine)
      window.addEventListener('offline', this._toggleNetworkStatus)
      window.addEventListener('online', this._toggleNetworkStatus)
    },
    methods: {
      expand ($event) {

   this.$store.commit('SET_REGIMEN', value)

  },
                toggle (clicked, $event) {


     event.currentTarget.classList.toggle('expand')
     event.currentTarget.classList.toggle('active')
     this.$store.commit('SET_REGIMEN', value)
    },
      _toggleNetworkStatus ({ type }) {
        this.online = type === 'online'
      },

    }
  }
</script>

<style scoped>
.step-number {top:20px;right:20px;margin-right: 12px;position:absolute;font-size: 1.5rem;background: #1D3C65;padding:6px 18px;border-radius:50%;display: inline-block;color:#fff;font-weight:900;display: flex;align-items: center;justify-content: center;}
.steps {margin-top: 0; padding: calc(24px + 2vw);font-weight: 200;}
.slide-enter-active, .slide-leave-active {
  overflow-y: hidden;
	max-height: 800px;
  	transition-property: all;
	transition-duration: .5s;
  transition-delay: .2s;
	transition-timing-function: ease-out;
}
.slide-enter, .slide-leave-to {
  max-height: 0;
  	transition-property: all;
	transition-duration: .5s;
  transition-delay: .25s;
	transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}
.notification.intro {background-color:#fff;margin: 18px;}
.notification {padding: 36px; color:#B19998;flex: 1 0 auto;margin-bottom:24px;}
a.button span {color:#7a707a;font-weight: 700;}
.is-pink {background: #FEEAE9;}
.step .title {font-size:calc( 20px + 1.7vw)}
.grid-sizer {height: 200px;}
figure {margin-bottom:16px;}
figure img {border-radius: 8px;background: #fff;padding: 12px;border:2px solid #FEEAE9;pointer-events:none;}
.expand, .active {width :100%;min-height: 50vh;transform: scale3d(20);transition: .4s all;}
.is-pink-outline {border:2px solid #FEEAE9;border-radius: 18px;background: #fff;transition: .6s background-color ease-in, 1s border-color ease-in-out, .4s transform ease;}
.is-pink-outline:hover {background: #FEF3F2;border:2px solid #FFCDCA;transition: 1.3s background-color ease-out, .3s border-color ease-in-out, .2s transform cubic-bezier(0, 1, 0.5, 1); transform: scale(1.03);z-index:100}
.logo {height:24px;width:auto;fill:#7a707a;}
.hero.is-pink .title {color:#1D3C65;font-weight: 500;font-size:calc( 84px + (160 - 100) * (100vw - 300px) / (1920 - 300) )}
  .network {
    font-weight: 400;
    font-size: 1rem;
  }
  .hero.is-pink .subtitle {color:#a89aa8;font-weight: 400;font-size:calc( 32px + (160 - 100) * (100vw - 300px) / (1920 - 300) )}
  .intro-text {color:#FEBEBA;font-weight:700;font-size:calc( 10px + (160 - 100) * (100vw - 300px) / (1920 - 300) )}

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
  .title, .subtitle {letter-spacing: -.17rem;}
.is-pink .title {color: #7957D5;}
  .network.offline .circle {
    background: red;
  }
  
.packery-item article {padding-right: 4px; padding-left: 4px; padding-top: 4px; padding-bottom: 4px}
.packery-item[data-clicked="true"] .notification {
  border:6px solid #FFCDCA;z-index:101;transition: .3s all;
}

.packery-item[data-clicked="true"] .title {
color: #ff3860;
}

.notification * {pointer-events:none;}

.packery-item[data-clicked="true"] .notification {
  box-shadow: 7px 9px 105px 0px rgba(0,0,0,0.3);
  max-height:90vh;
  overflow-y: hidden;
}
.description {padding-bottom:16px;}
.packery-item[data-clicked="true"] .description {  overflow-y: scroll;}
.packery-item[data-clicked="true"] .notification:hover {transform:scale(.99);background: #F5F5F5; transition: .3s all;border-width:6px;border-color: #e3e3e3;}

 
</style>
