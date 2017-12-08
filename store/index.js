import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const createStore = () =>
  new Vuex.Store({
    state: {
      menuIsActive: false,
      regimen: {
        intro: {heading: '10 Steps to Perfect Skin',
        clicked: false,
          text: "K-beauty is the latest trend in the beauty world. People are beginning to realize that the secret to great skin lies in the Korean method of layering on multiple targeted products. If you'd like to get the best skin of your life but don't know where to start, experiment with these products from Nigel Beauty in Los Angeles.",
          fulltext: "K-beauty is the latest trend in the beauty world. People are beginning to realize that the secret to great skin lies in the Korean method of layering on multiple targeted products. If you'd like to get the best skin of your life but don't know where to start, experiment with these products from Nigel Beauty in Los Angeles.",
          size: '3'},
        one: {heading: 'Cleansing Oil',
        clicked: false,
          text: 'Step 1',
          fulltext: "The first unusual thing you'll notice about your new K-beauty skincare routine is the double cleanse. It's not as crazy as it sounds. It makes a huge difference to start your routine with an oil-based or cream-based cleanser that loosens your makeup, skin oils and dead skin cells before you go in with a more powerful cleanser. The Killing Star Cleanser contains four different natural oils that remove impurities without stripping your skin.",
          size: '1'},
        two: {heading: 'Light Cleanser',
        clicked: false,
         text: 'Step 2',
          fulltext: 'Follow up with a mild cleanser like the Back to Iceland Cleansing Water, which will be more effective when used on skin that has already been treated to an oil cleanse. The cleansing water removes any lingering traces of the oil cleanser and final bits of dirt and makeup.',
          size: '1'},
        three: {heading: 'Exfoliate',
        clicked: false,
        text: 'Step 3',
          fulltext: "Now that your face is clean, use a mild exfoliant to dissolve away the top layers of skin. These top layers are where the visible signs of aging are most apparent. When you safely and gently remove these dead skin cells, it triggers your skin to generate new, fresh cells. This spray-on exfoliator is a convenient physical buffing agent that is safe to use up to three times a week.",
          size: '1'},
        four: {heading: 'Peel-Off Mask',
        clicked: false,
        text: 'Step 4',
          fulltext: 'This peel-off charcoal mask is another helpful non-daily skincare treatment. It draws sebum out of your skin for a refined surface texture with less visible pores. It also pulls blackheads out of problem areas like your nose, chin and forehead. Be careful not to use this on nights when you use the exfoliating spray. Charcoal masks are especially beneficial for oily skin, since they suck up excess oil.',
          size: '1'},
        five: {heading: 'Moisturize',
        clicked: false,
        text: 'Step 5',
          fulltext: "A treatment essence is a great follow-up to a toner. This essence from SKINRx LAB contains ceramides to deliver rich, anti-aging moisture. Before the essence dries completely, apply a gel-like serum like the COSRX Snail 96 Mucin Power Essence. This is when the treatments start to get a bit more intense, so its good to have laid down a foundation of lightweight water-based products first. The snail serum's antioxidant blend fends off skin cell damage from aging free radicals and also provides a bit of protection from UV rays.",
          size: '1'},
        six: {heading: 'Essences and Ampules',
        clicked: false,
        text: 'Steps 6 + 7',
          fulltext: "Though these treatments are good for the health of your skin, they might leave your face feeling a bit tight and sensitive. This is the right time to use a COSRX Moisture Up Pad. This product contains hyaluronic acid, which draws water moisture from the air into your skin to plump up and smooth out fine lines. Toners also prep the skin and open up your pores so they're ready to receive whatever products you apply next.",
          size: '2'},
        seven: {heading: 'Sheet Mask',
        clicked: false,
        text: 'Step 8',
          fulltext: "If you feel you need extra moisture at this point, use a CLIV character sheet mask. Leave the sheet mask on for 10 to 15 minutes to give all of the nutrients and moisturizers time to absorb. After you remove the sheet, gently massage the remaining serum into your skin. Sheet masks are excellent treatments during cold, dry weather or after you've gotten a bit too much sun.",
          size: '1'},
        eight: {heading: 'Eye Patches',
        clicked: false,
        text: 'Step 9',
          fulltext: "We can't forget the delicate skin under your eyes. The skin in this area is especially fragile and prone to aging before the rest of your face. Place these PureHeal's Ginseng Berry Eye Patches under your eyes for a quick infusion of energizing antioxidants to keep your skin firm and healthy.",
          size: '1'},
        nine: {heading: 'Cream',
        clicked: false,
        text: 'Step 10',
          fulltext: "The final step in your new skincare routine is the Skin&Lab Red Cream. It is a rich moisturizer that is chock full of antioxidants and stem cells to slow down your skin's natural life cycle. Your skin will stay younger longer. Even oily skin can benefit from a thick night cream. The sebaceous glands produce less oil when you treat your face to clean, fresh moisture.",
          size: '1'},
        outro: {heading: 'Discover K-Beauty today',
        clicked: false,
          fulltext: "A regimen from Nigel Beauty is the best way to preserve the youth and beauty of your skin. This site shows you where to buy the products and where to apply them for optimal results. Before you know it, you'll have the skin of someone decades younger.",
          size: '2'}
      },
      animParams: {
        dur1: 0.25,
        dur2: 0.15,
        dur3: 0.35,
        ease: '',
        elastic: ''
      }
    },
    mutations: {
      SET_PINBOARD (state, pins) {
        state.pins = pins
      },
      SET_ALLPINS (state, pins) {
        state.allpins = pins
      },
      SET_PINBOARDTAGS (state, pinboardTags) {
        state.pinboardTags = pinboardTags
      },
      SET_CURRENTTAG (state, currentTag) {
        state.currentTag = currentTag
      },
      SET_PARAMTAG (state, paramTag) {
        state.paramTag = paramTag
      },
      SETPINBOARDKEY (state, pinboardkey) {
        state.pinboardkey = pinboardkey
      },
      setMenuState (state, menuIsActive) {
        state.menuIsActive = menuIsActive
      },
      setMenuInitial (state, menuInitial) {
        state.menuInitial = menuInitial
      },
      toggleMenuState (state) {
        state.menuIsActive = !state.menuIsActive
      },
      toggleMenuInitial (state) {
        state.menuInitial = !state.menuInitial
      }

    },
    actions: {
    }
  })

export default createStore
