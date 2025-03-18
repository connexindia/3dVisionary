import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Manufacturing from "./pages/Manufacturing";
import RealEstate from "./pages/RealEstate";
import Architects from "./pages/Architects";
import Contactus from "./pages/Contactus";
import Layout from "./components/Layout";
import { useEffect, useState } from "react";
import Mob from "./pages/Mob";

export default function App() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check screen width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);  // 600px breakpoint for mobile
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);  // Empty dependency array to run only once when the component mounts


  return (
    <>
    {isMobile ? <Mob /> : <Layout />}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/manufacturing" element={<Manufacturing />} />
      <Route path="/architects" element={<Architects />} />
      <Route path="/real-estate" element={<RealEstate />} />
      <Route path="/contact" element={<Contactus />} />
    </Routes>
    </>
  );
}
