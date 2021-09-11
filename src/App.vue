<template>
  <div class="container">
    <Todos />
  </div>
</template>

<script>
import Todos from '@/components/Todos.vue'
import './assets/styles.css'

export default {
  name: 'App',

  components: {
    Todos
  }
}
</script>

<style scoped>
.container {
  height: 100vh;
  width: 100vw;

  background-color: #333344;
}
</style>
