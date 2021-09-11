import Todos from './Todos'
import { combineReducers, createStore } from 'redux'

export default createStore(
  combineReducers({
    todos: Todos.reducer
  }))
