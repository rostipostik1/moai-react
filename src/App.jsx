import { Routes, Route } from "react-router"
import Footer from "./components/footer/Footer"
import {HomePage,AboutPage,CareerPage,ContactPage,ServicesPage, Error404} from "./pages/index"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/services" element={<ServicesPage/>}/>
        <Route path="/career" element={<CareerPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
