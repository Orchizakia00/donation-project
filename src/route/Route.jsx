import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/mainLayout/MainLayout";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/Home";
import Donation from "../pages/donation/Donation";
import Statistics from "../pages/statistics/Statistics";
import CardDetails from "../components/cardDetails/CardDetails";
import { DonationProvider } from "../components/DonationContext/DonationContext";


const myCreatedRoute = createBrowserRouter([

    {
        path: '/',
        element: (
            <DonationProvider> 
                <MainLayout></MainLayout>
            </DonationProvider>
        ),
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/donation',
                element: <Donation></Donation>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/card/:id',
                element: <CardDetails></CardDetails>,
                loader: () => fetch('/data.json')
            }
        ]
    }
])


export default myCreatedRoute;