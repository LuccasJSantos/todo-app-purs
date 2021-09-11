<template>
  <div class="container">
    <StoreProvider />
  </div>
</template>

<script>
import StoreProvider from './components/StoreProvider.vue'
import './assets/styles.css'

export default {
  name: 'App',

  components: {
    StoreProvider
  },

  props: ['todos', 'actions']
}
</script>

<style scoped>
.container {
  height: 100vh;
  width: 100vw;

  background-color: #333344;
}
</style>
