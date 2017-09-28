<template>
  <div id="app">
    <hello-one></hello-one>
    <hello-two></hello-two>
    <router-view></router-view>
  </div>
</template>

<script>
import helloOne from './components/HelloOne.vue'
import helloTwo from './components/HelloTwo.vue'
export default {
  name: 'app',
  components:{
    helloOne,
    helloTwo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
