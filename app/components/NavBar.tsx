"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-orange-400 text-black font-bold text-lg">
      <div className="container mx-auto flex justify-end items-center p-4">
        
      
        <div className="hidden md:flex gap-6">
          <Link href="/" className="hover:text-white">HOME</Link>
          <Link href="/services" className="hover:text-white">SERVICE</Link>
          <Link href="/contact" className="hover:text-white">CONTACT</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 border rounded"
          >
            {isOpen ? (
              
              <span className="text-black font-bold text-2xl">&times;</span>
            ) : (
              
              <div className="space-y-1">
                <span className="block w-6 h-0.5 bg-black"></span>
                <span className="block w-6 h-0.5 bg-black"></span>
                <span className="block w-6 h-0.5 bg-black"></span>
              </div>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 bg-orange-400 p-4">
          <Link href="/" className="hover:text-white " onClick={() => setIsOpen(false)}>HOME</Link>
          <Link href="/services" className="hover:text-white" onClick={() => setIsOpen(false)}>SERVICE</Link>
          <Link href="/contact" className="hover:text-white" onClick={() => setIsOpen(false)}>CONTACT</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
