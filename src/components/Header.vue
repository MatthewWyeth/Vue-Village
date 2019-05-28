<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-link to="/" class="navbar-brand">Vue Village</router-link>
            </div>

            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <router-link to="/village" activeClass="active" tag="li"><a>Village</a></router-link>
                    <router-link to="/buildings" activeClass="active" tag="li"><a>Buildings</a></router-link>
                </ul>
                <strong class="navbar-text navbar-right">Gold: {{gold}}</strong>
				<strong class="navbar-text navbar-right">Pop: {{population}}</strong>
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
                            <li><a href="#" >Save Data</a></li>
                            <li><a href="#" >Load Data</a></li>
                        </ul>
                    </li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</template>

<script>
	import {mapActions} from 'vuex'
    export default {
        data() {
          return {
              isDropdownOpen: false
          }
		},
		computed: {
            gold() {
                return this.$store.getters.gold;
			},
			population() {
                return this.$store.getters.population;
            }
        },
		methods: {
			endTurn() {
				this.$store.dispatch('endTurn')
			}
		}
    }
</script>