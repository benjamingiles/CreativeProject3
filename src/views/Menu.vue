
<template>
<div>
  <MenuHeader />
  <MenuList :products="products" />
  <div class="github">
    <a href="https://github.com/benjamingiles/CreativeProject3.git">Github</a>
    <p>Ben Giles & Kurumi Asano</p>    
  </div>   
</div>
</template>

<script>
import MenuList from "../components/MenuList.vue"
import MenuHeader from "../components/MenuHeader.vue"
export default {
  name: 'Menu',
  components: {
    MenuList,
    MenuHeader
  },
  computed: {
    products() {
      return this.$root.$data.products;
    }
  }
}
</script>

<style>
.menu-item{
  text-align: center;
}

body {
  margin: 0px;
}
</style>
