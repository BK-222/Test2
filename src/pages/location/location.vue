<script setup>
import { ref, reactive, computed } from 'vue'

const testOne = reactive({
  name: 'Bella', 
  age: '20'
})
</script>

<template>
  This is the location page.
  {{ testOne }}
</template>