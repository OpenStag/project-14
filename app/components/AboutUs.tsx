import React from 'react';
import Image from 'next/image';
import AboutImg from '../images/about-img.jpg'; 

const AboutUs = () => {
  return (
    <section className="about py-16 px-4 md:px-6 bg-white" >
      <div className="w-full max-w-7xl mx-auto">
        <h2
          className="text-black text-4xl md:text-6xl font-extrabold text-center leading-tight mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          About Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image on the Left */}
          <div
            className="flex justify-center items-center"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]  overflow-hidden shadow-lg">
              <Image
                src={AboutImg}
                alt="About Us Image"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text on the Right */}
          <div
            className="text-white"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            

            <p className="text-black md:text-2xl sm:text-lg leading-relaxed mb-6">
              "Established in 2010, [Garage Name] has been dedicated to providing 
              reliable and high-quality vehicle repair and maintenance services. Our
               mission is to ensure every customer’s vehicle runs safely and efficiently,
                combining skilled craftsmanship with honest, friendly service. We strive 
                to be the trusted choice for drivers in our community, delivering 
                excellence one vehicle at a time."
            </p>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;


  
