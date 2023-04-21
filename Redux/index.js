
const redux = require('redux')
const createStore = redux.createStore
//Define CONSTANT to indicate type of action 

const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RETURN = 'CAKE_RETURN'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'

const initialState = {
    numofCakes : 10,
    cakeTypes : 5
}

// Defnice action of object with type string

function restockeCake (qty = 1){
    return {
        type : CAKE_RESTOCKED,
        payload : qty
    }
}
//reducer

const reducer = (state = initialState , action) =>{
    switch(action.type){
        case CAKE_ORDERED:
            return {
                ...state,
                numofCakes : state.numofCakes -1,
                cakeTypes : state.cakeTypes -1 

            }
        case CAKE_RETURN:
            return{
                ...state,
                numofCakes : state.numofCakes + 1,
                cakeTypes : state.cakeTypes + 1
            }
        case CAKE_RESTOCKED:
            return{
                ...state,
                numofCakes : state.numofCakes + action.payload
            }
        default:
            return state
    }
}

//create Store 
const store =createStore(reducer)
console.log("initial state" , store.getState())
const unsubscribe = store.subscribe(()=>console.log("Update State",store.getState()))
store.dispatch({type:CAKE_ORDERED})
store.dispatch({type:CAKE_RETURN})
store.dispatch({type:CAKE_ORDERED})
store.dispatch(restockeCake(10))




unsubscribe()

