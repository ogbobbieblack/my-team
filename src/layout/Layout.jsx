import { Outlet } from "react-router-dom"
import Nav from "../components/Nav"
import Footer from "../components/Footer"


const Layout = () => {
  return (
    <div className="bg-primary min-h-screen w-full">
        <Nav/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout