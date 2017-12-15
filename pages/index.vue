<template>
<div>
  <div class="pinContainer" ref="pin">
<section class="hero is-pink is-fullheight is-bold panel-0">
  <div class="hero-head">

  </div>

  <div class="hero-body">
    <div class="container has-text-center">
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
  </div>

  <div class="hero-foot">

  </div>
</section>
<section class="hero is-pink is-fullheight is-bold panel-1">
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
          <img src="../assets/nigel.svg" class="logo" alt="Logo">
          </a>


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

  </div>
</section>
<section class="hero is-pink is-fullheight is-bold panel-2">
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
          <img src="../assets/nigel.svg" class="logo" alt="Logo">
          </a>


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
        <article>
        <h4 class="title is-primary">
        {{steps.intro.heading}}
      </h4>
        <h5>
         {{steps.intro.text}}
      </h5>

       </article>

    </div>
  </div>


</section>
</div>
<section>
  <div class="steps container is-fluid">

  <div class="columns is-multiline is-variable is-5" v-packery="{itemSelector: '.packery-item', percentPosition: true,isInstant:true}">

      <div v-packery-item v-if="stp.id != 0" v-for="(stp, index) in steps.regimen" :data-clicked="stp.clicked | booleanfilt" :data-size="stp.size | booleanfilt" :index="index" :key="stp.id" class="column packery-item step">
        <article><nuxt-link :to="`/step/${stp.id}`">
        <div class="notification step is-pink-outline is-bold">
          <figure v-if="stp.image" class="image is-1by1">
          <img :src="stp.image">
          </figure>

                <div class="step-number">
         STEP {{stp.text}}
      </div> <h4 class="title">{{ stp.heading }}
       <span class="productname">
         {{stp.productname}}
       </span>
</h4>

        </div></nuxt-link>
       </article>
      </div>

   </div>
</div>
</section>
<k-footer/>
  </div>
</template>

<script>
import kFooter from "~/components/k-footer";

export default {
  data() {
    return {
    };
  },
  transition: 'page',
  components: {
    kFooter
  },
  mounted() {
     if (process.browser) {
    this.$nextTick(this.pinContainerScene);
     }
  },
  filters: {
    booleanfilt(value) {
      return Boolean(value);
    }
  },
  computed: {
    steps() {
      return this.$store.state;
    }
  },
  destroyed() {

    this.$ksvuescr.$emit("destroy");

  },
  methods: {
 animate () {
             if (process.browser) {
      console.log('loading...')
      var tl = new this.$gsap.TimelineMax()
            var tl2=new this.$gsap.TimelineMax({repeat:-1,repeatDelay:1})

      var tg = document.querySelectorAll('.el')
       var img = document.querySelectorAll('.animatedimage img')
      const elastic = this.$gsap.Elastic.easeOut.config(2, 0.3)


      tl.staggerTo(tg, 0.3, { autoAlpha: 0, ease: elastic }, 0.1)
       tl2.staggerTo(img,0,{opacity:0},0.08);
         console.log('finished start')
    }
    },
    pinContainerScene() {
       if (process.browser) {
      const Length = 3;
      const tl = new this.$gsap.TimelineMax();
        var img = document.querySelector('.hero-body')

      for (var i = 0; i < Length; i++) {
tl.fromTo(`.panel-${i}`, 1.5, {
          autoAlpha: 1,
          y: "0",
          ease: this.$gsap.Linear.easeNone
        }, {
          autoAlpha: 0,
          y: 0,
          ease: this.$gsap.Linear.easeNone
        });

      if (i !== 0) {
        // For each panel except the one whom index is 0, create the tween and add it to the tl timeline
        tl
        .fromTo(`.panel-${i} .title`, 1.5, {autoAlpha: 1,
          y: "0",
          ease: this.$gsap.Linear.easeNone
        }, {
          autoAlpha: 0,
          y: 0,
          ease: this.$gsap.Linear.easeNone
        })
        .fromTo(`.panel-${i}`, 1.5, {autoAlpha: 1,
          y: "0",
          ease: this.$gsap.Linear.easeNone
        }, {
          autoAlpha: 0,
          y: 0,
          ease: this.$gsap.Linear.easeNone
        });
      console.log('loading...')





      const scene = new this.$scrollmagic.Scene({
        triggerElement: '.pinContainer',
        triggerHook: "onEnter",
        duration: '300%'
      })
        .setPin(`section.panel-${i}`)
        .setTween(tl)


         console.log('finished start')
    };

}

      // Add scene to ScrollMagic controller by emiting an 'addScene' event on vm.$ksvuescr (which is our global event bus)
      this.$ksvuescr.$emit("addScene", "pinContainerScene", scene);

      // TAAAAAAADAAAAAAAAAAAA
    }
    }
  }
};
</script>

