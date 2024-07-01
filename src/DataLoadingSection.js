import React from 'react';

const DataLoadingSection = ({ loadingStatus }) => (
  <div style={{ padding: '20px', border: '1px solid black', width: '250px', marginRight: '20px' }}>
    <h3>Data Loading Section</h3>
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      <li>
        <span style={{ color: loadingStatus.data1 === 'error' ? 'red' : 'green' }}>
          {loadingStatus.data1 === 'loading' ? 'Loading...' :
            loadingStatus.data1 === 'error' ? <span>&#x2717;</span> : <span>&#x2713;</span>}
        </span>
        <span style={{ color: 'black', marginLeft: '10px' }}>Dataset 1</span>
      </li>
      <li>
        <span style={{ color: loadingStatus.data2 === 'error' ? 'red' : 'green' }}>
          {loadingStatus.data2 === 'loading' ? 'Loading...' :
            loadingStatus.data2 === 'error' ? <span>&#x2717;</span> : <span>&#x2713;</span>}
        </span>
        <span style={{ color: 'black', marginLeft: '10px' }}>Dataset 2</span>
      </li>
    </ul>
  </div>
);

export default DataLoadingSection;
