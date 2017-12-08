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
  <div class="columns is-multiline is-variable is-5" v-packery='{itemSelector: ".packery-item", percentPosition: true,}'>
      <div v-packery-item v-for="(reg, index) in steps" :key="reg.index" :class="`size-${reg.size}`" class="column packery-item">
        <article>
        <div class="notification step is-pink-outline is-bold">
        <h4 class="title">
        {{reg.heading}}
      </h4>
        <p>
         {{reg.text}}
       </p>
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
        online: true
      }
    },
    computed: {
    steps() {
      return this.$store.state.regimen;
    },


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
      _toggleNetworkStatus ({ type }) {
        this.online = type === 'online'
      }
    },
    destroyed () {
      window.removeEventListener('offline', this._toggleNetworkStatus)
      window.removeEventListener('online', this._toggleNetworkStatus)
    }
  }
</script>

<style scoped>
.steps {margin-top: 48px; padding: calc(24px + 2vw);font-weight: 200;}
.notification {padding: 36px; color:#B19998;}
a.button span {color:#7a707a;font-weight: 700;}
.is-pink {background: #FEEAE9;}
.step .title {font-size:calc( 24px + 2vw)}
.grid-sizer {height: 200px;}
.is-pink-outline {border:2px solid #FEEAE9;border-radius: 18px;background: #FEF3F2;transition: .6s background-color ease-in, 1s border-color ease-in-out;}
.is-pink-outline:hover {border:2px solid #FFCDCA;background: #FEF3F2;transition: .6s background-color ease-out, .3s border-color ease-in-out;}
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
  }
  .title {letter-spacing: -.2rem;}
.is-pink .title {color: #7957D5}
  .network.offline .circle {
    background: red;
  }
.packery-item article {padding-right: 4px; padding-left: 4px; padding-top: 4px; padding-bottom: 4px}
  .packery-item.size-3 {
    width: 100%;
  }

  @media (min-width: 280px) {
.packery-item.size-1 {
  width: 100%;
}
.packery-item.size-2 {
  width: 100%;
}
   }
  @media (min-width: 800px) {
.packery-item.size-1 {
  width: 50%;
}
.packery-item.size-2 {
  width: 100%;
}
   }
  @media (min-width: 1080px) {
.packery-item.size-1 {
  width: 33%;
}
.packery-item.size-2 {
  width: 66%;
}
   }
  @media (min-width: 1200px) {
.packery-item.size-1 {
  width: 25%;
}
.packery-item.size-2 {
  width: 50%;
}
.packery-item.size-2 {
  width: 75%;
}
   }
     @media (min-width: 1601px) {
.packery-item.size-1 {
  width: 20%;
}
.packery-item.size-2 {
  width: 40%;
}
.packery-item.size-3 {
  width: 60%;
}
   }
</style>
