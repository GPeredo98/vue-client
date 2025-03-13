<template>
	<div class="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
		<div class="flex justify-between items-center mb-4">
			<h2 class="text-2xl font-bold text-gray-700 text-center">Lista de Usuarios</h2>
			<button @click="getUsers" class="bg-blue-500 text-white p-2 rounded-full focus:outline-none">
				<ArrowPathIcon class="w-5 h-5 text-white" />
			</button>
		</div>

		<div v-if="error" class="fixed top-0 right-0 m-6 p-4 bg-red-500 text-white rounded-lg shadow-md">
			<p>{{ error }}</p>
		</div>

		<div v-if="loading" class="flex items-center justify-center h-64">
			<div class="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
			<span class="ml-2 text-blue-500">Cargando...</span>
		</div>

		<ul v-else class="divide-y divide-gray-200 max-h-64 overflow-y-auto">
			<li v-for="user in users" :key="user.id"
				class="flex items-center space-x-4 py-3 px-2 hover:bg-gray-100 rounded-md transition">
				<div class="bg-blue-500 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold">
					{{ user.name.charAt(0) }}
				</div>
				<div>
					<p class="text-gray-900 font-medium">{{ user.name }}</p>
					<p class="text-gray-500 text-sm">{{ user.email }}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
import axios from "axios";
import { ArrowPathIcon } from '@heroicons/vue/24/solid';

export default {
	components: {
		ArrowPathIcon,
	},
	data() {
		return {
			users: [],
			loading: false,
			error: null,
		};
	},
	async mounted() {
		this.getUsers();
	},
	methods: {
		async getUsers() {
			this.loading = true;
			this.error = null;
			console.log(process.env.VUE_APP_API_URL);
			try {
				const response = await axios.get(`${process.env.API_URL }/users`);
				this.users = response.data;
			} catch (error) {
				console.error("Error al obtener los datos:", error);
				this.error = "Hubo un problema al cargar la lista de usuarios.";
			} finally {
				this.loading = false;
			}
		}
	}
};
</script>

