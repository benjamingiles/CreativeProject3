<template lang="html">
  <div>
    <CheckoutHeader />
    <div v-if="!cart.length"><h2>Cart Empty</h2></div>
    <CheckoutList :products="cart" />
    <div class="total">
      <h1>Total Price:</h1>
      <button v-on:click="totalPrice">Get Price</button>
      <h3>${{parseFloat(price).toFixed(2)}}</h3>
    </div>
    <div class="github">
      <a href="https://github.com/benjamingiles/CreativeProject3.git">Github</a>
      <p>Ben Giles & Kurumi Asano</p>    
    </div> 
  </div>
</template>

<script>
import CheckoutHeader from "../components/CheckoutHeader.vue"
import CheckoutList from "../components/CheckoutList.vue"
export default {
  name: 'Checkout',
  components: {
    CheckoutHeader,
    CheckoutList
  },
  data() {
    return {
      price: 0.0,
    }
  },
  computed: {
    cart() {
      return this.$root.$data.cart;
    },
  },
  methods: {
    totalPrice() {
      this.price = 0.0;
      if (this.$root.$data.cart.length) {
        this.$root.$data.cart.forEach(product => {
          this.price += product.price;
        });
      }
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

h2 {
  display: flex;
  justify-content: center;
}

.total {
  margin-left: 50px;
}
</style>
