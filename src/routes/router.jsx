import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../Layouts/AuthLayout";

const router =  createBrowserRouter([
    {
        path:'/',
        element: <HomeLayout></HomeLayout> ,
        children :[
            {
                path:'',
                element: <Home></Home>
            },
            {
                path:'/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader: () => fetch('/news.json')
            }
        ]
    },
    {
        path: '/news',
        element: <h2>dvcv bhhj</h2>
    },
    
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path:'/auth/login',
                element: <Login></Login>,
            },
            {
                path:'/auth/register',
                element: <Register></Register>,
            },
        ]
    },
    {
        path: '*',
        element: <h2>Error</h2>
    },

])

export default router;