import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,
   RouterProvider
  
} from 'react-router-dom'

import './index.css'
import Layout from './components/Layout'
import NuevoCliente , { action as nuevoclienteAction  }  from './pages/NuevoCliente'
import Index , { loader as clientesloader } from './pages/Index'
import ErrorPage from "./components/ErrorPage";
import Editarclientes, { loader as editarclienteloader , action as editarclienteaction } from './components/Editarclientes'
import { action as eliminarclienteaction } from './components/Cliente'



const router = createBrowserRouter([
  {
    path: '/', 
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        element: <Index></Index>,
        loader: clientesloader,
        errorElement: <ErrorPage />
        

      },
      {
        path: '/cientes/nuevo',
        element: <NuevoCliente></NuevoCliente>,
        action: nuevoclienteAction ,
        errorElement: <ErrorPage />
      },
      {
        path: '/clientes/:clienteid/editar',
        element: <Editarclientes></Editarclientes>,
        loader: editarclienteloader,
        action: editarclienteaction,
        errorElement: <ErrorPage />
      },
      {
        path: '/clientes/:clienteid/eliminar',
        action: eliminarclienteaction
      }

    ]

  },

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>


    </RouterProvider>


  </React.StrictMode>,
)
