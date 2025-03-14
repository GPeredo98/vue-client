<template>
	<nav class="bg-blue-500 p-4">
		<div class="flex justify-between items-center">
			<h1 class="text-white text-2xl">Mi Aplicación</h1>
			<ul class="flex space-x-4">
				<li><router-link to="/" class="text-white">Inicio</router-link></li>
				<li><router-link to="/users" class="text-white">Usuarios</router-link></li>
				<li>
					<a @click.prevent="logout" class="text-white cursor-pointer">Logout</a>
				</li>
			</ul>
		</div>
	</nav>
</template>
  
<script>
export default {
	name: 'Navbar',
	methods: {
		logout() {
			localStorage.removeItem('user');
			this.$router.push('/login');
		}
	}
};
</script>
  