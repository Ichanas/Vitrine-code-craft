
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Contactus from  "./Components/Contactus";
import Project from "./Components/Project";
import About from "./Components/AboutUs";
import Service from "./Components/Services";
import './App.css';
export default function App() {
  return (
      <div>
           <Home/>
           <Service/>
           <Project/>
           <About/>
           <Contactus/>
           <Footer/>
      </div>
  )
}