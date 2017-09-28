<template>
  <div class="hellotwo">
    <p>我是第二个</p>
    <ul>
      <li v-for="pro in salePro" key='index'>
        <span>{{pro.name}}</span>
        <span>${{pro.price}}</span>
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {
  computed:{
      products(){
        return this.$store.state.products
      },
      salePro(){
        return this.$store.getters.salePros
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
