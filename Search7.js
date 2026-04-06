import React, { useState } from 'react';

const Search7 = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="Enter book name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: '6px', margin: '10px' }}
      />
      <button onClick={() => onSearch(query)}>Search</button>
    </div>
  );
};

export default Search7;