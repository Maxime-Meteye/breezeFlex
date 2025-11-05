<template>
    <div>
        <h1>
            home
        </h1>
		<section class="container align-content-center">
			<div class="container theme-primary col-12 row-6">
				<div class="col-12 row-2 border-xs border-all">col-12/row-2</div>
				<div class="col-3 row-8 hidden-only-xs hidden-only-s border-xs border-all">col-3/row-10</div>
				<div class="col-12 row-8 col-m-6 border-xs border-all">col-6/row-12</div>
				<div class="col-3 row-8 hidden-only-xs hidden-only-s border-xs border-all">col-3 row-10</div>
				<div class="col-12 row-2 border-xs border-all">col-12 row-2</div>
			</div>
			<div class="padding-block-xs col-12 row-1 align-content-center f-row gap-x-xl padding-block-m" :class="active_theme">
				<button class="btn primary-tint btn-hover-transparent btn-primary" @click=" active_theme = 'theme-primary'" >primary</button>
				<button class="btn btn-secondary" @click=" active_theme = 'theme-secondary'">secondary</button>
				<button class="btn-round btn-info shadow-xs" @click=" active_theme = 'theme-info'">info</button>
				<button class="btn btn-success" @click=" active_theme = 'theme-success'">success</button>
				<button class="btn btn-warning" @click=" active_theme = 'theme-warning'">warning</button>
				<button class="btn-transparent btn-danger" @click=" active_theme = 'theme-danger'">danger</button>
				<button class="btn btn-light" @click=" active_theme = 'theme-light'">light</button>
				<button class="btn-transparent round btn-dark" @click=" active_theme = 'theme-dark'">dark</button>
				<button class="btn">btn</button>
			</div>
			<div :class="active_theme" class="col-12 row-5">
				<form class="container gap-y-s">
					<div class="row-3 col-12 f-col gap-y-s">
						<label>
							field 1
							<input type="text" name="field1" class="input"></input>
						</label>
						<label>
							field 1
							<input type="text" name="field1" class="input outline-on-select no-border-change"></input>
						</label>
						<label>
							field 1
							<input type="text" name="field1" class="input outline-on-select"></input>
						</label>
					</div>
					<div class="row-2 col-12 f-row gap-x-xl">
						<label >
							<input type="file" class="input padding-xs col outline-on-select" multiple>
						</label>
						<label >
							<input type="color" class="input  outline-on-select no-border-change" >
						</label>
					</div>
					<div class="row-2 col-12 f-row">
						<label class="">
							checkbox
							<input type="checkbox" class="input"></input>
						</label>
						<label class="">
							checkbox switch qsfqs
							<input type="checkbox" class="input switch knob-shadow"></input>
						</label>
						<label class="">
							round checkbox switch
							<input type="checkbox" class="input switch round"></input>
						</label>
						<label class="">
							date
							<input type="date" class="input round col-1"></input>
						</label>
					</div>
					<div class="row-2 col-12 f-row gap-x-l">
						<label>
							number
							<input type="number" class="input round" disabled></input>
						</label>
						<label>
							password
							<input type="password" class="input round"></input>
						</label>
						<label>
							radio
							<input type="radio" name="val" class="input round outline-on-checked outline-on-hover"></input>
						</label>
						<label>
							radio
							<input type="radio" name="val" class="input round outline-on-checked outline-on-hover"></input>
						</label>
						<label>
							range
							<input type="range" name="val" class="input knob-shadow"></input>
						</label>
						<label>
							disabled range
							<input type="range" name="val" class="input" disabled></input>
						</label>
					</div>
					<div class="row-3 col-12 f-row padding-inline-l">
						<select name="pets" id="pet-select" class="input">
							<option value="">Please choose an option</option>
							<option value="1">Option-1</option>
							<option value="2">Option-2</option>
							<option value="3">Option-3</option>
							<option value="4">Option-4</option>
							<option value="5">Option-5</option>
							<option value="6">Option-6</option>
						</select>
					</div>
				</form>
			</div>
		</section>
    </div>
</template>

<script setup>
import {ref} from 'vue'; 
const active_theme = ref("theme-primary");

</script>

<style scoped>
	section{
		height: 100%;
	}

</style>