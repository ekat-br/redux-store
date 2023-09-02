import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { selectFavoriteProductsInCart, toggledFavoriteProduct } from "./FavoriteSlice";

export default function FavoriteButton ({id}) {
    const dispatch = useDispatch();
    

function handleAddFavorite () {
    dispatch(toggledFavoriteProduct(id))
}

const productInFavorites = useSelector(selectFavoriteProductsInCart);
    return (
        <>
            <Button onClick={handleAddFavorite}>
                {productInFavorites.includes(id)? "Remove from Favorites" : "🧡Add to Favorites🧡"}</Button>
        </>
    ); 
}

const Button = styled.button`
background-color: #B5E2FA;
padding: 8px 16px; 
border: none;
border-radius: 4px; 
color: #fff;
margin-bottom: 7px; 
width: 220px;

&:hover{
    background-color: #99D8FA;
`