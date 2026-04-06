import React from 'react';
import CountryCard from './CountryCard';

const CountryList = ({ countries }) => {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '15px',
      justifyContent: 'center'
    }}>
      {countries.map((c, index) => (
        <CountryCard key={index} country={c} />
      ))}
    </div>
  );
};

export default CountryList;