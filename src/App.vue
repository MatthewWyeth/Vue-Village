<template>

    <div class="container">
		<app-header></app-header>
		<router-view></router-view>
		<village-log></village-log>
    </div>
</template>

<script>
	import Header from './components/Header.vue';
	import VillageLog from './components/VillageLog.vue'
    export default {
		components: {
			appHeader: Header,
			villageLog: VillageLog,
		}
	}
	
</script>

<style>

</style>
