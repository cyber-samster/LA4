import React from 'react';

const CountryCard = ({ country }) => {
  return (
    <div style={{
      border: '1px solid gray',
      padding: '10px',
      borderRadius: '10px',
      width: '180px',
      textAlign: 'center'
    }}>
      <img src={country.flag} alt="flag" style={{ width: '100px' }} />
      <h4>{country.name}</h4>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
    </div>
  );
};

export default CountryCard;