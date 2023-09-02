import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../features/api/apiSlice';
import { shoppingcartSlice } from '../features/shoppingcart/ShoppingCartSlice';
import {favoriteSlice} from '../features/favorites/FavoriteSlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    shoppingcart: shoppingcartSlice.reducer,
    favorites: favoriteSlice.reducer,

  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})

export default store; 