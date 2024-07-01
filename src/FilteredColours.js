import React from 'react';

const FilteredColours = ({ filters, onClear }) => (
  <div style={{ padding: '20px', border: '1px solid black', width: '250px' }}>
    <h3>Filtered Colours</h3>
    <button onClick={onClear} style={{ marginBottom: '10px' }}>Clear All</button>
    <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {filters.map((color, index) => (
        <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ display: 'inline-block', width: '20px', height: '20px', borderRadius: '50%', backgroundColor: color, marginRight: '10px' }}></span>
        </li>
      ))}
    </ul>
  </div>
);

export default FilteredColours;
