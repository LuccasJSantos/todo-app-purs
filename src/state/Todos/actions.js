import todosType from './types'

export const addTodo = title => ({ type: todosType.addTodo, payload: title })

export const removeTodo = index => ({ type: todosType.removeTodo, payload: index })

export const toggleTodo = index => ({ type: todosType.toggleTodo, payload: index })
