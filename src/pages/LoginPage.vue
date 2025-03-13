<template>
	<div class="bg-white p-6 rounded-lg shadow-md max-w-sm mx-auto">
	  <h2 class="text-2xl font-bold text-gray-700 text-center">Login</h2>
	  <form>
		<input type="text" placeholder="Usuario" class="border border-gray-300 p-2 w-full my-2" />
		<input type="password" placeholder="Contraseña" class="border border-gray-300 p-2 w-full my-2" />
		<button type="submit" class="bg-blue-500 text-white p-2 w-full">Ingresar</button>
	  </form>
	</div>
  </template>
  
  <script>
  export default {
	name: 'Login',
  };
  </script>
  