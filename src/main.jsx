import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// import react router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import MainRoot from './Components/MainRoot/MainRoot';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Blog from './Components/Blog/Blog';
import Error from './Components/Error/Error';
import JobCategoryList from './Components/Home/JobCategoryList/JobCategoryList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot></MainRoot>,
    errorElement:<Error></Error>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/appliedJobs',
        element:<AppliedJobs></AppliedJobs>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/jobCategoryList',
        element:<JobCategoryList></JobCategoryList>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
