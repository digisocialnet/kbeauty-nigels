import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const createStore = () =>
  new Vuex.Store({
    state: {
      menuIsActive: false,
      intro: {
        heading: 'Beautiful 2 bedroom, 2.5 bathroom townhouse-style condominium in the heart of Los Angeles',
        clicked: false,
         text: "Available in January",
         fulltext: "Available in January",
         size: true},
      regimen: [
        {heading: 'Master Bedroom',
          id: 2,
          image: '/pics/masterbedroom.jpg',
          clicked: false,
          size: false},
        {heading: '2nd Bedroom',
          id: 3,
          image: '/pics/2ndbedroom.jpg',
          clicked: false,
          text: '2',
          size: false},
          {heading: 'Living Room',
          id: 4,
          image: '/pics/livingroom.jpg',
          clicked: false,
          text: '2',
          size: false},
          {heading: 'Master Bath',
          id: 4,
          image: '/pics/masterbath.jpg',
          clicked: false,
          text: '2',
          size: false},
          {heading: '2nd Bathroom',
          id: 4,
          image: '/pics/2ndbath.jpg',
          clicked: false,
          text: '2',
          size: false},

      ],
      outro:
      {heading: 'Make an appointment today!',
      id: 11,
      clicked: false,
      fulltext: "A regimen from Nigel Beauty is the best way to preserve the youth and beauty of your skin. This site shows you where to buy the products and where to apply them for optimal results. Before you know it, you'll have the skin of someone decades younger.",
      size: true},
      animParams: {
        dur1: 0.25,
        dur2: 0.15,
        dur3: 0.35,
        ease: '',
        elastic: ''
      }
    },
    mutations: {
      SET_REGIMEN (state, regimen) {
        state.regimen = regimen
      }

    },
    actions: {
    }
  })

export default createStore
