<template>
	<nav class="bg-blue-500 p-4">
	  <div class="flex justify-between items-center">
		<h1 class="text-white text-2xl">Mi Aplicación</h1>
		<ul class="flex space-x-4">
		  <li><router-link to="/" class="text-white">Inicio</router-link></li>
		  <li><router-link to="/users" class="text-white">Usuarios</router-link></li>
		  <li><router-link to="/login" class="text-white">Login</router-link></li>
		</ul>
	  </div>
	</nav>
  </template>
  
  <script>
  export default {
	name: 'Navbar',
  };
  </script>
  