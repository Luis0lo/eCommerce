import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Login from './pages/Login';
import Register from './pages/Register';
import Product from './pages/Product';
import Cart from './pages/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Success from './pages/Success';
import { useSelector } from 'react-redux';

const App = () => {
  // const user = false;
  const user = useSelector((state) => state.user.currentUser);

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
        <Route path="/success" element={<Success />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
