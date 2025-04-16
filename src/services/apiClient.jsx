import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/Destinations`);
        setDestinations(response.data);
      } catch (error) {
        console.error('Error fetching destinations:', error);
        setDestinations([]);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  if (loading) return <p className="text-center">Loading destinations...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {destinations.map((dest) => (
        <div key={dest.id} className="bg-white rounded-xl shadow-md overflow-hidden">
          <img
            src={dest.image || 'https://via.placeholder.com/400x250?text=No+Image'}
            alt={dest.title}
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{dest.title}</h2>
            <p className="text-gray-600 mt-2">{dest.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Destinations;
