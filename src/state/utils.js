import { mapObj } from '@/utils'

const actionMapper = (state) => (fn) => (...params) => {
  const stateRef = { ...state.value }
  state.value = fn (stateRef) (...params)
}

export const combineStates = (states) =>
  mapObj (({ state, actions }) =>
    ({
      state,
      actions: mapObj (actionMapper (state))
                      (actions)
    }))
    (states)
