<template>
<div class="home">
  <HomeHeader />
  <HomeSpecial :specials="specials" />
  <router-link to="/menu">
    <div class="menu-item browse">
      <button class="order">Order Now</button>
    </div>
  </router-link>
  <div class="github">
    <a href="https://github.com/benjamingiles/CreativeProject3.git">Github</a>
  </div>
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

<style>
.menu-item{
  text-align: center;
}

.order {
  justify-content: center;
  margin: 40px;
  margin-top: 70px;
  text-align: center;
  background-color: #B8860B;
  font-size: 24px;
  color: white;
}

.github {
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
}

a {
  font-size: 30px;
}
</style>
