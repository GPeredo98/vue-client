<template>
	<div class="flex justify-center items-center h-screen bg-gray-100">
	  <Home />
	</div>
  </template>

<script>
import Home from "./Home.vue";

export default {
	components: {
		Home,
	},
	data() {
		return {
			title: 'Now my minimalistic app works!'
		}
	}
}
</script>