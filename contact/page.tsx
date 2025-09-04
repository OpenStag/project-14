import React from "react";



export default function ContactPage() {
  return (
    <>
  
    
        <div className="px-8 py-10 bg-white min-h-screen">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-black">Contact Us</h1>
        </div>

        <div className="max-w-4xl mx-auto bg-orange-200 rounded-lg p-8 mb-12">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-black font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-white border-0"
                />
              </div>
              <div>
                <label className="block text-black font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-white border-0"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-black font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg bg-white border-0"
                />
              </div>
              <div>
                <label className="block text-black font-medium mb-2">Message</label>
                <input
                  className="w-full px-4 py-3 rounded-lg bg-white border-0"
              
                ></input>
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-orange-400 text-black font-medium px-8 py-2 rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg">
            <div className="h-80 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798467798845!2d79.86124731477373!3d6.917529594999984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25961c0e4e2a7%3A0x8c2e8c0b1c4e8c0b!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1635123456789!5m2!1sen!2slk"
                width="100%"
                height="100%"
                
              
              ></iframe>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-bold text-black">Other Contact Details</h2>
            <div className="flex items-start space-x-3">
              <div>
                <span className="font-medium text-black">
                  Phone Number: +94 71 234 5678
                </span>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div>
                <span className="font-medium text-black">
                  Email: info@garageexample.com
                </span>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div>
                <div className="font-medium text-black mb-2">Working Hours:</div>
                <ul className="space-y-1 text-black">
                  <li>• Monday – Friday: 8:00 AM – 6:00 PM</li>
                  <li>• Saturday: 8:00 AM – 2:00 PM</li>
                  <li>• Sunday: Closed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
  
      </div>
   
    </>
  );
}
