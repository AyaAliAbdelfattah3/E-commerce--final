import { createSlice } from '@reduxjs/toolkit'

const initialState = {
//   userInfo: null,
userInfo: JSON.parse(localStorage.getItem("userInfo")) || null,
}

export const userSlice = createSlice({

name : "user",
   initialState,
    reducers:{


setUser : (state , action) => {
    state.userInfo = action.payload
    localStorage.setItem("userInfo", JSON.stringify(action.payload));
},

logOutUser : (state) =>{
    state.userInfo = null
    localStorage.removeItem("userInfo");

}



    }

})

export const {setUser, logOutUser} =userSlice.actions
export default userSlice.reducer;
