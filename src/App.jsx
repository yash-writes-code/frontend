import { useState } from 'react'
import NavBar from './components/Nav/NavBar'
import Hero from './components/Hero/Hero'
import Car from './components/Hero/Car'
import Features from './components/Features/Features'
import SocialMedia from './components/Footer/SocialMedia'
import Footer from './components/Footer/Footer'
import SignIn from "./components/AccountManage/SignIn"
import SignUp from "./components/AccountManage/SignUp"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";




function App() {
  

  return (
   <div >
    <NavBar></NavBar>
    <Hero></Hero>
    <Car></Car>
    <Features></Features>
    <SocialMedia></SocialMedia>
    <Footer></Footer>
   </div>
  )
}

export default App
