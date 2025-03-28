import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Global/Navbar";
import Footer from "./Global/Footer";
import HeroPage from "./components/HeroPage";
import Signup from "./Global/Signup";
import Login from "./Global/Login";

function App() {

  return (
    <>
  <BrowserRouter>
  
      <Navbar />
      
      <Routes>
      {/* <Route path="/" element={<h1>Home Page</h1>} /> */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} /> 
      <Route path="/" element={<HeroPage />} />
        </Routes>
        <Footer/>
      </BrowserRouter>

     
    </>
  )
}

export default App
