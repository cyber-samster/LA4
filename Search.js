import React, { useState } from 'react';

const Search = ({ onSearch }) => {

  const [city, setCity] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: '5px', margin: '10px' }}
      />

      <button onClick={() => onSearch(city)}>
        Search
      </button>
    </div>
  );
};

export default Search;