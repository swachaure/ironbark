import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataLoadingSection from './DataLoadingSection';
import CirclesDisplay from './CirclesDisplay';
import FilteredColours from './FilteredColours';

const App = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState({ data1: false, data2: false });
  const [filters, setFilters] = useState([]);

  const fetchData1 = async () => {
    try {
      const response1 = await axios.get('/json/circles.json');
      setData1(response1.data);
      setLoadingStatus(prevState => ({ ...prevState, data1: 'success' }));
    } catch (error) {
      setLoadingStatus(prevState => ({ ...prevState, data1: 'error' }));
    }
  };

  const fetchData2 = async () => {
    try {
      const response2 = await axios.get('/json/circles2.json');
      setData2(response2.data);
      setLoadingStatus(prevState => ({ ...prevState, data2: 'success' }));
    } catch (error) {
      setLoadingStatus(prevState => ({ ...prevState, data2: 'error' }));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoadingStatus({ data1: 'loading', data2: 'loading' });
      await fetchData1();
      await fetchData2();
    };

    fetchData();

    const interval = setInterval(fetchData, 5000); // Poll every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const handleFilter = (color) => {
    setFilters([...filters, color]);
  };

  const handleClear = () => {
    setFilters([]);
  };

  const filteredData = data1.concat(data2).filter(item => !filters.includes(item.color));

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <DataLoadingSection loadingStatus={loadingStatus} />
      <div>
        <CirclesDisplay data={filteredData} onFilter={handleFilter} />
        <FilteredColours filters={filters} onClear={handleClear} />
      </div>
    </div>
  );
};

export default App;
