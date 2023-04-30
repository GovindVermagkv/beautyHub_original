import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx"
import Ragister from "./components/ragister";
import Login from "./components/Login";
import { Banner } from "./components/Banner";
import { About } from "./components/About";
import { Team } from "./components/Team";
import { Logo } from "./components/Logo";
function App() {
  return (
    <>
      <BrowserRouter>
      {/* <Logo/> */}
        <Navbar /> 
        {/* <Banner/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ragister" element={<Ragister />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        {/* <About/> */}
        {/* <Team/> */}
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
