import React from "react";
import image8 from "../assets/gallery1.png"; 
import image9 from "../assets/gallery2.png"; 
import image10 from "../assets/gallery3.png"; 
import image11 from "../assets/gallery4.png"; 

export default function GallerySection() {
  return (
    <div className="bg-white py-16 px-6 text-center">
      <h2 className="text-xl font-normal text-gray-800 mb-1">Gallery</h2>
      <p className="text-4xl font-bold text-gray-900 mb-10">Unforgettable Moment</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
      
        <div className="md:row-span-2 relative h-[600px]">
          <img
            src={image8}
            alt="Bali"
            className="w-full h-full object-cover rounded-xl"
          />
          <span className="absolute bottom-4 left-4 text-white text-xl font-bold drop-shadow-md">
            Bali
          </span>
        </div>

    
        <div className="col-span-2 flex flex-col gap-4">
         
          <div className="relative h-[290px]">
            <img
              src={image9}
              alt="Dubai"
              className="w-full h-full object-cover rounded-xl"
            />
            <span className="absolute bottom-4 left-4 text-white text-xl font-bold drop-shadow-md">
              Dubai
            </span>
          </div>

       
          <div className="flex gap-4 h-[290px]">
            <div className="relative w-1/2">
              <img
                src={image10}
                alt="Paris"
                className="w-full h-full object-cover rounded-xl"
              />
              <span className="absolute bottom-4 left-4 text-white text-xl font-bold drop-shadow-md">
                Paris
              </span>
            </div>
            <div className="relative w-1/2">
              <img
                src={image11}
                alt="Italy"
                className="w-full h-full object-cover rounded-xl"
              />
              <span className="absolute bottom-4 left-4 text-white text-xl font-bold drop-shadow-md">
                Italy
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
