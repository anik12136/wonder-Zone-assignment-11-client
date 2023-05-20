import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddToys from "../Pages/AddToys/AddToys";
import AllToys from "../Pages/AllToys/AllToys";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import MyToys from "../Pages/MyToys/MyToys";
import SignUp from "../Pages/Registration/SignUp";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
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
        
      ]
    },
  ]);

export default router;