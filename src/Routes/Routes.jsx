import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddAToys from "../Pages/Add-A-Toys/AddAToys";
import AllToys from "../Pages/All-Toys/AllToys";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import MyToys from "../Pages/MyToys/MyToys";
import SignUp from "../Pages/Registration/SignUp";


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
            element: <MyToys></MyToys>
        },
        {
            path: 'addAToys', 
            element: <AddAToys></AddAToys>,

        },
        {
            path: 'blogs', 
            element: <Blogs></Blogs>
        },
        
      ]
    },
  ]);

export default router;