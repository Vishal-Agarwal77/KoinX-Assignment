import './App.css';
import HeroSection from './Component/HeroSection';
import InputBox from './Component/InputBox';
import Navbar from './Component/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='' element={<InputBox/>}/>
          <Route path='/:Coin' element={<HeroSection />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
