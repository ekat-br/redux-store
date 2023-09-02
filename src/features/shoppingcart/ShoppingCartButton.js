import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { selectProductInCart, toggledProductCart } from "./ShoppingCartSlice";

export default function ShoppingCartButton({id}) {
const dispatch = useDispatch();

function handleAddShoppingCart () {
dispatch(toggledProductCart(id));
}; 

const productInCart = useSelector(selectProductInCart);

    return(
        <Button onClick={handleAddShoppingCart}>
            {productInCart.includes(id) ? "Remove from Shopping Cart" : "Add to Shopping Cart"}</Button>
    );
}

const Button = styled.button`
background-color: #f7a072;
padding: 8px 16px; 
border: none;
border-radius: 4px; 
color: #fff;
width: 220px;

&:hover{
    background-color: #F17E40;
}
`