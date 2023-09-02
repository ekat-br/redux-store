import { createSlice } from "@reduxjs/toolkit";


export const shoppingcartSlice = createSlice({
    name: "shoppingcart",
    initialState: {
        products: []
    },
    reducers: {
        toggledProductCart(state, action){
            const productIdToToggle = action.payload
            if(state.products.includes(productIdToToggle)){
                state.products = state.products.filter((productId) => productId !== productIdToToggle)
            }else{
                state.products.push(productIdToToggle)
            }
            
            localStorage.setItem("shoppingCart", JSON.stringify(state.products));
        }

    }
});

export  const {toggledProductCart} = shoppingcartSlice.actions;
export const selectProductInCart = (state) => state.shoppingcart.products;
export default shoppingcartSlice.reducer; 