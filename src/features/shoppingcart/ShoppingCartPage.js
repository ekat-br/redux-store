import { useSelector } from "react-redux";
import { selectProductInCart } from "./ShoppingCartSlice";
import { styled } from "styled-components";
import ProductCard from "../products/ProductCard";
import { useGetAllProductsQuery } from "../api/apiSlice";

export default function ShoppingCartPage() {
    const {data: allProducts, isLoading, isError} = useGetAllProductsQuery();
    const productIdsInCart = useSelector(selectProductInCart);

    if (isLoading){
        return <div>Loading...</div>
    }

    if (isError){
        return <div>Error fetching data</div>
    }
    
    
    const productsInCart = allProducts.filter((product) => productIdsInCart.includes(product.id));
    const productPricesInCart = productsInCart.map(product => product.price);
    const totalPriceProductsInCart = productPricesInCart.reduce((accumulator, price) => accumulator + price, 0)

    return (
      <div>
        
        <Container>
            {totalPriceProductsInCart > 0 && (
              <BuyButton>
                Buy all products for: {totalPriceProductsInCart} €
              </BuyButton>
            )}
            {productsInCart.map((product, index) => 
                <ProductCard product={product} key={`${product.id}-${index}`}/>
            )}
            
        </Container>   
      </div>
    );
  }
  
  const Container = styled.div`
text-align: center; 
margin-top: 50px;
`

const BuyButton = styled.button`
background-color: #EDDEA4;
color: #F17E40;
border: none; 
padding: 8px 16px;
border-radius: 4px; 
margin-top: 10px; 
font-weight: bold;
&:hover {
  background-color: #F3DB7A;
}
`