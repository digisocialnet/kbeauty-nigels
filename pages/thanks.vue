<template>
<div>
<section class="hero is-pink is-bold is-fullheight">
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">


      </div>
    </nav>
  </div>

  <div class="hero-body">
    <div class="container has-text-center">
      <span class="title has-text-center">
        Your application has been submitted 👍
      </span>


    </div>
  </div>

  <div class="hero-foot">

  </div>
</section>
</div>
</template>

<script>
export default {
  data() {
    return {
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
