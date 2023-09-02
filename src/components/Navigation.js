import { styled } from "styled-components";
import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from "react-redux";
import { selectProductInCart } from "../features/shoppingcart/ShoppingCartSlice";
import { Link } from "react-router-dom";
import { selectFavoriteProductsInCart } from "../features/favorites/FavoriteSlice";

export default function Navigation () {
    const productsInCart = useSelector(selectProductInCart);
    const numberProductsInCart = productsInCart.length; 

    const productsInFavorites = useSelector(selectFavoriteProductsInCart);
    const numberProductsInFavorites = productsInFavorites.length;
    return (
        <NavContainer>  
            <HomeLink to="/">Shop</HomeLink>
            <FavoritesLink to="/favorites">{numberProductsInFavorites} 🧡</FavoritesLink>
            <span>
                <CounterCart>{numberProductsInCart}</CounterCart>
                <Link to="/shoppingcart"><CartIcon/></Link>
            </span>
            
        </NavContainer>
    );
}

const NavContainer = styled.nav`
background-color: #0fa3b1; 
text-align: center; 
color: #f9f7f3; 
display: flex; 
justify-content: space-between; 
align-items: center; 
padding: 0.5rem;
position: fixed;
z-index: 1;
width: 100%;
top: 0;
`

const HomeLink=styled(Link)`
text-decoration: none;
color: #fff;
`

const FavoritesLink = styled(Link)`
text-decoration: none;
color: #fff;
`
const CartIcon = styled(FaShoppingCart)`
font-size: 2rem; 
color: #F17E40;
margin-right: 10px; 
`

const CounterCart = styled.span`
color: #F17E40;
`