import { Routes, Route } from "react-router"
import {HomePage,AboutPage,CareerPage,ContactPage,ServicesPage, Error404} from "./pages/index"
import MainLayout from "./layouts/MainLayout"
import "./styles/main.scss";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function App() {

  return (
    <>
      <Routes>
        <Route  element={<MainLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="/services" element={<ServicesPage/>}/>
          <Route path="/career" element={<CareerPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="*" element={<Error404/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