<style scoped>
.pinContainer {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
}
.pinContainer section {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
body {
  font-family: "futura-pt", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.title,
.subtitle {
  font-family: orpheuspro, Cambria, Cochin, Georgia, Times, Times New Roman,
    serif;
}

.notification {
  transition: width 0.4s, height 0.4s;
}
.step-number {
  font-weight: 900;
  display: inline-block;
}
.steps {
  margin-top: 48px;
  padding: calc(24px + 2vw);
  font-weight: 200;
}
.slide-enter-active,
.slide-leave-active {
  overflow-x: hidden;
  max-width: 800px;
  opacity: 1;
  transition-property: all;
  transition-duration: 0.5s;
  transition-delay: 0.2s;
  transition-timing-function: ease-out;
}
.slide-enter,
.slide-leave-to {
  max-width: 0px;
  opacity: 0;
  transition-property: all;
  transition-duration: 0.5s;
  transition-delay: 0.25s;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}
.notification.intro {
  background-color: #fff;
  margin: 18px;
}
.notification {
  padding: 36px;
  color: #b19998;
  flex: 1 0 auto;
}
a.button span {
  color: #7a707a;
  font-weight: 700;
}
.is-pink {
  background: #feeae9;
}
.step .title {
  font-size: calc(20px + 1.7vw);
}
.grid-sizer {
  height: 200px;
}
figure {
  margin-bottom: 16px;
}
figure img {
  border-radius: 8px;
  background: #fff;
  padding: 12px;
  border: 2px solid #feeae9;
  pointer-events: none;
}
.expand,
.active {
  width: 100%;
  min-height: 50vh;
  transform: scale3d(20);
  transition: 0.4s all;
}
.is-pink-outline {
  border: 2px solid #feeae9;
  border-radius: 18px;
  background: #fff;
  transition: 0.6s background-color ease-in, 1s border-color ease-in-out,
    0.4s transform ease;
}
.is-pink-outline:hover {
  background: #fef3f2;
  border: 2px solid #ffcdca;
  transition: 1.3s background-color ease-out, 0.3s border-color ease-in-out,
    0.2s transform cubic-bezier(0, 1, 0.5, 1);
  transform: scale(1.03) perspective(2000px) rotateY(8deg)
    translate3d(8px, 0, 0);
  transition: 0.3s transform;
  z-index: 100;
}

.logo {
  height: 24px;
  width: auto;
  fill: #7a707a;
}
.hero.is-pink .title {
  color: #1d3c65;
  font-weight: 100;
  font-size: calc(44px + (160 - 100) * (100vw - 300px) / (1920 - 300));
}
.network {
  font-weight: 400;
  font-size: 1rem;
}
.hero.is-pink .subtitle {
  color: #a89aa8;
  font-weight: 100;
  font-size: calc(28px + (160 - 100) * (100vw - 300px) / (1920 - 300));
}

.network .circle {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background: green;
  padding: 0.1rem 0.5rem;
  border-radius: 1rem;
}
.column {
  padding: 0;
}
.columns.is-variable .column {
  padding-left: 0;
  padding-right: 0;
  display: flex;
}
.title {
  letter-spacing: -0.2rem;
}
.is-pink .title {
  color: #7957d5;
}
.network.offline .circle {
  background: red;
}
h4.title {
  color: #1d3c65;
}
.packery-item {
  display: flex;
  flex-direction: column;
}
.packery-item article {
  padding-right: 4px;
  padding-left: 4px;
  padding-top: 4px;
  padding-bottom: 4px;
  cursor: pointer;
}
.packery-item[data-clicked="true"] .notification {
  border: 6px solid #ffcdca;
  z-index: 101;
  transition: 0.3s all;
}

.packery-item[data-clicked="true"] .title {
  color: #ff3860;
}

.packery-item[data-clicked="true"] .notification {
  box-shadow: 7px 9px 105px 0px rgba(0, 0, 0, 0.3);
  border-color: #ff3860;
  transition: 0.3s all ease-in-out;
  max-height: 90vh;
  overflow-y: hidden;
}
.description {
  padding-bottom: 16px;
}
.packery-item[data-clicked="true"] .description {
  overflow-y: scroll;
}
.packery-item[data-clicked="true"] .notification:hover {
  background: #fff;
  transform: scale(0.99);
  transition: 0.3s all;
  border-width: 8px;
}
.packery-item[data-clicked="true"] .notification:active {
  background: #fef3f2;
  transform: translateY(3px);
  transition: 0.05s all;
}
.packery-item[data-clicked="true"] .notification:hover h4.title {
  opacity: 0.7;
}
.packery-item[data-clicked="true"] .notification:active h4.title {
  opacity: 0.3;
}

@media (min-width: 280px) and (max-width: 799px) {
  .packery-item,
  .packery-item[data-size="false"] {
    width: 100%;
  }
  .notification {
    padding: 9px;
    margin-bottom: 9px;
  }
  .packery-item[data-size="true"] {
    width: 100%;
  }
  .step.notification .step-number {
    margin: auto 8px;
  }
  .step.notification {
    width: 100%;
  }
  .step.notification > * {
    display: inline-block;
    position: relative;
  }
  .step-number,
  h4.title {
    top: -32px;
  }
  .packery-item[data-clicked="true"] figure.image,
  .step-number,
  h4.title {
    margin: initial;
  }
  .packery-item[data-clicked="true"] .step.notification > * {
    display: block;
  }
  .packery-item[data-clicked="true"] .step.notification {
    display: inherit;
  }
  .packery-item[data-clicked="true"] .notification:active * {
    opacity: 0;
    display: inherit;
  }
  .packery-item[data-clicked="true"] figure.image,
  .packery-item[data-clicked="true"] figure.image img {
    width: auto;
    height: 50%;
    position: ;
  }
  .step.notification img,
  .step.notification figure {
    width: 64px;
    height: 64px;
  }
  .image.is-1by1 {
    padding-top: 0;
  }
}

@media (min-width: 800px) and (max-width: 1079px) {
  .packery-item,
  .packery-item[data-size="false"] {
    width: 50%;
  }
  .image.is-1by1,
  .image.is-square {
    padding-top: 0;
  }
  .step-number,
  h4.title {
    top: -32px;
  }
  .step.notification > * {
    display: inline-block;
    position: relative;
  }
  .step.notification img,
  .step.notification figure {
    width: 128px;
    height: 128px;
  }
  .notification {
    padding: 18px;
    margin-bottom: 9px;
    display: flex;
    align-items: center;
  }
  .packery-item[data-size="true"],
  .active.packery-item[data-size="true"] {
    width: 100%;
  }
  .step.notification {
    display: relative;
  }
  .step.notification figure {
    margin-bottom: 0;
  }
}

@media (min-width: 1200px) and (max-width: 1600px) {
  .packery-item,
  .packery-item[data-size="false"] {
    width: 25%;
  }
  .packery-item[data-size="true"],
  .active.packery-item[data-size="false"] {
    width: 50%;
  }
  .packery-item[data-size="2"] {
    width: 75%;
  }
}

@media (min-width: 1601px) {
  .packery-item,
  .packery-item[data-size="false"] {
    width: 20%;
  }
  .packery-item[data-size="true"],
  .active.packery-item[data-size="false"] {
    width: 40%;
  }
  .packery-item[data-size="2"] {
    width: 60%;
  }
}
.step-intro .notification {
  border-color: #fff !important;
  background-color: #fff !important;
}
.productname {
  font-size: 14px;
  font-weight: 400;
  color: #333;
  letter-spacing: 0;
}
</style>
