import { combineStates } from './utils'
import todos from './Todos'

const store = combineStates ({
  todos
})

export const useStore = (name) => [store[name].state, store[name].actions]
