<template>
	<div v-if="Object.keys(todoDetail).length !== 0">
		<h1>Job Details Page</h1>
		<p>{{ todoDetail }}</p>
	</div>
	<div v-else>Loading</div>
</template>

<script>
export default {
	props: ["id"],
	data() {
		return {
			todoDetail: {},
		};
	},
	mounted() {
		fetch(`http://localhost:3000/detail?id=${this.id}`)
			.then((response) => response.json())
			.then((data) => (this.todoDetail = data))
			.catch((err) => console.log(err));
	},
};
</script>

<style></style>
