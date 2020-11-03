<template>
  <div class="app">
    <NavBar/>
    <div class="main">
      <router-view/>
    </div>
  </div>

</template>

<script>
import NavBar from './navigation/NavBar.vue';

export default {
  name: 'App',
  components: { NavBar },
};
</script>

<style>
.app {
  width: 1000px;
  margin: auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.main {
  background-color:white;
}
a {
  text-decoration: none;
}
button {
  font-size: 24px;
  color: #336699;
  padding: 4px 16px;
  border: 0px;
  border-radius: 2px;
  font-size: 24px;
  text-decoration: none;
  height: 40px;
  cursor: pointer;
}

button:disabled {
  background-color: #EFEFEF;
  border-color: #EFEFEF;
  color: #BBB;
  cursor: not-allowed;
}

button.primary:disabled {
  background-color: #EFEFEF;
  border-color: #EFEFEF;
  color: #BBB;
  cursor: not-allowed;
}

button.primary {
  background-color: #336699;
  border-color: #CCDDFF;
  color: #CCDDFF;
}

</style>
