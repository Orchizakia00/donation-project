import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/mainLayout/MainLayout";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/Home";
import Donation from "../pages/donation/Donation";
import Statistics from "../pages/statistics/Statistics";

const myCreatedRoute = createBrowserRouter([

    {
        path: '/',
        element:<MainLayout></MainLayout>, 
        errorElement:<ErrorPage></ErrorPage>, 
        children: [
            {
                path:'/',
                element:<Home></Home>, 
                // loader: ()=> fetch('./phones.json')
            },
            {
                path:'/donation',
                element:<Donation></Donation>
            },
            {
                path:'/statistics',
                element:<Statistics></Statistics>
            }
        ]
    }
])


export default myCreatedRoute;