import React from 'react'
import { createBrowserRouter as Router, RouterProvider } from 'react-router-dom'
import Main from './Main';
import Quiz from "./Quiz";
import Result from "./Result";
import "../styles/App.css"
import { CheckedUser } from '../helper/helper';
const App = () => {

  const router = Router([
    {
      path: "/",
      element: <Main />
    },
    {
      path: "/quiz",
      element: <CheckedUser><Quiz /></CheckedUser>
    },
    {
      path: "/result",
      element: <CheckedUser><Result /></CheckedUser>
    },
    {
      path: "*",
      element: <div>Page Not Found</div>
    }
  ]);

  return (
    <RouterProvider router = {router}/>
  )
}

export default App
