import { createSlice } from "@reduxjs/toolkit";


export const favoriteSlice = createSlice({
    name: "favorites",
    initialState: {
        favorites: []
    },
    reducers: {
        toggledFavoriteProduct(state, action){
            const productIdToToggle = action.payload
            if(state.favorites.includes(productIdToToggle)){
                state.favorites = state.favorites.filter((productId) => productId !== productIdToToggle)
            }else{
                state.favorites.push(productIdToToggle)
            }
            
            localStorage.setItem("favorites", JSON.stringify(state.favorites));
        }

    }
});

export  const {toggledFavoriteProduct} = favoriteSlice.actions;
export const selectFavoriteProductsInCart = (state) => state.favorites.favorites;
export default favoriteSlice.reducer; 