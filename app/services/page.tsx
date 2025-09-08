import React from "react";
import Navbar from "../components/NavBar"
import Footer from "../components/Footer"

function Page() {
  const services = [
    {
      title: "🔧 General Repairs",
      image: "/images/1.jpg",
      desc: "Routine mechanical and electrical repairs to keep your vehicle in top condition.",
    },
    {
      title: "🛢 Oil Change",
      image: "/images/2.jpg",
      desc: "Quick oil and filter changes using high-quality lubricants to extend engine life.",
    },
    {
      title: "🚗 Tire Services",
      image: "/images/3.jpg",
      desc: "Tire replacement, balancing, rotation, and wheel alignment for safe driving.",
    },
    {
      title: "⚡ Engine Diagnostics",
      image: "/images/4.jpg",
      desc: "Computerized engine scans to identify problems accurately and fix them fast.",
    },
    {
      title: "🔋 Battery Services",
      image: "/images/5.jpg",
      desc: "Battery testing, replacement, and charging system checks.",
    },
    {
      title: "🛠 Brake Services",
      image: "/images/6.jpg",
      desc: "Brake pad replacement, rotor resurfacing, and fluid checks to ensure safety.",
    },
  ];

  const vehicleTypes = [
    {
      name: "🚗 Cars & SUVs",
      description: `We provide complete repair and maintenance services for 
      all types of cars and SUVs. From regular servicing and brake checks to engine 
      diagnostics and suspension repairs, our team ensures your vehicle runs safely and 
      efficiently on the road.`,
      image: "/images/cars-suv.jpg",
    },
    {
      name: "🚐 Vans & Light Trucks",
      description: `Our garage specializes in servicing vans and light-duty trucks used for 
      family, business, or transport. We handle everything from tire replacements
      and oil changes to engine overhauls, keeping your work vehicles reliable and ready for
      daily use.`,
      image: "/images/vans-light-trucks.jpg",
    },
    {
      name: "🛵 Motorcycles & Scooters",
      description: `Two-wheelers require regular attention for safety and performance.
      We offer fast and affordable repairs for motorcycles and scooters, 
      including engine tuning, brake servicing, and electrical system checks.`,
      image: "/images/motorcycles-scooters.jpg",
    },
  ];

  return (
    <>
    <Navbar/>
      <section id="services" className="py-16 bg-gray-50">
        
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              At Storage Haven, we provide a complete range of auto maintenance
              solutions to keep your vehicle safe, reliable, and performing at
              its best. Whether it's a routine oil change or a complex engine
              repair, our experienced technicians get the job done right.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow-md hover:shadow-lg transition"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <h2 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h2>
                <p className="text-gray-700">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

     
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Vehicle Types We Repair
              </h1>
            </div>
          </div>

          <div className="space-y-12 max-w-6xl mx-auto px-4 ">
            {vehicleTypes.map((type, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
               
                <div className="lg:w-1/2">
                  <div className="relative h-64 lg:h-80  shadow-lg group">
                    <img
                      src={type.image}
                      alt={type.name}
                      width={600}
                      height={600}
                      className=" group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </div>

                
                <div className="lg:w-1/2  bg-amber-500 h-85 p-6 shadow-md">
                  <div className=" text-black px-4 py-2 rounded-lg inline-block mb-4">
                    <h3 className="text-2xl font-bold">{type.name}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {type.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
      </section>
            <Footer/>
      
    </>
  );
}

export default Page;
