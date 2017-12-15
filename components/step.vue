<template>
<div>
      <div v-packery-item v-bind:data-clicked="stp.clicked | booleanfilt" v-bind:data-size="stp.size | booleanfilt" :index="index" v-bind:key="stp.id" @click="stp.clicked = !stp.clicked, stp.size = !stp.size" class="column packery-item step">
        <article>
        <div class="notification step is-pink-outline is-bold">
          <figure v-if="stp.image" class="image is-1by1">
          <img :src="stp.image">
          </figure>

                <div class="step-number">
         {{stp.text}}
      </div> <h4 class="title">{{stp.heading}} <transition name="slide">
       <span class="productname" v-if="stp.clicked">
         {{stp.productname}}
       </span>
</transition></h4>
      <!-- <transition name="slide">
       <p class="description" v-if="stp.clicked">
         {{stp.fulltext}}
       </p>
</transition> -->

        </div>
       </article>
      </div>
      </div>
</template>
<script>
 export default {
    data () {
      return {
stp: []

      }
    },
    computed: {


    },
    filters: {
booleanfilt (value) {
return Boolean(value)
}
    },
 props: ['steps', 'stp'],

 }

</script>
