import React, { useState } from "react";
import { Link } from "react-router-dom"; // React Router for navigation
import Layout from "../components/Layout";
import Card from "../components/Card";
import Footer from "../components/Footer";

const architects = [
  {
    id: 1,
    image: "/architect1.jpg",
    name: "John Doe",
    position: "Senior Architect",
    description: "Specializing in modern residential design with over 15 years of experience.",
    socialLinks: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 2,
    image: "/architect2.jpg",
    name: "Jane Smith",
    position: "Landscape Architect",
    description: "Expert in sustainable and eco-friendly landscape design.",
    socialLinks: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
    },
  },
  // Add more architects here
];

export default function Architects() {
  const [selectedArchitect, setSelectedArchitect] = useState(null);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Our Architects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {architects.map((architect) => (
            <Card
              key={architect.id}
              image={architect.image}
              name={architect.name}
              position={architect.position}
              description={architect.description}
              socialLinks={architect.socialLinks}
              onClick={() => setSelectedArchitect(architect)} // Open Modal
            />
          ))}
        </div>
      </div>

      {/* Modal for Selected Architect */}
      {selectedArchitect && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full">
            <h2 className="text-2xl font-bold mb-4">{selectedArchitect.name}</h2>
            <p className="text-gray-600 mb-4">{selectedArchitect.position}</p>
            <p className="text-gray-700 mb-4">{selectedArchitect.description}</p>

            <h3 className="text-xl font-semibold mb-2">Projects</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Project 1</li>
              <li>Project 2</li>
              <li>Project 3</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Master's in Architecture, University XYZ</li>
              <li>Bachelor's in Environmental Design, University ABC</li>
            </ul>

            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={() => setSelectedArchitect(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <Footer/>
    </Layout>
  );
}
