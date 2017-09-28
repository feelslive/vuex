import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	/*存储数据*/
	state:{
		products:[
			{name:'马云',price:200},
			{name:'马化',price:100},
			{name:'马腾',price:80},
			{name:'马与',price:20}
		]
	},
	/*获取数据*/
	getters:{
		salePros:(state)=>{
			var salePros = state.products.map(product=>{
				return {
					name:"**"+product.name+"**",
					price: product.price/2
				};
			});
			return salePros;
		}
		
	},
	/**/
	mutations:{
		 redPrice:(state,payload)=>{
			state.products.forEach(product=>{
				product.price -= payload;
			})
		 	
		 }
	},
	actions:{
		aredPrice:(context,payload)=>{
			setTimeout(function(){
				context.commit('redPrice',payload)
			},2000)
		}
	}
});