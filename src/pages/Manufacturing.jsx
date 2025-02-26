"use client"

import Layout from "../components/Layout"
import Card from "../components/Card"
import Footer from "../components/Footer"

const products = [
  {
    id: 1,
    image: "/manufactuing1.png",
    name: "Industrial Robot",
    description: "High-precision robotic arm for manufacturing applications.",
    viewMoreLink: "#product-1",
  },
  {
    id: 2,
    image: "/manufactuirng2.webp",
    name: "CNC Machine",
    description: "Advanced CNC machine for precision cutting and milling.",
    viewMoreLink: "#product-2",
  },
  // Add more products here
]

export default function Manufacturing() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Our Manufacturing Solutions</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              image={product.image}
              name={product.name}
              description={product.description}
              viewMoreLink={product.viewMoreLink}
            />
          ))}
        </div>
      </div>
      <Footer/>
    </Layout>
  )
}
