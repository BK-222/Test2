import { defineStore } from 'pinia'

const useOptionsStore = defineStore('options', {
  state: function() {
    return {
      name: 'alice'
    }
  }
});

export default useOptionsStore;