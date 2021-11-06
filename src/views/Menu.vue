
<template>
<div>
  <MenuHeader />
  <MenuList :products="products" />
  <a href="https://github.com/benjamingiles/CreativeProject3.git">Github</a>
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
body {
  margin: 0px;
}
</style>
