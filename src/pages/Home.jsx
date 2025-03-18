import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

const images = ["/image1.jpg", "/image2.jpg", "/houseimage.jpeg", "/image4.jpg"];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative w-auto overflow-hidden pt-15 md:pt-0">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt="Company Banner"
          className="w-full md:h-[80vh] h-[60vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            Welcome to 3D Visionary
          </h1>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Innovating the Future</h2>
        <p className="mt-4 text-lg text-gray-600">
          We provide cutting-edge solutions to revolutionize industries. Join us in building a smarter, more connected world.
        </p>
      </div>
      <Footer />
      </>
  );
}