import todosTypes from './types'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case todosTypes.addTodo:
      return [...state, action.payload]
    case todosTypes.removeTodo:
      return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)]
    case todosTypes.toggleTodo:
      return [
        ...state.slice(0, action.payload),
        {
          ...state[action.payload],
          done: !state[action.payload].done
        },
        ...state.slice(action.payload + 1)
      ]
    default:
      return state
  }
}

export default reducer
