import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GarageHeroImg from '../images/garage-hero-img.jpg';

const HeroSection = () => {
  return (
    <section className="relative w-full h-[80vh]">
      {/* Background Image */}
      <Image
        src={GarageHeroImg}
        alt="Garage Hero Section Image"
        fill
        className="object-cover"
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[120px] font-extrabold text-orange-500 leading-tight">
          "Reliable Vehicle<br />Repairs, Anytime"
        </h1>
        <button className="mt-6 text-lg sm:text-xl md:text-2xl font-extrabold text-black bg-orange-500 hover:bg-orange-600 hover:text-white py-3 px-8 rounded">
          <Link href="/book">Book Now</Link>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
