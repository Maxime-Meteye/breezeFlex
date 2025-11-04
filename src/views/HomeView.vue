<template>
    <div><!--contains the page-->
        <h1>
            home
        </h1>
        <div class="container theme-primary border-top border-l">
			<div class="col-12 row-2">col-12/row-2</div>
			<div class="col-3 row-10 hidden-only-xs hidden-only-s">col-3/row-10</div>
			<div class="col-12 row-10 col-m-6">col-6/row-12</div>
			<div class="col-3 row-10 hidden-only-xs hidden-only-s">col-3 row-12</div>
			<div class="col-12 row-2">col-12 row-2</div>
        </div>
		<div class="background-primary margin-block-m padding-block-xs">
			<button class="btn primary-tint btn-hover-transparent btn-primary" @click=" active_theme = 'theme-primary'" >primary</button>
			<button class="btn btn-secondary" @click=" active_theme = 'theme-secondary'">secondary</button>
			<button class="btn-round btn-info shadow-xs" @click=" active_theme = 'theme-info'">info</button>
			<button class="btn btn-success" @click=" active_theme = 'theme-success'">success</button>
			<button class="btn btn-warning" @click=" active_theme = 'theme-warning'">warning</button>
			<button class="btn-transparent btn-danger" @click=" active_theme = 'theme-danger'">danger</button>
			<button class="btn btn-light" @click=" active_theme = 'theme-light'">light</button>
			<button class="btn-transparent round btn-dark" @click=" active_theme = 'theme-dark'">dark</button>
		</div>
		<div class="debug theme-secondary">
			debug
		</div>
		<div class="padding-m" :class="active_theme">
			<form class="form container align-center">
				<div class="row">
					<label class="padding-xs row justify-center col-12 col-m-6">
						field 1
						<input type="text" name="field1" class="input"></input>
					</label>
					<label class="col-12 col-m-6">
						field 1
						<input type="text" name="field1" class="input outline-on-select no-border-change"></input>
					</label>
					<label class="col-12">
						field 1
						<input type="text" name="field1" class="input outline-on-select"></input>
					</label>
				</div>
				<label class="row">
					<input type="file" class="input padding-xs col outline-on-select" multiple>
				</label>
				<div class="row">
					<label class="col-4">
						<input type="color" class="input  outline-on-select no-border-change" >
					</label>
					<label class="col-2 padding-xs">
						checkbox
						<input type="checkbox" class="input"></input>
					</label>
					<label class="col-2 padding-xs">
						checkbox switch qsfqs
						<input type="checkbox" class="input switch knob-shadow"></input>
					</label>
					<label class="col-2 padding-xs">
						round checkbox switch
						<input type="checkbox" class="input switch round"></input>
					</label>
				</div>
				<div class="row">
					<label class="col-2">
						date
						<input type="date" class="input round col-1"></input>
					</label>
					<label class="col-1 padding-xs">
						number
						<input type="number" class="input round" disabled></input>
					</label>
					<label class="col  padding-xs">
						password
						<input type="password" class="input round"></input>
					</label>
				</div>
				<div class="row">
					<label class=" padding-xs col-1">
						radio
						<input type="radio" name="val" class="input round outline-on-checked outline-on-hover"></input>
					</label>
					<label class="col-1 padding-xs">
						radio
						<input type="radio" name="val" class="input round outline-on-checked outline-on-hover"></input>
					</label>
					<label class=" padding-xs col">
						range
						<input type="range" name="val" class="input knob-shadow"></input>
					</label>
					<label class="col-1 padding-xs">
						disabled range
						<input type="range" name="val" class="input" disabled></input>
					</label>
				</div>
				<div class="row">
					<select name="pets" id="pet-select" class="input col">
						<option value="">--Please choose an option--</option>
						<option value="dog">Dog</option>
						<option value="cat">Cat</option>
						<option value="hamster">Hamster</option>
						<option value="parrot">Parrot</option>
						<option value="spider">Spider</option>
						<option value="goldfish">Goldfish</option>
					</select>
				</div>
			</form>
		</div>
    </div>
</template>

<script setup>
import {ref} from 'vue'; 
const active_theme = ref("theme-primary");

</script>