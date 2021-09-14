module Utils.Pure where

import Prelude

pipe3 :: forall a b c d. (a -> b) -> (b -> c) -> (c -> d) -> a -> d
pipe3 fn1 fn2 fn3 = fn1 >>> fn2 >>> fn3