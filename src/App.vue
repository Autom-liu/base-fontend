<template>
  <div id="app">
		<div class="header">
      <img src="@/assets/images/logo.jpg" alt="">
		</div>
		<keep-alive>
			<router-view/>
		</keep-alive>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
	name: 'App',
	created() {
		this.getUserInfo();
	},
	methods: {
		getUserInfo() {

		},
		...mapActions(['initUser']),
		handleSuccess(user) {

		},
	},
	computed: {
		...mapState(['user']),
	},
};
</script>

<style scoped>
.header img{display: block; width: 100%;}
</style>
