import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom"
import Layout from './layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Aos from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from "react"

const router = createBrowserRouter(createRoutesFromElements(<Route path="/" element={<Layout/>}>
  <Route index element={<Home/>}/>
  <Route path="about" element={<About/>}/>
  <Route path="contact" element={<Contact/>}/>
</Route>))

export default function App(){
  useEffect(() => {
    Aos.init({
      // offset: 300,
      // duration: 500,
      // easing: "ease-in-sine",
      // delay: 100,
    }, []);
  })
  return <RouterProvider router={router}/>
}