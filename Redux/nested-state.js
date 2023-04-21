const redux = require('redux')
const produce = require('immer').produce
const createStore = redux.createStore

const initialState = {
    name : 'jeevan',
    address : {
        city : "KTM",
        street : "MS 120",
        state: "Sad"
    }
}

const UPDATE_CITY = 'UPDATE_CITY'

function cityUpdate(cityName){
    return{
        type : UPDATE_CITY,
        payload : cityName
    }
}

const updateCityReducer = (state = initialState , action) =>{
    switch(action.type){
        case UPDATE_CITY:
            // return{
            //     ...state,
            //     address : {
            //         ...state.address,
            //         city : action.payload
            //     }
            // }
            return produce(state,(draft)=>{
                draft.address.city = action.payload
            })
        default:
            {
                return state
            }
    }
}

const store = redux.createStore(updateCityReducer)
console.log("Initial State",store.getState())
const unsubscribe = store.subscribe(()=>console.log("Updated Store",store.getState()))

store.dispatch(cityUpdate("Bhaktapur"))

unsubscribe()