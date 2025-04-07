import { useEffect, useState } from 'react';
import { getDestinations, dummyArticles } from '../services/apiClient';
import Destinations from '../components/Destinations';
import Articles from '../components/Articles';

export default function Package() {
  const [destinations, setDestinations] = useState([]);
  const [articles] = useState(dummyArticles);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDestinations();
      setDestinations(data);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-white p-8 space-y-12">
      <Destinations 
        data={destinations}
        page={currentPage}
        perPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />

      <img src="images/plane.png" alt="plane" />
      
      <Articles data={articles} />
    </div>
  );
}