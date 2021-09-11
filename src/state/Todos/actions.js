export const addTodo = (stateRef, title) => {
  return [...stateRef, { title, done: false }]
}

export const removeTodo = (stateRef, index) => {
  return [...stateRef.slice(0, index), ...stateRef.slice(index + 1)]
}
