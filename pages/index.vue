<template>
<div>
<section class="hero is-pink is-bold">
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
          <img src="../assets/nigel.svg" class="logo" alt="Logo">
          </a>

          <span class="navbar-burger burger" data-target="navbarMenuHeroB">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroB" class="navbar-menu">
          <div class="navbar-end">
            <span class="navbar-item">
              <a href="https://www.nigelbeauty.com/c-700-new-k-beauty.aspx" class="button is-info is-inverted">
                <span>Shop K-Beauty</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <div class="hero-body">
    <div class="container has-text-center">
      <span class="title has-text-center">
        K-Beauty <span class="subtitle">
        The&nbsp;LA&nbsp;Way 💁🏻‍🇰🇷
      </span>
      </span>

    </div>
  </div>

  <div class="hero-foot">
     <div :class="['network',online ? 'online' : 'offline']">
        <div class="circle"></div>
        {{ online ? 'online' : 'offline' }}
      </div>
  </div>
</section>
<section class="hero is-primary">
  <div class="hero-body">
    <div class="container is-text-center">
      <h4>
       Coming soon
      </h4>
    </div>
  </div>
</section>
<section>
  <div class="steps container is-fluid">

  <div class="columns is-multiline is-variable is-5" v-packery="{itemSelector: '.packery-item', percentPosition: true, stagger: 40}">
<div v-packery-item v-bind:data-size="steps.intro.size | booleanfilt" v-bind:key="steps.intro.id" class="column packery-item">
        <article>
        <div class="notification step is-light is-bold">
        <h4 class="title">
        {{steps.intro.heading}}
      </h4>
        <h5>
         {{steps.intro.text}}
      </h5>
       <p>
         {{steps.intro.fulltext}}
       </p>

    <a class="button is-danger is-outlined">Learn More</a>

        </div>
       </article>
      </div>
      <div v-packery-item v-for="(stp, index) in steps.regimen" v-bind:data-size="stp.size | booleanfilt" :index="index" v-bind:key="stp.id" @click="stp.clicked = !stp.clicked, stp.size = !stp.size" class="column packery-item">
        <article>
        <div class="notification step is-pink-outline is-bold">
          <figure v-if="stp.image" class="image is-1by1">
          <img :src="stp.image">
          </figure>
        <h4 class="title">
        {{stp.heading}}
      </h4>
        <h5>
         {{stp.text}}
      </h5>
      <transition name="fade">
       <p v-if="stp.clicked">
         {{stp.fulltext}}
       </p>
</transition>
    <a class="button is-danger is-outlined">Learn More</a>

        </div>
       </article>
      </div>

   </div>
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

    },
    destroyed () {
      // window.removeEventListener('offline', this._toggleNetworkStatus)
      // window.removeEventListener('online', this._toggleNetworkStatus)
    }
  }
</script>

<style scoped>
.steps {margin-top: 48px; padding: calc(24px + 2vw);font-weight: 200;}
.fade-enter-active, .fade-leave-active {
  overflow-y: hidden;
	max-height: 800px;
  	transition-property: all;
	transition-duration: .5s;
  transition-delay: .2s;
	transition-timing-function: ease-out;
}
.fade-enter, .fade-leave-to {
  max-height: 0;
  	transition-property: all;
	transition-duration: .5s;
  transition-delay: .25s;
	transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}
.notification {padding: 36px; color:#B19998;flex: 1 0 auto;}
a.button span {color:#7a707a;font-weight: 700;}
.is-pink {background: #FEEAE9;}
.step .title {font-size:calc( 24px + 2vw)}
.grid-sizer {height: 200px;}
figure {margin-bottom:16px;}
figure img {border-radius: 8px;background: #fff;padding: 12px;border:2px solid #FEEAE9;pointer-events:none;}
.expand, .active {width :100%;min-height: 50vh;transform: scale3d(20);transition: .4s all;}
.is-pink-outline {border:2px solid #FEEAE9;border-radius: 18px;background: #fff;transition: .6s background-color ease-in, 1s border-color ease-in-out, .4s transform ease;}
.is-pink-outline:hover {background: #FEF3F2;border:2px solid #FFCDCA;transition: 1.3s background-color ease-out, .3s border-color ease-in-out, .2s transform cubic-bezier(0, 1, 0.5, 1); transform: scale(1.03);z-index:100}
.logo {height:24px;width:auto;fill:#7a707a;}
.hero.is-pink .title {color:#1D3C65;font-weight: 100;font-size:calc( 84px + (160 - 100) * (100vw - 300px) / (1920 - 300) )}
  .network {
    font-weight: 400;
    font-size: 1rem;
  }
  .hero.is-pink .subtitle {color:#a89aa8;font-weight: 100;font-size:calc( 64px + (160 - 100) * (100vw - 300px) / (1920 - 300) )}

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
  .title {letter-spacing: -.2rem;}
.is-pink .title {color: #7957D5;}
  .network.offline .circle {
    background: red;
  }
  .packery-item {display: flex;
   flex-direction: column;}
.packery-item article {padding-right: 4px; padding-left: 4px; padding-top: 4px; padding-bottom: 4px}


  @media (min-width: 280px) {
.packery-item, .packery-item[data-size="false"] {
  width: 100%;
}
.packery-item[data-size="true"] {
  width: 100%;
}
   }
  @media (min-width: 800px) {
.packery-item, .packery-item[data-size="false"] {
  width: 50%;
}
.packery-item[data-size="true"],.active.packery-item[data-size="true"] {
  width: 100%;
}
   }
  @media (min-width: 1080px) {
.packery-item, .packery-item[data-size="false"] {
  width: 33%;
}
.packery-item, .packery-item[data-size="true"],.active.packery-item[data-size="true"] {
  width: 66%;
}
   }
  @media (min-width: 1200px) {
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
</style>
