<template>
	<div class="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto mt-4">
		<div class="flex justify-between items-center mb-4">
			<h2 class="text-2xl font-bold text-gray-700 text-center">Lista de Usuarios</h2>
			<div class="flex gap-2">
				<button @click="openForm" class="bg-green-500 text-white p-2 rounded-full focus:outline-none">
					<PlusIcon class="w-5 h-5 text-white" />
				</button>
				<button @click="getUsers" class="bg-blue-500 text-white p-2 rounded-full focus:outline-none">
					<ArrowPathIcon class="w-5 h-5 text-white" />
				</button>
			</div>
		</div>

		<div v-if="error" class="fixed top-0 right-0 m-6 p-4 bg-red-500 text-white rounded-lg shadow-md">
			<p>{{ error }}</p>
		</div>

		<div v-if="loading" class="flex items-center justify-center h-64">
			<div class="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
			<span class="ml-2 text-blue-500">Cargando...</span>
		</div>

		<ul v-else class="divide-y divide-gray-200 max-h-64 overflow-y-auto w-full">
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

	<!-- Modal -->
	<div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
		<div class="bg-white p-6 rounded-lg shadow-lg w-96">
			<h2 class="text-xl font-bold">Formulario de Registro</h2>
			<form @submit.prevent="createUser" class="mt-4">
				<div class="mb-4">
					<label for="name" class="block text-sm font-medium text-gray-700">Nombre</label>
					<input v-model="form.name" type="text" id="name"
						class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
						required />
				</div>
				<div class="mb-4">
					<label for="email" class="block text-sm font-medium text-gray-700">Email</label>
					<input v-model="form.email" type="email" id="email"
						class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
						required />
				</div>
				<p v-if="error" class="text-red-500 text-sm">{{ error }}</p>
				<div class="mt-4 flex justify-end">
					<button @click="closeForm" class="bg-gray-400 text-white px-4 py-2 rounded mr-2">
						Cancelar
					</button>
					<button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">
						Enviar
					</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import axios from "axios";
import { ArrowPathIcon, PlusIcon } from '@heroicons/vue/24/solid';

export default {
	components: {
		ArrowPathIcon,
		PlusIcon
	},
	data() {
		return {
			users: [],
			loading: false,
			error: null,
			isOpen: false,
			form: {
				name: '',
				email: ''
			},
			error: ''
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
				const response = await axios.get(`${process.env.API_URL}/users`);
				this.users = response.data;
			} catch (error) {
				console.error("Error al obtener los datos:", error);
				this.error = "Hubo un problema al cargar la lista de usuarios.";
			} finally {
				this.loading = false;
			}
		},
		openForm() {
			this.isOpen = true;
		},
		closeForm() {
			this.isOpen = false;
		},
		async createUser() {
			alert("Acción confirmada");
			this.closeForm();
		}
	}
};
</script>

