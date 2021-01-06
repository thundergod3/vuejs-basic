<template>
	<div>
		<h1>Ninja Reaction Timer</h1>
		<button @click="startPlay" :disabled="isPlaying">Play</button>
		<Block v-if="isPlaying" :delay="delay" @end="endGame" />
		<Results v-if="showResults" :score="score" />
	</div>
</template>

<script>
import Block from "./components/Block";
import Results from "./components/Results";

export default {
	name: "App",
	components: {
		Block,
		Results,
	},
	data() {
		return {
			isPlaying: false,
			delay: null,
			score: 0,
			showResults: false,
		};
	},
	methods: {
		startPlay() {
			this.isPlaying = true;
			this.showResults = false;
			this.score = 0;
			this.delay = 2000 + Math.random() * 5000;
		},
		endGame(reactionTime) {
			this.score = reactionTime;
			this.isPlaying = false;
			this.showResults = true;
		},
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	text-align: center;
	color: #444;
	margin-top: 60px;
}
button {
	background: #0faf87;
	color: #fff;
	border: none;
	padding: 8px 16px;
	border-radius: 4px;
	font-size: 16px;
	letter-spacing: 1px;
	cursor: pointer;
	margin: 10px;
}
button[disabled] {
	opacity: 0.2;
	cursor: not-allowed;
}
</style>
