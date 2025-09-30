<template>
<nav class="container">
  <button popovertarget="navmenu" class="hamburger row">=</button>
  <nav id='navmenu' popover class="sidenav lpad-xs row" :class="{ 'sidenav-open': is_menu_open}">
    <RouterLink to="/" class="col-1">Go to Home</RouterLink>
    <RouterLink to="/ourlocation"class="col-1">Find us</RouterLink>
    <RouterLink to="/menu"class="col-2">Our Menu</RouterLink>
    <RouterLink to="/contact" class="col-1">Contact us</RouterLink>
  </nav>
</nav>
<main>
   <RouterView />
</main>
</template>
<script setup>
import {ref} from 'vue'
const is_menu_open = ref(false)



</script>
<style scoped></style>
