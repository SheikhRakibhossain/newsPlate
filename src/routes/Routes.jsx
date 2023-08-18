import {createBrowserRouter} from "react-router-dom";
import Main from "../mainPage/Main";
import Home from "../pages/Home/Home";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";
import News from "../pages/News/Newses";
import Category from "../pages/Category/Category";
import SingleNews from "../pages/SingleNews/SingleNews";
import NewsDetails from "../NewsDetails/NewsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[

      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/signup',
        element:<Signup/>
      },
      {
        path:'/login',
        element:<Login/>
      },
     
      {
        path:'/category/:id',
        element:<Category/>
      },
      {
        path:'/news',
        element:<News/>
      },



    ]},
    {
      path:'news',
      element:<SingleNews/>,
      children:[

       {
        path:'/:id',
        element:<NewsDetails/>
       }
      ]
    }
  
]);

export default router;