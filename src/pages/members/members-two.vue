<script setup>
import { ref, computed } from 'vue'
  
  const email = ref(null);
  const password = ref(null);

  const isCodeVisible = ref(false);
  function toggleCode() {
    isCodeVisible.value = !isCodeVisible.value;
  }

  const secret = ref('42');
  const code = computed(() => {
    return secret.value;
  });
</script>

<template>
  <form>
    <div>
      <input type="email" v-model="email">
      <label>email</label>
    </div>
    <div>
      <input type="password" v-model="password">
      <label>password</label>
    </div>
  </form>
Not a member yet? Members enjoy a 10% discount on all purchases made. Sign up here! 
  <button class="bg-blue-100 p-1 rounded-sm" @click="toggleCode">Code</button>
  <p v-if="isCodeVisible">{{ code }}</p>
</template>
