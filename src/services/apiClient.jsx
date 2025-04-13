import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;

export const getDestinations = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/Destinations`);
    return response.data;
  } catch (error) {
    console.error('Error fetching destinations:', error);
    return [];
  }
};

export const dummyArticles = [
  {
    id: 1,
    image: "https://assets.insuremytrip.com/wp-content/uploads/2020/03/02103508/most_family_friendly_beach_vacation_destinations.jpg",
    title: "Traveling Tips for Beginners",
    date: "2025-04-01",
    tag: "Tips",
    description:
      "Get started with essential travel tips that will make your first trip safe and enjoyable.",
  },
  {
    id: 2,
    image: "https://www.walksworldwide.com/images/general/asia_georgia_caucasus_mountains_hiker_blog.jpg",
    title: "Exploring Mountain Adventures",
    date: "2025-03-20",
    tag: "Adventure",
    description:
      "Discover thrilling mountain destinations and tips for safe hiking and climbing experiences.",
  },
  {
    id: 3,
    image: "", // No image provided
    title: "Best Beach Destinations in 2025",
    date: "2025-03-15",
    tag: "Relax",
    description:
      "From Bali to the Bahamas, uncover the top relaxing beach spots for your next getaway.",
  },
];
