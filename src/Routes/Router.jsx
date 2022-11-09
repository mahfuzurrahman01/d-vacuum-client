
import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/My-reviews/MyReviews";
import Pricing from "../Pages/Pricing/Pricing";
import Register from "../Pages/Register/Register";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import Services from "../Pages/Services/Services";
import PrivateRoute from "../Private/PrivateRoute";
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
                element: <Services></Services>
            },
            {
                path: '/pricing',
                element: <Pricing></Pricing>
            },
            {
                path: '/service/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`),
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/my_review',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/add_service',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            }
        ]
    }
])