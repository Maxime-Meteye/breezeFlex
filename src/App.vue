<template>
<nav >
  <button popovertarget="navmenu" class="hamburger btn btn-info">=</button>
  <nav id='navmenu' popover :class="{ 'sidenav-open': is_menu_open}">
    <RouterLink to="/" >Go to Home</RouterLink>
    <RouterLink to="/ourlocation">Find us</RouterLink>
    <RouterLink to="/menu">Our Menu</RouterLink>
    <RouterLink to="/contact">Contact us</RouterLink>
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
