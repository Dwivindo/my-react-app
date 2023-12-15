import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/Login.jsx'
import RegisterPage from './pages/Register.jsx'
import ErrorPage from './pages/404.jsx'
import Product from './pages/Produck.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    errorElement:<ErrorPage />
  },
  {
    path:"/login",
    element:<LoginPage/>,
  },
  {
    path:"/register",
    element:<RegisterPage/>
  },
  {
    path:"/product",
    element:<Product/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
