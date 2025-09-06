
import Image from "next/image";

const testimonials = [
  {
    name: "Michael Perera",
    image: "/users/user-1.jpg",
    rating: 5,
    text: "Excellent service! My car broke down unexpectedly, and the team at [Garage Name] had me back on the road the same day. Honest pricing and very professional staff.",
  },
  {
    name: "Dilani Fernando",
   
    rating: 5,
    text: "I’ve been bringing my car here for years. They always explain the repairs clearly and never overcharge. Highly recommended for anyone looking for a trustworthy garage.",
  },
  {
    name: "Ruwan Silva",
    
    rating: 4,
    text: "Quick oil change and tire rotation at a fair price. The waiting area is clean and comfortable too. Will definitely return for future maintenance.",
  },
  {
    name: "Sandun Perera",

    rating: 5,
    text: "Outstanding service! The mechanics at [Garage Name] are friendly, skilled, and honest. They fixed my engine issue quickly and explained everything clearly. I wouldn’t trust my car with anyone else.",
  }
  
];

export default function Testimonials() {
  return (
    <section className="w-full bg-white flex flex-col justify-center py-8">
      <div className="mx-auto px-4">
        {/* Heading */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-black">
           Reviews
          </h1>
          
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
          {testimonials.map((review, index) => (
            <div
              key={index}
              className="bg-orange-600 rounded-lg shadow-md hover:shadow-lg transition-all duration-500 p-6 flex flex-col items-center text-center"
            >
             
              <div className="flex justify-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-lg ${
                      i < review.rating ? "text-yellow-400" : "text-black"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="mt-4 md:text-lg sm:text-sm text-black font-bold leading-relaxed line-clamp-10">
                {review.text}
              </p>

               {/* Name */}
              <h3 className="mt-auto text-black font-bold text-xl ">—{review.name}</h3>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
