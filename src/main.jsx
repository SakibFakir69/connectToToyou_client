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




import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import ProfileLayout from "./Layout/ProfileLayout.jsx";
import NewAccount from "./Homecomponents/NewAccount.jsx";
import NewPostDetails from "./components/NewPostDetails.jsx";
import ManagePost from "./components/ManagePost.jsx";
import InfoPage from "./ProfilePage/InfoPage.jsx";
import YourAllPost from "./ProfilePage/YourAllPost.jsx";
import ProfileUpdate from "./ProfilePage/ProfileUpdate.jsx";
import Dashboard from "./ProfilePage/Dashboard.jsx";

const queryClient = new QueryClient();




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
        path:'/mangepost',
        element:<ManagePost/>
      },

      // details page of new post 

      {
        path:'/newpost-details/:id',
        element:<NewPostDetails/>
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
  },

  // profile 

  {
    path:'profilepage',
    element : <ProfileLayout/>,
    children:[
      {
        path:'/profilepage',
        element:<InfoPage/>
      },
      {
        path:'/profilepage/yourpost',
        element:<YourAllPost/>
      },
      {
        path:'/profilepage/profileupdate',
        element:<ProfileUpdate/>
      },
      {
        path:'/profilepage/dashboard',
        element:<Dashboard/>
      }

    ]
  }


])










createRoot(document.getElementById("root")).render(
  <StrictMode>
   <AuthContext>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={route}/>
    </QueryClientProvider>

 

 
   </AuthContext>

  </StrictMode>
);




