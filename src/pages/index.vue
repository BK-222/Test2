<script setup>
  import useOptionsStore from '../../store/options'

  const store = useOptionsStore();
</script>

<template>
  <p class="text-3xl text-red-700">Hello World</p>
  {{ store.name }}
  <router-link to='/about'>about</router-link>
</template>