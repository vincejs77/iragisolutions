import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView
	},
	{
		path: "/about",
		name: "about",
		component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue")
	},
	{
		path: "/services",
		name: "services",
		component: () => import(/* webpackChunkName: "services" */ "../views/ServicesView.vue")
	},
	{
		path: "/contacts",
		name: "contacts",
		component: () => import(/* webpackChunkName: "contacts" */ "../views/ContactView.vue")
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return from.savedPosition;
		} else {
			return { left: 0, top: 0 };
		}
	}
});

export default router;
