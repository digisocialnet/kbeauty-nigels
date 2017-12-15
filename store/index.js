import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const createStore = () =>
  new Vuex.Store({
    state: {
      modelstate: {
        fields: {}
      },
      menuIsActive: false,
      intro: {
        heading:
          "A spacious and modern two-story condominium / townhome for rent in East Hollywood / Koreatown, central to schools, downtown, and everything, adjacent to Downtown Los Angeles, USC, Silverlake, Los Feliz, Echo Park, Hollywood, etc.",
        clicked: false,
        image: "/pics/la.jpg",
        text: "Available in January",
        fulltext:
          "Your opportunity to rent a townhouse style condo off of world-renowned Melrose Avenue! This home sits on a hill top giving you a panoramic view of Los Angeles including Downtown and the Griffith park mountains. This one of a kind town home is centrally located close to shopping, markets, schools, and trendy restaurants in LA's most vibrant neighborhood. It comes stacked with 2 bed + 2.5 bath at 1200 sq ft including 2 stories of living space. Kitchen, dining room, living room and powder room are downstairs and 2 master suite bedroom with its own full bathrooms are upstairs. Enclosed private patio for b-b-q. Dishwasher, microwave and gas range, refrigerator, washer and dryer, are all included. You will be pleasantly surprised how nice this street is. Parking is secure and controlled in a gated subterranean garage. The unit will come with 2 Car Parking (not tandem) with guest parking available for each unit. Air conditioning and heater throughout the entire unit.<br/><br/>Close to the 101 freeway, and close to the metro and public transportation. Quiet, perfect for a family, young professionals, students - the location is great, the condo has everything you need. No hassle, and easy-going landlord. Available for rent starting NOW, flexible on the start date.",
        size: false
      },
      regimen: [
        {
          heading: "Master Bedroom",
          id: 2,
          image: "/pics/masterbedroom.jpg",
          clicked: false,
          size: true
        },
        {
          heading: "2nd Bedroom",
          id: 3,
          image: "/pics/2ndbedroom.jpg",
          clicked: false,
          text: "2",
          size: true
        },
        {
          heading: "Living Room",
          id: 4,
          image: "/pics/livingroom.jpg",
          clicked: false,
          text: "2",
          size: true
        },
        {
          heading: "Master Bath",
          id: 4,
          image: "/pics/masterbath.jpg",
          clicked: false,
          text: "2",
          size: false
        },
        {
          heading: "2nd Bathroom",
          id: 4,
          image: "/pics/2ndbath.jpg",
          clicked: false,
          text: "2",
          size: false
        },
        {
          heading: "Outside Patio",
          id: 4,
          image: "/pics/patio.jpg",
          clicked: false,
          text: "2",
          size: false
        },
        {
          heading: "Laundry",
          id: 4,
          image: "/pics/laundry.jpg",
          clicked: false,
          text: "2",
          size: false
        },
        {
          heading: "Parking",
          id: 4,
          image: "/pics/parking.jpg",
          clicked: false,
          text: "2",
          size: false
        }
      ],
      outro: {
        heading: "Make an appointment today!",
        id: 11,
        clicked: false,
        fulltext:
          "A regimen from Nigel Beauty is the best way to preserve the youth and beauty of your skin. This site shows you where to buy the products and where to apply them for optimal results. Before you know it, you'll have the skin of someone decades younger.",
        size: true
      },
      animParams: {
        dur1: 0.25,
        dur2: 0.15,
        dur3: 0.35,
        ease: "",
        elastic: ""
      }
    },
    mutations: {
      SET_REGIMEN(state, regimen) {
        state.regimen = regimen;
      }
    },
    actions: {}
  });

export default createStore;
