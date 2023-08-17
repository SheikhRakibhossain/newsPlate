import {createBrowserRouter} from "react-router-dom";
import Main from "../mainPage/Main";
import Home from "../pages/Home/Home";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";
import News from "../pages/News/Newses";
import Categories from "../components/categories/Categories";

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
        path:'/category',
        element:<Categories/>
      },
      {
        path:'/news',
        element:<News/>
      }


    ]}
  
]);

export default router;