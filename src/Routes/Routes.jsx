import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import NotFound from "../Pages/404/Notfound";
import AddToys from "../Pages/AddToys/AddToys";
import AllToys from "../Pages/AllToys/AllToys";
import AlltoysDetails from "../Pages/AllToys/AlltoysDetails";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import MyToys from "../Pages/MyToys/MyToys";
import UpdateToys from "../Pages/MyToys/UpdateToys";
import SignUp from "../Pages/Registration/SignUp";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'allToys',
                element: <AllToys></AllToys>
            },
            {
                path: 'myToys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: 'addAToys',
                element: <PrivateRoute><AddToys></AddToys></PrivateRoute>

            },
            {
                path: 'blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/alltoysDetails/:id',
                element: <AlltoysDetails></AlltoysDetails>,
                loader: ({ params }) => fetch(`https://assignment-11-serve-site-anik12136.vercel.app/toyDetail/${params.id}`)
            },
            {
                path: '/myToysDetails/:id',
                element:<UpdateToys></UpdateToys>,
                loader: ({ params }) => fetch(`https://assignment-11-serve-site-anik12136.vercel.app/toyDetail/${params.id}`)
            },

        ]
    },
    {
        path : '*',
        element : <NotFound></NotFound>
      },
]);

export default router;