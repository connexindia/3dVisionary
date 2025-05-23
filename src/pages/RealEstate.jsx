"use client";

import { useState, useEffect } from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import Footer from "../components/Footer";

const properties = [
  {
    id: 1,
    image: "/realIstate3.jpg",
    name: "From Family Legacy to Real Estate Success",
    description:
      "Real estate has always been more than just a business for me; it’s a legacy. My family has been in this industry for years, and our journey started with a strong sense of responsibility. There was a time when unethical builders were scamming people, selling the same property to multiple buyers. My grandfather and father, who were respected community leaders, couldn’t stand by and watch. They decided to step in and ensure people had access to honest and reliable property deals. That’s where our real estate journey began. Before joining the family business, I worked as an accountant in Australia. But after making my first real estate deal, I realised something - one successful transaction in real estate could generate the kind of income that would take a year to earn in a regular job. More importantly, I saw the impact it had on people’s lives. That’s when I made the decision to leave my Australian lifestyle behind and fully commit to real estate in India.The most rewarding part of my career is seeing people finally own the homes they’ve dreamed of. Many of my clients are migrants looking for affordable housing in Delhi. I remember one client in particular, he had almost given up on buying a home because prices were too high. When he found us, he was excited but also sceptical. Affordable property often comes with doubts about authenticity. But after thoroughly checking everything, he finally purchased his dream home. Seeing that sense of relief and joy on his face is what keeps me going. However, the journey hasn’t been easy. One of my biggest challenges was transforming our traditionally run family business into a professionally structured real estate firm. Another challenge was building trust with clients in an industry where people are often wary of fraud. It took time, patience, and a commitment to transparency.Over the years, I’ve seen the real estate market evolve. Earlier, people relied only on local property dealers, but now, digital platforms play a huge role. Buyers research online, compare options, and even take virtual tours before making a decision. The future of real estate is changing, with trends like real estate investment trusts (REITs), AI-driven insights, and even tokenised property ownership on the rise. For first-time investors, my advice is simple: know what you want. Do you want capital growth, or do you want steady rental income? Don’t fall for unrealistic promises of getting both at the same time. Also, always do your due diligence - choose the right property, the right consultant, and verify everything legally before investing.Looking ahead, I believe real estate prices will continue to rise due to limited land availability. Technology will play a bigger role, making transactions smoother and reducing fraud. In the next 15 years, real estate will be more digitised, and verifying properties will be easier with blockchain and advanced verification methods. To those entering this industry, I’d say real estate isn’t easy. It takes time to build credibility. When you ask someone to invest their life savings with you, they need to trust you completely. If people believe in you, success will follow.",
    viewMoreLink: "#property-1",
  },
  {
    id: 2,
    image: "/realestate1.jpg",
    name: "Luxury Apartment",
    description:
      "Modern 3-bedroom apartment with stunning city views. Designed with contemporary aesthetics and comfort in mind, this apartment is perfect for urban professionals or small families. It offers easy access to transportation and shopping hubs.",
    viewMoreLink: "#property-2",
  },
  {
    id: 3,
    image: "/realestate2.webp",
    name: "Suburban Family Home",
    description:
      "Spacious 4-bedroom house with a large backyard. Nestled in a peaceful neighborhood, this home provides ample space for children to play and for families to create lifelong memories. Ideal for long-term living.",
    viewMoreLink: "#property-3",
  },
];

function Card({ image, name, description, onViewMore }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-84">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex justify-end">
          <button
            onClick={onViewMore}
            className="pt-2 pb-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer"
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
}

function FullScreenView({ property, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!property) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-3xl text-gray-900 font-bold hover:text-black cursor-pointer"
        >
          ✕
        </button>
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-[600px] object-contain rounded mb-6"
        />
        <h2 className="text-3xl font-bold mb-4">{property.name}</h2>
        <p className="text-gray-700 leading-relaxed whitespace-pre-wrap text-lg">
          {property.description}
        </p>
      </div>
    </div>
  );
}

export default function RealEstate() {
  const [selectedProperty, setSelectedProperty] = useState(null);

  return (
    <>
      <div className="container mx-auto px-4 py-12 pt-20 md:pt-0">
        <h1 className="text-4xl font-bold mb-8">Real Estate Listings</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card
              key={property.id}
              image={property.image}
              name={property.name}
              description={property.description.slice(0, 80) + "..."}
              onViewMore={() => setSelectedProperty(property)}
            />
          ))}
        </div>
      </div>

      {selectedProperty && (
        <FullScreenView
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}

      <Footer />
    </>
  );
}
