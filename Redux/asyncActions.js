const { default: axios } = require('axios')
const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
//Initial State
const InitialState = {
    loading : false,
    data : [],
    error : ""
}

//Constants Actions

const FETCH_USER_REQUEST = "FETCH_USER_REQUEST"
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS"
const FETCH_USER_ERROR = "FETCH_USER_ERROR"

//Action Creators 
const fetchUserRequest = ()=>{
    return{
       type: FETCH_USER_REQUEST
    }
}

const fetchUserSuccess = (users) =>{
    return{
        type : FETCH_USER_SUCCESS,
        payload : users
    }
}

const fetchUserError = (error) =>{
    return{
        type : FETCH_USER_ERROR,
        payload : error
    }
}

// Reducer

const fetchReducer = (state = InitialState, action) =>{
    switch(action.type){
        case FETCH_USER_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_USER_SUCCESS:
            return{
                ...state,
                loading : false,
                data : action.payload
            }
        case FETCH_USER_ERROR:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}

const fetchUserData = ()=>{
    return async function(dispatch){
        dispatch(fetchUserRequest())
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users2s')
            dispatch(fetchUserSuccess(res.data))
        } catch (error) {
           
            dispatch(fetchUserError(error.message))
        }
    }
}

const store = redux.createStore(fetchReducer,redux.applyMiddleware(thunkMiddleware))

store.subscribe(()=>{console.log("UpdatedState",store.getState())})
console.log("InitialState",store.getState())

store.dispatch(fetchUserData())