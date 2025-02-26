"use client"

import Layout from "../components/Layout"
import Card from "../components/Card"
import Footer from "../components/Footer"

const properties = [
  {
    id: 1,
    image: "/realestate1.jpg",
    name: "Luxury Apartment",
    description: "Modern 3-bedroom apartment with stunning city views.",
    viewMoreLink: "#property-1",
  },
  {
    id: 2,
    image: "/realestate2.webp",
    name: "Suburban Family Home",
    description: "Spacious 4-bedroom house with a large backyard.",
    viewMoreLink: "#property-2",
  },
  // Add more properties here
]

export default function RealEstate() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Real Estate Listings</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card
              key={property.id}
              image={property.image}
              name={property.name}
              description={property.description}
              viewMoreLink={property.viewMoreLink}
            />
          ))}
        </div>
      </div>
      <Footer/>
    </Layout>
  )
}
