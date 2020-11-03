<template>
  <div class="nav-bar">
    <img class="logo" src="../assets/images/carved-rock-logo-white.png" alt="Carved Rock Fitness" />
    <div class="nav-item">
      <router-link class="nav-link" :to="{name: 'Products'}" exact>Products</router-link>
    </div>
    <div class="nav-item">
      <router-link class="nav-link" :to="{name: 'Cart'}" exact>Cart</router-link>
    </div>
    <account-menu />
  </div>
</template>

<script>
import AccountMenu from './AccountMenu.vue';

export default {
  name: 'NavBar',
  components: { AccountMenu },
};
</script>

<style scoped>
.logo {
  height:50px;
  margin:5px;
}
.nav-bar {
  display:flex;
  align-items: center;
  background-color: #336699;
  font-size:20px;
}
.nav-item {
  padding-left: 40px;
}
a {
  color: white;
}
a:hover {
  color: #D6F0FC;
}
</style>
