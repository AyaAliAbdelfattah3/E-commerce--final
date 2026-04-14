import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from './categorySlice'
import productsReducer from './productSlice'
import userReducer from './userSlice'
import darkReducer from './darkSlice'
import searchReducer from './searchSlice'
export const store = configureStore({
  reducer: {
    categoryReducer: categoryReducer,
    productsReducer : productsReducer,
    userReducer : userReducer,
    darkReducer : darkReducer,
    searchReducer: searchReducer
  },
})