import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router";
import MainLayouts from "./Layout/MainLayouts.jsx";
import AuthLayout from "./Layout/AuthLayout.jsx";
import Login from "./AccountAuth/Login.jsx";
import Regsisation from "./AccountAuth/Regsisation.jsx";
import AuthContext from "./Context/AuthContext.jsx";
import HomeLayouts from "./Layout/HomeLayouts.jsx";
import Post from "./components/Post.jsx";
import NewPost from "./components/NewPost.jsx";
import CreatePost from "./components/CreatePost.jsx";
import AllUsers from "./components/AllUsers.jsx";
import Notifaction from "./components/Notifaction.jsx";


const route = createBrowserRouter([

  {
    path:'/',
    element : <MainLayouts/>,
    children:[
      {
        path:'/',
        element:<HomeLayouts/>

      },{
        path:'/post',
        element:<Post/>
      },
      {
        path:'/new-post',
        element:<NewPost/>,
      },
      {
        path:'/create-post',
        element: <CreatePost/>
      },
      {
        path:'/all-users',
        element:<AllUsers/>
      },
      {
        path:'/notification',
        element:<Notifaction/>
      }
    ]
  },
  {
    path:'account',
    element:<AuthLayout/>,
    children:[
      {
        path:'/account/login',
        element:<Login/>
      },
      {
        path:'/account/regisation',
        element:<Regsisation/>
      }
    ]
  }


])










createRoot(document.getElementById("root")).render(
  <StrictMode>
   <AuthContext>
    <RouterProvider router={route}/>

 
   </AuthContext>

  </StrictMode>
);
