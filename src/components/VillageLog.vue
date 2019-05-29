<template>
	<div class="container">
		<h2>Events</h2>
		<div class="panel panel-default" v-if="log.length">
			<ul style=" width:auto" class="list-group">
				<li :class="{'list-group-item list-group-item-success': (event.type=='green'), 'list-group-item list-group-item-warning': (event.type=='orange'),'list-group-item list-group-item-danger': (event.type=='red')}"
				 v-for="event in log">
					{{ event.event }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		computed: {
			log() {
                return this.$store.getters.log;
            }
		}
	}
</script>

