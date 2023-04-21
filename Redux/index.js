
const redux = require('redux')
const createStore = redux.createStore
const comebineReducers = redux.combineReducers
//Define CONSTANT to indicate type of action 

const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
const ICECREAME_ORDER = 'ICECREAME_ORDER'
const ICECREAME_RESTOCKED = 'ICECREAME_RESTOCKED'


const initialCakeState = {
    numofCakes : 10,
}
const initialIceCreameState = {
    numofIceCreame :20,
}



// Defnice action of object with type string
function sellCake (qty =1 ) {
    return{
        type : CAKE_ORDERED,
        payload : qty
    }
}

function restockeCake (qty = 1){
    return {
        type : CAKE_RESTOCKED,
        payload : qty
    }
}

function sellIceCream (qty = 1) {
    return{
        type : ICECREAME_ORDER,
        payload : qty
    }
}

function restockIcecream (qty = 1) {
    return {
        type : ICECREAME_RESTOCKED,
        payload : qty
    }
}
//reducer

const caker_educer = (state = initialCakeState , action) =>{
    switch(action.type){
        case CAKE_ORDERED:
            return {
                ...state,
                numofCakes : state.numofCakes - action.payload,

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
const iceCreame_reducer = (state = initialIceCreameState , action) =>{
    switch(action.type){
        
        case ICECREAME_ORDER:
            return{
                ...state,
                numofIceCreame : state.numofIceCreame - action.payload 
            }
        case ICECREAME_RESTOCKED:
            return{
                ...state,
                numofIceCreame : state.numofIceCreame + action.payload
            }
        default:
            return state
    }
}

//comebine reducer 
const rootReducer = comebineReducers({
    cake:caker_educer,
    iceCreame:iceCreame_reducer
})
//create Store 
const store =createStore(rootReducer)
console.log("initial state" , store.getState())
const unsubscribe = store.subscribe(()=>console.log("Update State",store.getState()))
store.dispatch(sellCake())
store.dispatch(restockeCake(10))
store.dispatch(sellIceCream(5))
store.dispatch(restockIcecream(10))




unsubscribe()

