<template>
	<div class="home">
		<h1>Home</h1>
		<PostList :postList="postList" />
	</div>
</template>

<script>
import { computed, ref, watch, watchEffect } from "vue";

import PostList from "../components/posts/PostList";

export default {
	name: "Homepage",
	components: {
		PostList,
	},
	setup() {
		// const nameList = ref(["aasd", "basf", "casg", "dasg", "asge", "asgasgf"]);
		// const keySearch = ref("");

		// const matchingName = computed(() =>
		// 	nameList.value.filter((name) => name.includes(keySearch.value))
		// );

		// const stopWatch = watch(keySearch, () => {
		// 	console.log("keySearch change");
		// });

		// const stopWatchEffect = watchEffect(() => {
		// 	console.log("watch effect function run");
		// });

		// const handleClick = () => {
		// 	stopWatch();
		// 	stopWatchEffect();
		// };

		const postList = ref([
			{
				title: "Welcome to the blog",
				body: "Lorem ipsum",
				id: 1,
			},
			{
				title: "Top 5 CSS tips",
				body: "Lorem ipsum",
				id: 2,
			},
		]);

		return {
			postList,
		};
	},
};
</script>
