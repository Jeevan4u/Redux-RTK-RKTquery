const configureStore = require("@reduxjs/toolkit").configureStore
const cakeReducer = require("../features/cake/cakeSlice")
const iceCreameReducer = require('../features/icecream/icecreamSlice')
 
const store = configureStore({
    reducer : {
        cake : cakeReducer,
        ice : iceCreameReducer
    }
})

module.exports = store