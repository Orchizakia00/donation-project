import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/mainLayout/MainLayout";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/Home";

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
            }
        ]
    }
])


export default myCreatedRoute;