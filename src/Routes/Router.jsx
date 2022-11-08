import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Pricing from "../Pages/Pricing/Pricing";
import ServiceDetails from "../Pages/Services/ServiceDetails";
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
                loader: () => fetch('http://localhost:5000/services?limit=3'),
                element: <Home></Home>
            },
            {
                path: '/home',
                loader: () => fetch('http://localhost:5000/services?limit=3'),
                element: <Home></Home>
            },
            {
                path: '/services',
                loader:()=>fetch('http://localhost:5000/services?limit=6'),
                element: <Services></Services>
            },
            {
                path: '/pricing',
                element: <Pricing></Pricing>
            },
            {
                path: '/service/:id',
                element: <ServiceDetails></ServiceDetails>
            }
        ]
    }
])