import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Login from './pages/Login';
import Register from './pages/Register';
import Product from './pages/Product';
import Cart from './pages/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  const user = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<ProductList />}>
          <Route path=":category" element={<ProductList />}></Route>
        </Route>
        <Route path="/product" element={<Product />}>
          <Route path=":id" element={<Product />}></Route>
        </Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={user ? <Home /> : <Login />}></Route>

        <Route
          path="/register"
          element={user ? <Home /> : <Register />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
