import React from 'react';

const CirclesDisplay = ({ data, onFilter }) => (
//   <div>  style={{ padding: '20px', border: '1px solid black', width: '250px', marginBottom: '20px' }}>
    <div>
 
    <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {data.map(item => (
        <li key={item.id} onClick={() => onFilter(item.color)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
          <span style={{ display: 'inline-block', width: '20px', height: '20px', borderRadius: '50%', backgroundColor: item.color, marginRight: '10px' }}></span>
        </li>
      ))}
    </ul>
  </div>
);

export default CirclesDisplay;
