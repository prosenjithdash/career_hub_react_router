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
import FeaturedJobs from './Components/Home/FeaturedJobs/FeaturedJobs.jsx';
import JobDetails from './Components/Home/FeaturedJobs/FeaturedJobCard/JobDetails/JobDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot></MainRoot>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/appliedJobs',
        loader:()=>fetch('categories.json'),
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/jobCategoryList',
        element: <JobCategoryList></JobCategoryList>
      },
      {
        path: '/job/:jobId',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('../jobs.json'),
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
