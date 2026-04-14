import { createSlice } from '@reduxjs/toolkit'

const initialState = {
//   search: "",
search :localStorage.getItem("searchWord") || ""
}


export const searchSlice = createSlice({
    name:"search",
    initialState,
    reducers:{

updateSearch : (state,action) =>{
    state.search = action.payload
    localStorage.setItem("searchWord", action.payload);
},

   clearSearch: (state) => {
      state.search = "";
      localStorage.removeItem("searchWord");
    }




}












})



export const {updateSearch , clearSearch} =searchSlice.actions
export default searchSlice.reducer;