<template>
<dir class="wrapper">
  <div class="products">
    <div class="product" v-for="(product, index) in products" :key="product.id">
      <div class="info-name">
        <h1>{{product.name}}</h1>
        <h3>{{product.calories}} kcal</h3>
      </div>
      <div class="image">
        <img :src=product.image>
      </div>
      <div class="info-others">
        <h2>${{product.price}}</h2>
        <button v-on:click="removeCart(index)" class="auto">Remove from Order</button>
      </div>
    </div>
  </div>
</dir>
</template>



<script>
export default {
  name: 'MenuList',
  props: {
    products: Array
  },
  methods: {
    removeCart(index) {
      this.$root.$data.cart.splice(index, 1);
    }
  },

}
</script>



<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 100px;
  margin-left: 100px;
  padding-left: 0;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 10px;
  margin-bottom: 40px;
  width: 200px;
}

.product img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  margin: 10px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info-name {
  color: #000;
  height: 80px;
  text-align: center;
  ;
}

.info-name h1 {
  font-size: 25px;
  margin-bottom: 10px;
  align-content: center;
}

.info-name h3 {
  font-size: 16px;
  margin: 0;
}

.info-name p {
  margin: 0px;
  font-size: 10px;
}


.info-others {
  display: flex;
}

.info-others h2 {
  font-size: 30px;
  margin-top: 10px;
  margin-left: 10px;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

button:hover,
button:focus {
  background: gray;
}

button:focus {
  outline: 1px solid #fff;
  outline-offset: -4px;
}

button:active {
  transform: scale(0.99);
}

.auto {
  margin-left: auto;
}
</style>
