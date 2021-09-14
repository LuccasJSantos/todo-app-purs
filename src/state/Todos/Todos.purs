module State.Todos where

type Todo = {
  id :: Int,
  done :: Boolean,
  title :: String
}

type State = {
  nextId :: Int,
  todos :: Array Todo
}

initialState :: State
initialState = { nextId: 0, todos: [] }
