import { createSlice } from '@reduxjs/toolkit'

const initialState = {
//   products: [],

    products: JSON.parse(localStorage.getItem("item")) || [],
}

export const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{


 addToCart:( state, action) => {
   const items = state.products.find((item) => item.id === action.payload.id)

   if(items){
    items.quantity += action.payload.quantity
   }else{
    state.products.push(action.payload)
   }

   localStorage.setItem("item", JSON.stringify(state.products))
console.log("🛒 Cart Now:", state.products)
},



 inCrement: (state, action) => {
      const items = state.products.find((item) => item.id == action.payload);
      items.quantity++;
         localStorage.setItem("item", JSON.stringify(state.products))

    },

    deCrement : (state , action) => {
        const items = state.products.find((item) => item.id === action.payload)
        if(items.quantity ===1){
            items.quantity = 1
        }else{
            items.quantity --
        }
   localStorage.setItem("item", JSON.stringify(state.products))

    },


    deleteItem :(state , action) =>{
        state.products = state.products.filter((item) => item.id !== action.payload)
    
       localStorage.setItem("item", JSON.stringify(state.products))

    },



    clearAllItems :(state) =>{
        state.products = []
           localStorage.removeItem("item")

    }
 














    }
})



export const {addToCart , inCrement , deCrement , deleteItem , clearAllItems} =productSlice.actions
export default productSlice.reducer;
