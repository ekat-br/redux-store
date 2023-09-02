import { styled } from "styled-components";
import ShoppingCartButton from "../shoppingcart/ShoppingCartButton";
import FavoriteButton from "../favorites/FavoriteButton";
export default function ProductCard ({product}) {
    const { id, title, category, image, price, description } = product
    return (
        <CardContainer>
            <ProductTitle>{title}</ProductTitle>
            <ProductImage src={image} alt={title}/>
            <ProductDescription>{description}</ProductDescription>
            <ProductDetails>
                <ProductDetail>{category}</ProductDetail>
                <ProductDetail>{price} €</ProductDetail>
            </ProductDetails>
            <FavoriteButton id={id}/>
            <ShoppingCartButton id={id}/>
        </CardContainer>

    );
}


const CardContainer = styled.article`
display: flex; 
flex-direction: column; 
align-items: center; 
justify-content: center; 
border: 1px solid #0fa3b1;
border-radius: 4px; 
margin:  20px 50px; 
padding: 20px;
height: auto;
text-align: center; 
background-color: #fff;
`
const ProductTitle = styled.h3`
color: #0FA3B1;
`
const ProductImage = styled.img`
height: 200px; 
width: auto; 
margin-bottom: 10px; 
`

const ProductDescription = styled.article`
max-width: 500px; 
margin: 10px 0; 
text-align: justify; 
font-weight: 100;
`

const ProductDetails = styled.ul`
margin: 0;
padding: 0; 
`

const ProductDetail = styled.li`
list-style: none; 
color: #fff; 
background-color: #0FA3B1;
margin: 5px 0px 5px 0px;  
padding: 4px 8px; 
border-radius: 4px; 
`

