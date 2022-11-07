import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Pricing from "../Pages/Pricing/Pricing";
import Services from "../Pages/Services/Services";
import Error from "../Shared/Error/Error";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/services',
                loader:() => fetch('http://localhost:5000/services'),
                element: <Services></Services>
            },
            {
                path: '/pricing',
                element: <Pricing></Pricing>
            }
        ]
    }
])