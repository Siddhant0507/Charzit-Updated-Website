import './App.css';
import AboutUs from './Screens/AboutUs';
import Contact from './Screens/Contact';
import Homepage from './Screens/Homepage';
import PartnerWithUs from './Screens/PartnerWithUs';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Homepage />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="About" element={<AboutUs/>} />
      <Route path="PartnerWithUs" element={<PartnerWithUs />} />      
  </Routes>
</BrowserRouter>
  );
}

export default App;
