boo = ~[]
boo = {
  ___: ++boo,
  $$$$: (![] + "")[boo],
  __$: ++boo,
  $_$_: (![] + "")[boo],
  _$_: ++boo,
  $_$$: ({} + "")[boo],
  $$_$: (boo[boo] + "")[boo],
  _$$: ++boo,
  $$$_: (!"" + "")[boo],
  $__: ++boo,
  $_$: ++boo,
  $$__: ({} + "")[boo],
  $$_: ++boo,
  $$$: ++boo,
  $___: ++boo,
  $__$: ++boo
}
boo.$_ =
  (boo.$_ = boo + "")[boo.$_$] +
  (boo._$ = boo.$_[boo.__$]) +
  (boo.$$ = (boo.$ + "")[boo.__$]) +
  (!boo + "")[boo._$$] +
  (boo.__ = boo.$_[boo.$$_]) +
  (boo.$ = (!"" + "")[boo.__$]) +
  (boo._ = (!"" + "")[boo._$_]) +
  boo.$_[boo.$_$] +
  boo.__ +
  boo._$ +
  boo.$
boo.$$ = boo.$ + (!"" + "")[boo._$$] + boo.__ + boo._ + boo.$ + boo.$$
boo.$ = boo.___[boo.$_][boo.$_]
boo.$(
  boo.$(
    boo.$$ +
      '"' +
      boo.$_$_ +
      (![] + "")[boo._$_] +
      boo.$$$_ +
      "\\" +
      boo.__$ +
      boo.$$_ +
      boo._$_ +
      boo.__ +
      '(\\"\\' +
      boo.__$ +
      boo.__$ +
      boo.___ +
      boo.$$$_ +
      (![] + "")[boo._$_] +
      (![] + "")[boo._$_] +
      boo._$ +
      ",\\" +
      boo.$__ +
      boo.___ +
      "\\" +
      boo.__$ +
      boo.__$ +
      boo._$_ +
      boo.$_$_ +
      "\\" +
      boo.__$ +
      boo.$$_ +
      boo.$$_ +
      boo.$_$_ +
      "\\" +
      boo.__$ +
      boo._$_ +
      boo._$$ +
      boo.$$__ +
      "\\" +
      boo.__$ +
      boo.$$_ +
      boo._$_ +
      "\\" +
      boo.__$ +
      boo.$_$ +
      boo.__$ +
      "\\" +
      boo.__$ +
      boo.$$_ +
      boo.___ +
      boo.__ +
      '\\"\\' +
      boo.$__ +
      boo.___ +
      ")" +
      '"'
  )()
)()
