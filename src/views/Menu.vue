
<template>
<div>
  <MenuHeader />
  <MenuList :products="products" />
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
