import todos from './Todos'

const states = {
  todos: todos.state
}

const actions = {
  todos: todos.actions
}

export const useStore = (name) => [states[name], actions[name]]
