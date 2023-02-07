import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Home, Dashboard, Websites, About, Users, PageNotFound } from './pages';
const router = createBrowserRouter([
  {
   path: '/',
   element: <Home></Home>
  },
  {
   path: '/websites',
   element: <Websites />
  },
  {
   path: '/dashboard',
   element: <Dashboard />
  },
  {
   path: '/users',
   element: <Users />
  },
  {
   path: '/about',
   element: <About />
  },
  {
   path: '*',
   element: <PageNotFound />
  }
 ])


 function App() {
   return (
     <main>
       <RouterProvider router={router}></RouterProvider>
     </main>
   );
 }

export default App;
