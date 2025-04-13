import React from "react";
import testimonialImage from "../assets/testimonial.png"; 
import quoteIcon from "../assets/testimonial1.png"; 

export default function TestimonialCard() {
  return (
    <div className="bg-white w-full py-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8">
       
        <div className="flex-shrink-0">
          <img
            src={testimonialImage}
            alt="Siti Sarah"
            className="w-[440px] h-[280px] object-cover rounded-tl-[100px] rounded-br-[100px]"
          />
        </div>

        <div className="flex flex-col justify-center text-left max-w-2xl">
          
          <img
            src={quoteIcon}
            alt="quote icon"
            className="w-6 h-6 mb-2"
          />

          
          <p className="text-gray-700 text-sm md:text-base mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor
            sapien et urna tincidunt fringilla. Vivamus at augue interdum, blandit
            arcu quis, laoreet ipsum. In eu ipsum urna. Suspendisse suscipit est et neque.
          </p>
          <p className="text-gray-700 text-sm md:text-base mb-4">
            Mauris tempor tellus ante, ut fermentum erat gravida vel. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Aenean nec justo dui. Ut et consequat dui, a malesuada ipsum.
            Pellentesque nec turpis viverra, blandit mi a, accumsan justo.
          </p>

          
          <h3 className="text-black font-semibold text-lg">Siti Sarah</h3>
          <p className="text-gray-500 text-sm">Founder Travosca</p>
        </div>
      </div>
    </div>
  );
}
