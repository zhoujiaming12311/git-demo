<template>
	<button @click='count++'>(child_component)please click it：{{count}}</button>
</template>

<script>

	export default {
		name:'child-vue',
		data:function(){
			return {
				count:0
			}
		}
	}
</script>
<style>
</style>
