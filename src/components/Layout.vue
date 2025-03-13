<template>
	<div class="flex flex-col h-screen">
	  <!-- Navbar -->
	  <Navbar />
	  
	  <!-- Contenedor para las vistas -->
	  <div class="flex-1 overflow-auto p-6">
		<router-view />
	  </div>
	</div>
  </template>
  
  <script>
  import Navbar from '../components/Navbar.vue';
  
  export default {
	components: {
	  Navbar,
	},
  };
  </script>
  