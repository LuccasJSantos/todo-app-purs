module State.Todos.Actions where

import Prelude

import Data.Array (filter, snoc)

import State.Todos (Todo, State)

addTodo :: State -> String -> State
addTodo state title = {
    nextId: add state.nextId 1,
    todos: snoc state.todos newTodo
  }
  where
    newTodo :: Todo
    newTodo = { id: state.nextId, title: title, done: false }

removeTodo :: State -> Int -> State
removeTodo state id = {
    nextId: state.nextId,
    todos: filter outId state.todos
  }
  where
    outId :: Todo -> Boolean
    outId todo = todo.id /= id