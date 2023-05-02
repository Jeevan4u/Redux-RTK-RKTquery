const configureStore = require("@reduxjs/toolkit").configureStore
const { getDefaultMiddleware } = require("@reduxjs/toolkit")
const cakeReducer = require("../features/cake/cakeSlice")
const iceCreameReducer = require('../features/icecream/icecreamSlice')
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

 
const store = configureStore({
    reducer : {
        cake : cakeReducer,
        ice : iceCreameReducer
    },
    // middleware : (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger),
})

module.exports = store