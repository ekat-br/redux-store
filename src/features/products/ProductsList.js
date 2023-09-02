import { useGetAllProductsQuery } from "../api/apiSlice"
import { styled } from "styled-components";
import ProductCard from "./ProductCard";
import { useState } from "react";

export default function ProductsList () {
    const {data: products, isLoading, isError} = useGetAllProductsQuery();
    const [visibleProducts, setVisibleProducts] = useState(2);


    if (isLoading){
        return <div>Loading...</div>
    }

    if (isError){
        return <div>Error fetching data</div>
    }

    function handleShowMoreProducts() {
        setVisibleProducts(visibleProducts +2);
    }

    return(
        <Container>
            {products.slice(0, visibleProducts).map((product) => 
                <ProductCard product={product} key={product.id}/>
            )}
            <Button onClick={handleShowMoreProducts}>⬇️Show more products⬇️</Button>
        </Container>
    );
}

const Container = styled.div`
text-align: center; 
margin-top: 80px;
`
const Button = styled.button`
background-color: #F3DB7A;
padding: 8px 16px; 
border: none;
border-radius: 4px; 
color: #F17E40;
margin-bottom: 30px; 
font-weight: bold;

&:hover{
    background-color: #F0D568;
}
`