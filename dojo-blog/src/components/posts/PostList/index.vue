<template>
	<div class="post-list">
		<PostItem v-for="post in postList" :key="post.id" :post="post" />
	</div>
</template>

<script>
import PostItem from "../PostItem";

export default {
	props: ["postList"],
	components: {
		PostItem,
	},
	setup(props) {
		console.log(props.postList);
	},
};
</script>

<style></style>
