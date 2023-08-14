import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/auth/Register";
import Home from "../pages/Home";
import Signin from "../pages/auth/Signin";
import Product from "../pages/Product";

const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/signin", element: <Signin /> },
    { path: "/register", element: <Register /> },
    { path: "/products", element: <Product /> },
]);

export default router;