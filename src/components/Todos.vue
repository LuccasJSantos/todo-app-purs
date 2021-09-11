<template>
  <div class="todos-container">
    <div>
      <input v-model="inputText" type="text" />
      <button @click="actions.addTodo(inputText)">Add Todo</button>
    </div>
    <ul class="list">
      <li v-for="(todo, index) in todos.value" :key="index" class="list-item">
        <input :id="`todo-toggler-${index}`" type="checkbox" v-model="todo.done" />
        <label :for="`todo-toggler-${index}`">{{todo.title}}</label>

        <mdicon @click="actions.removeTodo(index)" name="delete" class="delete-button" />
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from '@/state/store'

export default {
  name: 'Todos',

  setup () {
    const [todos, actions] = useStore('todos')
    const inputText = ref('')

    return { actions, todos, inputText }
  }
}
</script>

<style scoped>
.todos-container {
  padding-top: 100px;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
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
