import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    name : null,
    userName:null,
    email:null,
    address:{
        street:null,
        city:null
    }
}
export const formSlice = createSlice({
    name : 'user',
    initialState ,
    reducers : {
        submitForm : (state,action)=>{
            console.log(action)
            state.name = action.payload.Name,
            state.address =action.payload.address,
            state.email = action.payload.inputEmail,
            state.userName = action.payload.userName
        }
    }
})

// module.exports = cakeSlice.reducer
// export default formSlice.reducer
// module.exports.cakeAction = cakeSlice.actions
export const {submitForm} =formSlice.actions