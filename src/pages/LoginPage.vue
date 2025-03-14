<template>
	<div class="flex justify-center items-center h-screen w-full bg-gray-100">
		<div class="bg-white p-6 rounded-lg shadow-md max-w-sm w-full">
			<h2 class="text-2xl font-bold text-gray-700 text-center">Login</h2>
			<form @submit.prevent="login">
				<input type="text" v-model="username" placeholder="Usuario"
					class="border border-gray-300 p-2 w-full my-2" />
				<input type="password" v-model="password" placeholder="Contraseña"
					class="border border-gray-300 p-2 w-full my-2" />
				<button type="submit" class="bg-blue-500 text-white p-2 w-full mt-2">
					Ingresar
				</button>
				<p v-if="error" class="text-red-500 text-sm text-center mt-2">{{ error }}</p>
			</form>
		</div>
	</div>
</template>
  
<script>
export default {
	name: 'LoginPage',
	data() {
		return {
			username: '',
			password: '',
			error: ''
		};
	},
	methods: {
		login() {
			if (this.username === 'admin' && this.password === 'root') {
				localStorage.setItem('user', 'admin');
				this.$router.push('/');
			} else {
				this.error = 'Usuario o contraseña incorrectos';
			}
		}
	}
};
</script>
  