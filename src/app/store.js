// const configureStore = require("@reduxjs/toolkit").configureStore
import {configureStore} from "@reduxjs/toolkit"
// const { getDefaultMiddleware } = require("@reduxjs/toolkit")
// const cakeReducer = require("../features/cake/cakeSlice")
import cakeReducer from "../features/cake/cakeSlice"
// const iceCreameReducer = require('../features/icecream/icecreamSlice')
import iceCreameReducer from "../features/icecream/icecreamSlice"
// const reduxLogger = require('redux-logger')
import logger from "redux-logger"
// const logger = reduxLogger.createLogger()

 
const store = configureStore({
    reducer : {
        cake : cakeReducer,
        ice : iceCreameReducer
    },
    // middleware : (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger),
})

// module.exports = store
export default store