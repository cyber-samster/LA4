import React, { useState } from 'react';
import Header8 from './Header8';
import Search8 from './Search8';
import CountryList from './CountryList';
import { searchCountries } from './countryApi';

const WEB_LA4_Q8 = () => {

  const [countries, setCountries] = useState([]);

  const handleSearch = async (name) => {
    const result = await searchCountries(name);
    setCountries(result);
  };

  return (
    <div style={{
      border: '2px solid SteelBlue',
      padding: '30px',
      borderRadius: '15px',
      backgroundColor: 'AliceBlue',
      maxWidth: '800px',
      margin: '40px auto',
      textAlign: 'center',
      fontFamily: 'Arial'
    }}>

      {/* Student Details */}
      <div style={{
        borderBottom: '1px solid gray',
        marginBottom: '15px',
        paddingBottom: '10px'
      }}>
        <h3>Student Details</h3>
        <p><b>Name:</b> SAMARTH BHATNAGAR</p>
        <p><b>Reg No:</b> 24BCI0082</p>
      </div>

      <Header8 />
      <Search8 onSearch={handleSearch} />
      <CountryList countries={countries} />

    </div>
  );
};

export default WEB_LA4_Q8;