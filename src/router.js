import { createRouter, createWebHistory } from 'vue-router';

import Layout from './components/Layout.vue';
import HomePage from './pages/HomePage.vue';
import Login from './pages/LoginPage.vue';
import UsersPage from './pages/UsersPage.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Layout,
			beforeEnter: (to, from, next) => {
				const isAuthenticated = localStorage.getItem('user')
				if (!isAuthenticated) {
				  next('/login')
				} else {
				  next()
				}
			},
			children: [
				{
					path: '',
					name: 'HomePage',
					component: HomePage,
				},
				{
					path: '/users',
					name: 'Users',
					component: UsersPage,
				},
			],
		},
		{
			path: '/login',
			name: 'Login',
			component: Login,
		},
	]
});

export default router;
