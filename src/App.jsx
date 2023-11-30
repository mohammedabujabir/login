import React, { useEffect, useState } from 'react'
import {RouterProvider, createBrowserRouter,} from "react-router-dom";

import Layout from './layouts/Layout.jsx';
import Register from './assets/components/web/register/Register.jsx';
import Login from './assets/components/web/login/Login.jsx';
import Home from './assets/components/web/home/Home.jsx';
import Categories from './assets/components/web/categories/Categories.jsx';
import Dashboardlayout from './layouts/Dashboardlayout.jsx';
import HomeDashboard from './assets/components/dashboard/home/Home.jsx'
import CategoriesDashboard from './assets/components/dashboard/categories/Categories.jsx'
import {jwtDecode}  from 'jwt-decode';
export default function App() {
const [user,setUser] =useState(null);


const saveCurrentUser = ()=>{
  const token=localStorage.getItem('userToken');
  const decode=jwtDecode(token);
  console.log(decode);
}
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout user={user} setUser={setUser} />,
      children:[
        {
            path:"register",
            element:<Register/>,
        },
        {
          path:"login",
          element:<Login saveCurrentUser={saveCurrentUser}/>,
        },
        {
        path: "home",
        element:<Home/>
        },
        {
        path:"categories",
        element:<Categories/>
        },
        {
          path:'*',
          element:<h2>not found web</h2>
        }
      ]
    },
    {
      path:'/dashboard',
      element:<Dashboardlayout/>,
      children:[
        {
          path:'home',
          element:<HomeDashboard/>
        },
        {
          path:'categories',
          element:<CategoriesDashboard/>
        },
      {
        path:'*',
        element:<h2> not found dashboard</h2>
      }
      ]
    }
  ]);
  return (
    <RouterProvider router={router} />
  )
}
