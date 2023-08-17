import {createBrowserRouter} from "react-router-dom";
import Main from "../mainPage/Main";
import Home from "../pages/Home/Home";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";

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
      }


    ]}
  
]);

export default router;