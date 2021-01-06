<template>
	<div>
		<form @submit.prevent="handleSubmit">
			<label>Email</label>
			<input type="email" required v-model="email" />
			<label>Password</label>
			<input type="password" required v-model="password" />
			<div v-if="passwordError" class="error">{{ passwordError }}</div>
			<label>Role:</label>
			<select v-model="role">
				<option value="developer">Web Developer</option>
				<option value="designer">Web Designer</option>
			</select>
			<label>Skills</label>
			<input type="text" v-model="tempSkill" @keyup.alt="addSkill" />
			<div
				v-for="(skill, index) in skills"
				:key="index"
				class="pill"
				@click="deleteSkill(skill)"
			>
				{{ skill }}
			</div>
			<div class="terms">
				<input id="checkbox" v-model="terms" type="checkbox" required />
				<label for="checkbox">Accept term and conditions</label>
			</div>
			<div>
				<input id="shaun" value="shaun" type="checkbox" v-model="names" />
				<label for="shaun">Shaun</label>
			</div>
			<div>
				<input id="yoshi" value="yoshi" type="checkbox" v-model="names" />
				<label for="yoshi">Yoshi</label>
			</div>
			<div>
				<input id="cong" value="cong" type="checkbox" v-model="names" />
				<label for="cong">Cong</label>
			</div>
			<div class="submit">
				<button type="submit">Create an Account</button>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			email: "",
			password: "",
			role: "developer",
			terms: false,
			names: [],
			tempSkill: "",
			skills: [],
			passwordError: "",
		};
	},
	methods: {
		handleChange(e) {
			this.email = e.target.value;
		},
		handleSubmit() {
			// validate password
			this.passwordError =
				this.password.length > 5
					? ""
					: "Password must be at least at 6 chars long";

			if (!this.passwordError) {
				console.log("Submit succeeded");
			}
		},
		addSkill(e) {
			if (e.key === "," && this.tempSkill) {
				if (!this.skills.includes(this.tempSkill)) {
					this.skills.push(this.tempSkill);
				}
				this.tempSkill = "";
			}
		},
		deleteSkill(skillDelete) {
			this.skills = this.skills.filter((skill) => skill !== skillDelete);
		},
	},
};
</script>

<style>
form {
	max-width: 420px;
	margin: 30px auto;
	text-align: left;
	padding: 40px;
	border-radius: 10px;
	background: #fff;
}
label {
	color: #aaa;
	display: inline-block;
	margin: 25px 0 15px;
	font-size: 0.6em;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-weight: bold;
}
input,
select {
	display: block;
	padding: 10px 6px;
	width: 100%;
	box-sizing: border-box;
	border: none;
	border-bottom: solid 1px #ddd;
	color: #555;
}
input[type="checkbox"] {
	display: inline-block;
	width: 16px;
	margin: 0 10px 0 0;
	position: relative;
	top: 2px;
}
.pill {
	display: inline-block;
	margin: 20px 10px 0 0;
	padding: 6px 12px;
	background: #eee;
	border-radius: 20px;
	font-size: 12px;
	letter-spacing: 1px;
	font-weight: bold;
	color: #777;
	cursor: pointer;
}
button {
	background: #0b6dff;
	border: 0;
	padding: 10px 20px;
	margin-top: 20px;
	color: #fff;
	border-radius: 20px;
}
.submit {
	text-align: center;
}
.error {
	color: #ff0062;
	margin-top: 10px;
	font-size: 0.8rem;
	font-weight: bold;
}
</style>
