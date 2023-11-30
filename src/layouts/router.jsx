
import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './../assets/components/web/home/Home.jsx';
import Categories from '../assets/components/web/categories/Categories.jsx';
import Dashboardlayout from './Dashboardlayout.jsx';
import HomeDashboard from './../assets/components/dashboard/home/Home.jsx'
import CategoriesDashboard from './../assets/components/dashboard/categories/Categories.jsx'
import Register from '../assets/components/web/register/Register.jsx';
import Login from '../assets/components/web/login/Login.jsx';

export const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>,
      children:[
        {
            path:"register",
            element:<Register/>,
        },
        {
          path:"login",
          element:<Login/>,
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