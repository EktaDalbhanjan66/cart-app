import {createSlice} from '@reduxjs/toolkit'

const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addtoCart(state,action){
            state.push(action.payload)
        },
        removeFromCart(state , action){
            return state.filter((item)=> item.id!==action.payload)
           }
    }

})
export   const {addtoCart,removeFromCart}=cartSlice.actions
export default cartSlice.reducer 