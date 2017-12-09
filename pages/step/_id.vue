<template>
        <article>
        <div class="notification step is-pink-outline is-bold">
          <figure v-if="step.image" class="image is-1by1">
          <img :src="step.image">
          </figure>
        <h4 class="title">
        {{step.heading}}
      </h4>
        <h5>
         {{step.text}}
      </h5>
       <p v-if="step.clicked">
         {{step.fulltext}}
       </p>

    <a class="button is-danger">Learn More</a>

        </div>
       </article>
</template>

<script>

  export default {
    validate({ params }) {
    return !isNaN(+params.id)
  },
    data () {
      return {
       

      }
    },
    computed: {
    steps: {
    get () {
      return this.$store.state.regimen;
    },
    set (value) {
      this.$store.commit('SET_REGIMEN', value)
    }
  },
    },
    updated() {

    },
    mounted () {


    
    },
    methods: {
               

    },
    destroyed () {

    }
  }
</script>

<style scoped>

</style>
