<template>
  <div class="todos-container">
    <ul class="list">
      <li v-for="(todo, index) in todos" :key="index" class="list-item">
        <input :id="`todo-toggler-${index}`" type="checkbox" v-model="todo.done" />
        <label :for="`todo-toggler-${index}`">{{todo.title}}</label>

        <mdicon name="delete" class="delete-button" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Todos',
  data () {
    return {
      todos: [
        {
          title: 'Do something',
          done: false
        },
        {
          title: 'Do other something',
          done: true
        }
      ]
    }
  }
}
</script>

<style scoped>
.todos-container {
  padding-top: 100px;

  width: 100%;

  display: flex;
  justify-content: center;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.list-item {
  display: flex;
  align-items: center;
  gap: 10px;

  user-select: none;

  color: #ffffff;
}
</style>
