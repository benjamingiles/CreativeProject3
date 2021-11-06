<template>
<div id="app">
  <div id="menu">
    <div id="brand">
      <router-link to="/">
        <h1>Our Restaurant</h1>
      </router-link>
    </div>
    <div id="side">
      <router-link to="/menu">
        <div class="menu-item browse">
          <button class="order">Order</button>
        </div>
      </router-link>
      <router-link to="/checkout">
        <div class="menu-item">
          <button class="order">Checkout</button>
        </div>
      </router-link>
    </div>
  </div>
  <router-view />
</div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;
}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "brand none side";
  margin-bottom: 50px;
}

#menu a {
  color: #B8860B;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
  margin: 50px;
}

#brand img {
  height: 200px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}
</style>
