<template>
	<buttonChild></buttonChild>
<div>
	(main-vue){{name}}
</div>
</template>

<script>

import childVue from "./componentChild.vue";
	export default{
		name:'main-vue',
		data:function(){
			return {
				name:'zhoujiaming'
			}
		},
		components:{
			'buttonChild':childVue
		}
	}
</script>
<style>
</style>
