import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";

const router =  createBrowserRouter([
    {
        path:'/',
        element: <HomeLayout></HomeLayout> ,
        children :[
            {
                path:'',
                element: ''
            },
            {
                path:'/category/:id',
                element: ''
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