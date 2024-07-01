import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataLoadingSection from './DataLoadingSection';
import CirclesDisplay from './CirclesDisplay';
import FilteredColours from './FilteredColours';

const App = () => {
  const [data1, setData1] = useState([]);   // useState is a hook used in functional components
  const [data2, setData2] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState({ data1: 'loading', data2: 'loading' });
  const [filters, setFilters] = useState([]);

  const fetchData = async (url, setData, dataKey) => { //async makes a function return a promise
    try {
      const response = await axios.get(url);   //await makes async function wait for the promise
      setData(response.data);
      setLoadingStatus(prevState => ({ ...prevState, [dataKey]: 'success' }));
    } catch (error) {
      setLoadingStatus(prevState => ({ ...prevState, [dataKey]: 'error' }));
    }
  };
  
  useEffect(() => {      // useEffect called after rendering the page.
    const fetchDataAsync = async () => {
      await fetchData('/json/circles.json', setData1, 'data1');
      await fetchData('/json/circles2.json', setData2, 'data2');
    };

    fetchDataAsync();
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
