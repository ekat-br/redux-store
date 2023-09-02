import Navigation from './components/Navigation';
import ProductsList from './features/products/ProductsList';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShoppingCartPage from './features/shoppingcart/ShoppingCartPage';
import FavoritesPage from './features/favorites/FavoritesPage';
function App() {
    return (
        <Router>
            <Navigation/>
            <Routes>
                <Route exact path="/" element={<ProductsList/>}/>
                <Route path="/favorites" element={<FavoritesPage/>}/>
                <Route path="/shoppingcart" element={<ShoppingCartPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
