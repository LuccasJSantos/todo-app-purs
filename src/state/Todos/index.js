import { reactive } from 'vue'

// import { addTodo, removeTodo } from './actions'
import { addTodo, removeTodo } from './Actions.purs'
import { initialState } from './Todos.purs'

const state = reactive({
  value: initialState
})

const actionMapper = (fn) => (...params) => {
  const stateRef = { ...state.value }
  state.value = fn(stateRef)(...params)
}

export default {
  state,
  actions: {
    addTodo: actionMapper(addTodo),
    removeTodo: actionMapper(removeTodo)
  }
}
