import React, { useState } from 'react';

const Search8 = ({ onSearch }) => {
  const [country, setCountry] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="Enter country name"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        style={{ padding: '5px', margin: '10px' }}
      />
      <button onClick={() => onSearch(country)}>Search</button>
    </div>
  );
};

export default Search8;