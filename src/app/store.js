// const configureStore = require("@reduxjs/toolkit").configureStore
import {configureStore} from "@reduxjs/toolkit"
// const { getDefaultMiddleware } = require("@reduxjs/toolkit")
// const cakeReducer = require("../features/cake/cakeSlice")

// Cake Slice 
// import formReducer from "../features/cake/cakeSlice"
// const iceCreameReducer = require('../features/icecream/icecreamSlice')
import {formSlice} from "../features/cake/cakeSlice"
//Icecream Slice
// import iceCreameReducer from "../features/icecream/icecreamSlice"
// const reduxLogger = require('redux-logger')
import {apiSlice} from "../features/api/apiSlice"
 
const store = configureStore({
    reducer : {
        user : formSlice.reducer,
        [apiSlice.reducerPath] : apiSlice.reducer,
    },
    middleware: (curryGetDefaultMiddleware) => curryGetDefaultMiddleware().concat(apiSlice.middleware)
})

// module.exports = store
export default store