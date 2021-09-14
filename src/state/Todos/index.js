import { reactive } from 'vue'

// import { addTodo, removeTodo } from './actions'
import { addTodo, removeTodo } from './Actions.purs'
import { initialState } from './Todos.purs'

const state = reactive ({
  value: initialState
})

export default {
  state,
  actions: {
    addTodo,
    removeTodo
  }
}
