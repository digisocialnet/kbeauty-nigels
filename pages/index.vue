<template>
<div>
<section class="hero is-pink is-medium is-bold">
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
<div v-bind:data-size="steps.intro.size | booleanfilt" v-bind:key="steps.intro.id" class="column is-6-desktop">
        <article>
        <div class="notification intro is-light is-bold">
          <figure class="image">
 <img v-bind:src="steps.intro.image" class="img-fluid">
     </figure>
        </div>
       </article>
      </div>
      <div v-bind:data-size="steps.intro.size | booleanfilt" v-bind:key="steps.intro.id" class="column is-6-desktop">
        <article>
        <div class="notification intro is-light is-bold">
        <h4 class="title is-primary intro-text">
        {{steps.intro.heading}}
      </h4>
        <h5 v-html="steps.intro.full">

      </h5>
      <strong>Call <a href="tel:4242592206">424-259-2206</a> for more information or to make a viewing appointment.</strong>
        </div>
       </article>
      </div>
      <div v-for="(stp, index) in steps.regimen" v-bind:class="{ 'is-12-tablet': size, 'is-6-tablet': !size }" v-bind:data-clicked="stp.clicked | booleanfilt" v-bind:data-size="stp.size | booleanfilt" :index="index" v-bind:key="stp.id" class="column step">
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
<footer class="footer">
  <div class="container-fluid">
    <div class="content has-text-centered">
       <h3 class="is-bold">Also Listed On: </h3>
    <div class="is-grouped has-text-centered">

  <a class="button is-danger is-inverted" href="https://www.zillow.com/homedetails/532-N-Mariposa-Ave-APT-105-Los-Angeles-CA-90004/82873208_zpid/">Zillow</a>
  <a class="button is-danger is-inverted" href="https://hotpads.com/532-n-mariposa-ave-los-angeles-ca-90004-svx01d/105/pad?">Hotpads</a>
  <a class="button is-danger is-inverted" href="https://www.trulia.com/rental/4039811643-532-N-Mariposa-Ave-105-Los-Angeles-CA-90004?">Trulia</a>
</div>
</div>
 <BR/><BR/>
      </div>
  </footer>
</div>
</template>

<script>
export default {
  data() {
    return {
      online: true
    };
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
  mounted() {},
  methods: {
    expand($event) {
      this.$store.commit("SET_REGIMEN", value);
    },
    toggle(clicked, $event) {
      event.currentTarget.classList.toggle("expand");
      event.currentTarget.classList.toggle("active");
      this.$store.commit("SET_REGIMEN", value);
    }
  }
};
</script>

<style scoped>

</style>
