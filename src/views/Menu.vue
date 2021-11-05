
<template>
<div>
  <div class="info">
    <p>Menu page</p>
  </div>
  <MenuList :products="products" />
</div>
</template>


<script>
import MenuList from "../components/MenuList.vue"
export default {
  name: 'Menu',
  components: {
    MenuList
  },
  computed: {
    products() {
      return this.$root.$data.products;
    }
  }
}
</script>
