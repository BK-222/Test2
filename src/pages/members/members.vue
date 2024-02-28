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

<script>
  export default {
  data: function() {
    return {
      email: null, 
      password: null,
      isCodeVisible: false, 
      secret: '42'
    }
  }, 
  methods: {
    toggleCode: function() {
      this.isCodeVisible = !this.isCodeVisible;
    }
  }, 
  computed: {
    code: function() {
      return this.secret;
    }
  }
 } 
</script>