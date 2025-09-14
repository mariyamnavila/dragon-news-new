import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";

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
        element: <h2>ddbhhj</h2>
    },
    {
        path: '*',
        element: <h2>Error</h2>
    },

])

export default router;