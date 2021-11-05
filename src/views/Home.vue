<template>
<div class="home">
  <HomeHeader />
  <HomeSpecial :specials="specials" />
  <router-link to="/menu">
    <div class="menu-item browse">
      <button type="button" name="button">Order</button>
    </div>
  </router-link>
</div>
</template>

<script>
import HomeSpecial from '../components/HomeSpecial.vue'
import HomeHeader from "../components/HomeHeader.vue"
export default {
  name: 'Home',
  components: {
    HomeSpecial,
    HomeHeader
  },
  computed: {
    specials() {
      return this.$root.$data.specials;
    }
  }
}
</script>
