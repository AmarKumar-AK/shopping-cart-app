import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/auth/Register";
import Home from "../pages/Home";
import Signin from "../pages/auth/Signin";
import Product from "../pages/Product";
// import Cart from "../pages/Cart";

const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/signin", element: <Signin /> },
    { path: "/register", element: <Register /> },
    { path: "/products", element: <Product /> },
    // { path: "/cart", element: <Cart /> },
]);

export default router;