import { reactive } from 'vue'

import { addTodo, removeTodo } from './actions'

const state = reactive({
  value: [{ title: 'Hello', done: true }]
})

const actionMapper = (fn) => (...params) => {
  const stateRef = [...state.value]
  state.value = fn(stateRef, ...params)
}

export default {
  state,
  actions: {
    addTodo: actionMapper(addTodo),
    removeTodo: actionMapper(removeTodo)
  }
}
