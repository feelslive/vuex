<template>
	<div class="helloone">
		<p>我是第一个</p>
		<ul>
			<li v-for="pro in salePros" key='index'>
				<span>{{pro.name}}</span>
				<span>${{pro.price}}</span>
			</li>
		</ul>
		<button @click="aredPrice(20)">商品降价</button>
	</div>
	
</template>

<script >
	import {mapGetters,mapActions} from 'vuex'
	export default {
		computed:{
			products(){
				return this.$store.state.products
			},
			/*salePro(){
				return this.$store.getters.salePros
			}*/
			...mapGetters([
				"salePros"
				])
		},
		methods:{
			/*redPrice:function(amount){
				//this.$store.commit('redPrice')
				this.$store.dispatch('aredPrice',amount)
			}*/
			...mapActions([
				"aredPrice"
				])
		}
	}
</script>

<style scoped>
    
</style>