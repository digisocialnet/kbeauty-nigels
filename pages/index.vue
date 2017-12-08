<template>
<div>
 <section class="hero is-pink is-bold is-medium">
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
        K-Beauty 💁🏻‍🇰🇷<span class="subtitle">
        The&nbsp;LA&nbsp;Way
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
  <div class="columns is-multiline is-variable is-5">
      <div v-for="(reg, index) in regimen" class="column is-one-third">
        <article>
        <div class="notification is-pink is-bold">
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
  import Logo from '~/components/Logo.vue'

  export default {
    components: {Logo},
    data () {
      return {
        online: true,
        regimen: {
          intro: {heading: "10 Steps to Perfect Skin",text: "K-beauty is the latest trend in the beauty world. People are beginning to realize that the secret to great skin lies in the Korean method of layering on multiple targeted products. If you'd like to get the best skin of your life but don't know where to start, experiment with these products from Nigel Beauty in Los Angeles."},
          one: {heading: "Double your Cleanse?",text: "The first unusual thing you'll notice about your new K-beauty skincare routine is the double cleanse. It's not as crazy as it sounds. It makes a huge difference to start your routine with an oil-based or cream-based cleanser that loosens your makeup, skin oils and dead skin cells before you go in with a more powerful cleanser. The Killing Star Cleanser contains four different natural oils that remove impurities without stripping your skin."},
          two: {heading: "Cleanser (part 2)",text:"Follow up with a mild cleanser like the Back to Iceland Cleansing Water, which will be more effective when used on skin that has already been treated to an oil cleanse. The cleansing water removes any lingering traces of the oil cleanser and final bits of dirt and makeup."},
          three: {heading: "Toning",text:"A treatment essence is a great follow-up to a toner. This essence from SKINRx LAB contains ceramides to deliver rich, anti-aging moisture. Before the essence dries completely, apply a gel-like serum like the COSRX Snail 96 Mucin Power Essence. This is when the treatments start to get a bit more intense, so it's good to have laid down a foundation of lightweight water-based products first. The snail serum's antioxidant blend fends off skin cell damage from aging free radicals and also provides a bit of protection from UV rays."},
          four: {heading: "Toning",text:"Now that your face is clean, use a mild exfoliant to dissolve away the top layers of skin. These top layers are where the visible signs of aging are most apparent. When you safely and gently remove these dead skin cells, it triggers your skin to generate new, fresh cells. This spray-on exfoliator is a convenient physical buffing agent that is safe to use up to three times a week. "},
          five: {heading: "Toning",text:"This peel-off charcoal mask is another helpful non-daily skincare treatment. It draws sebum out of your skin for a refined surface texture with less visible pores. It also pulls blackheads out of problem areas like your nose, chin and forehead. Be careful not to use this on nights when you use the exfoliating spray. Charcoal masks are especially beneficial for oily skin, since they suck up excess oil."},
          six: {heading: "Toning",text:"Though these treatments are good for the health of your skin, they might leave your face feeling a bit tight and sensitive. This is the right time to use a COSRX Moisture Up Pad. This product contains hyaluronic acid, which draws water moisture from the air into your skin to plump up and smooth out fine lines. Toners also prep the skin and open up your pores so they're ready to receive whatever products you apply next."},
          seven: {heading: "Toning",text:"If you feel you need extra moisture at this point, use a CLIV character sheet mask. Leave the sheet mask on for 10 to 15 minutes to give all of the nutrients and moisturizers time to absorb. After you remove the sheet, gently massage the remaining serum into your skin. Sheet masks are excellent treatments during cold, dry weather or after you've gotten a bit too much sun."},
          eight: {heading: "Toning",text:"We can't forget the delicate skin under your eyes. The skin in this area is especially fragile and prone to aging before the rest of your face. Place these PureHeal's Ginseng Berry Eye Patches under your eyes for a quick infusion of energizing antioxidants to keep your skin firm and healthy."},
          nine: {heading: "Toning",text:"The final step in your new skincare routine is the Skin&Lab Red Cream. It is a rich moisturizer that is chock full of antioxidants and stem cells to slow down your skin's natural life cycle. Your skin will stay younger longer. Even oily skin can benefit from a thick night cream. The sebaceous glands produce less oil when you treat your face to clean, fresh moisture."},
          outro: {heading: "Toning",text:"A regimen from Nigel Beauty is the best way to preserve the youth and beauty of your skin. This site shows you where to buy the products and where to apply them for optimal results. Before you know it, you'll have the skin of someone decades younger."}


        }
      }
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
.steps {margin-top: 48px; padding: 1.5rem;}
.notification {padding: 36px; color:#B19998;}
a.button span {color:#7a707a;font-weight: 700;}
.is-pink {background: #FEEAE9;}
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
.is-pink .title {color: #7957D5}
  .network.offline .circle {
    background: red;
  }
</style>
