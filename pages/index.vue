
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

 <div class='animatedimage'></div>
        <nuxt-link to="/" exact><span class="title has-text-center el">K-Beauty:<br/><small>Perfect Skin in 10 Steps</small></span></nuxt-link>  <a href="https://www.nigelbeauty.com/">
          <img src="../assets/nigel.svg" class="el logo" alt="Logo">
          </a>
                       <p class="field box">


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
              <div class="content description"> {{steps.intro.text}}<br/><br/>
<share />

              </div>
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
import kFooter from "~/components/k-footer";
import steps from "~/components/steps";
import share from "~/components/share";

export default {
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
.description {
  color: RGBA(160, 138, 137, 1);
  line-height: 1.8;
  font-size: 1.2rem;
}
.button {
  background: RGBA(255, 94, 126, 1);
  margin-top:2px;
  margin-bottom:2px;
}
.cta-main {
  background: RGBA(29, 60, 101, 1);
}
.button span {
  color: #fff !important;
  transition: 0.3s all;
}
.cta-main:hover {
  transition: 0.3s all;
}
.title small {
  opacity: 0.6;
  font-size: 80%;
}
.box {
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.5) 100%,
    rgba(255, 255, 255, 0.2) 4%
  );
}
.field.box {
  margin-top: 16px;
}
.logo {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 80px;
  height: auto;
  fill: #7a707a;
}
.section {
  padding: 0;
}
.wrp {
  height: 100vh;
}
.left {
  background: RGBA(254, 242, 242, 1);
}
.aside,
.left {
  overflow-y: auto;
  max-height: 100vh;
  width: 50vw;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
}
.aside {
  background: linear-gradient(
    0deg,
    RGBA(255, 255, 255, 1) 43%,
    RGBA(119, 130, 154, 0.1) 100%
  );
}
@media (max-width: 801px) {
  .aside,
  .left {
    overflow-y: auto;
    max-height: initial;
    width: 100vw;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
  }
  footer.footer {
    display: none;
  }
}
.animatedimage {
  width: 300px;
  height: 300px;
  background: url("~/assets/ico.svg") left center;
  background-repeat: repeat-x;
  background-size: cover;
  backface-visibility: hidden;
  animation: play 2.5s steps(13) infinite;
}
@keyframes play {
  100% {
    background-position: -3900px;
  }
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
  margin-top: 24px;
  padding: calc(24px + 1vw);
  font-weight: 200;
}
.steps.container {
  margin: 16px;
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
  font-size: calc(16px + 1.7vw);
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

.hero.is-pink .title {
  color: #1d3c65;
  font-weight: 300;
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
</style>
