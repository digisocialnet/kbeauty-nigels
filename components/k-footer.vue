<template>
<footer class="footer">
    <div class="content has-text-left small">

      <p>
        <nuxt-link to="/" exact><strong>10 Step K-Beauty Regimen</strong></nuxt-link> by <a href="https://www.nigelbeauty.com"><img src="~/assets/nigel.svg"></a>.<br/>11252 Magnolia Blvd., North Hollywood, CA 91601
      </p>
    </div>
</footer>
</template>
<script>
import kFooter from "~/components/k-footer"
import steps from "~/components/steps"

export default {

  data() {
    return {
      title: 'K-Beauty'
    };
  },
   head () {
    return {
      title: this.title
    }
  },
  components: {
    kFooter,
    steps
  }
}
</script>
<style scoped>
footer img {height:12px;width:auto;}
.footer a {font-family: orpheuspro,-apple-system, BlinkMacSystemFont, sans-serif; font-size: 16px; color: RGBA(29,60,101,1.00); }
footer {background: #FEEAE9;width:100%;border-top: 1px solid rgba(0,0,0,.1);font-size:13px;background:RGBA(254,242,242,1.00);color:RGBA(160,138,137,1.00)}
</style>
