import React from "react";

const Repairs = () => {
  return (
    <section className="w-full pb-16 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-4 w-full ">

        {/* Column 1 */}
        <div className="bg-orange-400 text-black p-6 sm:p-8 md:p-10 text-sm sm:text-base md:text-lg">
          <h3 className="font-bold mb-2 md:text-3xl sm:text-lg text-center"><span className="text-3xl">🔧</span>General Repair</h3>
          <p className="md:text-2xl sm:text-lg">

          From brake checks to suspension fixes, we handle all kinds of vehicle 
            repairs to keep your car running smoothly. From brake checks to suspension fixes, we handle all kinds of vehicle 
            repairs to keep your car running smoothly.  
          </p>
        </div>

       
        <div className="bg-orange-300 text-black p-6 sm:p-8 md:p-10 text-sm sm:text-base md:text-lg ">
          <h3 className="font-bold mb-2 md:text-3xl sm:text-lg text-center"><span className="text-3xl">🔧</span>Oil Change</h3>
          <p className="md:text-2xl sm:text-lg">

            Quick and professional oil changes with quality lubricants to protect your 
            engine and extend its life. Quick and professional oil changes with quality lubricants to protect your engine and extend its life.
         
          </p>
        </div>

        <div className="bg-orange-400 text-black p-6 sm:p-8 md:p-10 text-sm sm:text-base md:text-lg ">
           
          <h3 className="font-bold md:text-3xl sm:text-lg mb-2 text-center"> <span className="text-3xl">🔧</span> Tire Services</h3>
           <p className="md:text-2xl sm:text-lg">

            Tire replacement, balancing, and alignment services to ensure safety and a smooth
             driving experience.  Tire replacement, balancing, and alignment services to ensure safety and a smooth
             driving experience.
          </p>
        </div>

        <div className="bg-orange-300 text-black p-6 sm:p-8 md:p-10 text-sm sm:text-base md:text-lg ">
          <h3 className="font-bold mb-2 md:text-3xl sm:text-lg text-center"><span className="text-3xl">🔧</span>Diagnostics</h3>
         <p className="md:text-2xl sm:text-lg">

            Advanced diagnostic tools to identify engine issues quickly and provide the right 
            solutions. Advanced diagnostic tools to identify engine issues quickly and provide the right 
            solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Repairs;