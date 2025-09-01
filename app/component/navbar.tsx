import React  from "react";

export default function Navbar(){
    return(
        <nav className="bg-orange-400 px-8 py-4">
      <div className="flex justify-end space-x-4">
        <a href="page.tsx" className="text-black font-bold">
          Home
        </a>
        <a href="page.tsx" className="text-black font-bold">
          Service
        </a>
        <a href="page.tsx" className="text-black font-bold">
          Contact
        </a>
      </div>
    </nav>
    );
}