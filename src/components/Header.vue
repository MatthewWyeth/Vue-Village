<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-link to="/" class="navbar-brand">Vue Village</router-link>
            </div>

            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <router-link to="/buildings" activeClass="active" tag="li"><a>Buildings</a></router-link>
                </ul>
				<strong class="navbar-text navbar-right" style="color:red">Invasion in {{integers.invasionDays}} turns</strong>
                <strong class="navbar-text navbar-right">Gold: {{integers.gold}}</strong>
				<strong class="navbar-text navbar-right">Pop: {{integers.population}}</strong>
                <ul class="nav navbar-nav navbar-right">
                    <li><a @click="endTurn" href="#">End Turn</a></li>
                    <li
                            class="dropdown"
                            :class="{open: isDropdownOpen}"
                            @click="isDropdownOpen = !isDropdownOpen">
                        <a
                                href="#"
                                class="dropdown-toggle"
                                data-toggle="dropdown"
                                role="button"
                                aria-haspopup="true"
                                aria-expanded="false">Save & Load <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a @click="saveData" >Save Data</a></li>
                            <li><a @click="loadData">Load Data</a></li>
                        </ul>
                    </li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</template>

<script>
    export default {
        data() {
          return {
              isDropdownOpen: false
          }
		},
		computed: {
			integers() {
				return this.$store.getters.integers
			}
        },
		methods: {
			endTurn() {
				this.$store.dispatch('endTurn')
			},
			saveData() {
                const data = {
                    buildings: this.$store.getters.buildings,
                    integers: this.$store.getters.integers,
                    log: this.$store.getters.log
                };
                this.$http.put('data.json', data);
            },
            loadData() {
				this.$store.dispatch('loadData');
            }
		}
    }
</script>