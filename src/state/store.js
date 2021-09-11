import todos from './Todos'

const actions = {
  todos: todos.actions
}

export const useStore = (name) => [todos.state, actions[name]]
