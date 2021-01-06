import { createRouter, createWebHistory } from "vue-router";

import Homepage from "../pages/Homepage.vue";
import AboutPage from "../pages/AboutPage.vue";
import JobsPage from "../pages/jobs/JobsPage.vue";
import JobDetailPage from "../pages/jobs/JobDetailPage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";

const routes = [
	{
		path: "/",
		name: "Homepage",
		component: Homepage,
	},
	{
		path: "/about",
		name: "AboutPage",
		component: AboutPage,
	},
	{
		path: "/jobs",
		name: "JobsPage",
		component: JobsPage,
	},
	{
		path: "/jobs/:id",
		name: "JobDetailPage",
		component: JobDetailPage,
		props: true,
	},
	// redirect
	{
		path: "/all-jobs",
		redirect: "/job",
	},
	// catchall 404
	{
		path: "/:catchAll(.*)",
		name: "NotFoundPage",
		component: NotFoundPage,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
