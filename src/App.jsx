import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Global/Navbar";
import Footer from "./Global/Footer";
import HeroPage from "./components/HeroPage";


function App() {

  return (
    <>
  <BrowserRouter>
  
      <Navbar />
      
      <Routes>
      <Route path="/" element={<HeroPage />} />
        </Routes>
        <Footer/>
      </BrowserRouter>

     
    </>
  )
}

export default App
