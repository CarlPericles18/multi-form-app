import React from "react";
import {
  createBrowserRouter,
  Route, 
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"; 
import Plans from './components/Plans'
import Personal from './components/Personal-info'
import AddOns from './components/Add-ons'
import Payment from './components/Payment'
import RootLayout from "./components/layout/RootLayout"
import img from '../public/images/bg-sidebar-mobile.svg'

export default function App(){

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="*" element={<RootLayout />}>
        <Route index element={<Personal/>}/>
        <Route path='AddOns' element={<AddOns/>}/>
        <Route path='Plans' element={<Plans/>}/>
        <Route path='Payment' element={<Payment/>}/>
      </Route>
    )
  )


  return (
    <div>
      <img className="mobileImg" src={img}></img>
      <RouterProvider router={router}/>

      <div className="nextBtn">
                <button>Go Back</button>
                <button>Next Step</button>
      </div>
    </div>
  )
}


