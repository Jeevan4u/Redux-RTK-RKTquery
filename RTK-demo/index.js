const store = require('./app/store')
const { icecreamAction } = require('./features/icecream/icecreamSlice')
const cakeAction = require('./features/cake/cakeSlice').cakeAction
console.log('Initial State' , store.getState())

const unsubscribe = store.subscribe(()=>{console.log('updated State',store.getState())})

store.dispatch(cakeAction.ordered())
store.dispatch(cakeAction.ordered())
store.dispatch(cakeAction.ordered())
store.dispatch(cakeAction.restocked(3))
store.dispatch(icecreamAction.ordered())
store.dispatch(icecreamAction.ordered())
store.dispatch(icecreamAction.ordered())
store.dispatch(icecreamAction.restocked(3))
unsubscribe()