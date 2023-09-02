import { useSelector } from "react-redux";
import { styled } from "styled-components";
import ProductCard from "../products/ProductCard";
import { useGetAllProductsQuery } from "../api/apiSlice";
import { selectFavoriteProductsInCart } from "./FavoriteSlice";

export default function FavoritesPage() {
    const {data: allProducts, isLoading, isError} = useGetAllProductsQuery();
    const productIdsInFavorites = useSelector(selectFavoriteProductsInCart);

    if (isLoading){
        return <div>Loading...</div>
    }

    if (isError){
        return <div>Error fetching data</div>
    }

    const productsInFavorites = allProducts.filter((product) => productIdsInFavorites.includes(product.id))

    return (
      <>
        <Container>
            {productsInFavorites.map((product, index) => 
                <ProductCard product={product} key={`${product.id}-${index}`}/>
            )}
            
        </Container>   
      </>
    );
  }
  
  const Container = styled.div`
text-align: center;
margin-top: 80px; 
`

