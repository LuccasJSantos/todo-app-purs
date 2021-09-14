import { pipe3 } from './index'

export const mapObj = (fn) =>
  pipe3 (Object.entries)
        ((entries) => entries.map (([key, value]) => [key, fn (value, key)]))
        (Object.fromEntries)
