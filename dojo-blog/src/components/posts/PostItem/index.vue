<template>
	<div class="post-item">
		<h3>{{ post.title }}</h3>
		<p>{{ snippet }}</p>
	</div>
</template>

<script>
import { computed, onMounted } from "vue";
export default {
	props: ["post"],
	setup({ post }) {
		const snippet = computed(() => post.body.substring(0, 4) + "...");

		const fetchTodoList = async () => {
			try {
				const postList = await fetch("http://localhost:3000")
					.then((response) => response.json())
					.then((data) => data);

				console.log(postList);
			} catch (error) {
				console.log(error);
			}
		};

		onMounted(() => {
			fetchTodoList();
		});

		return { snippet };
	},
};
</script>

<style></style>
