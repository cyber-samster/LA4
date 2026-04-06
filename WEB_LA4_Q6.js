import React, { useState } from 'react';
import Header from './Header';
import Search from './Search';
import Dashboard from './Dashboard';
import { getWeather } from './weatherApi';

const WEB_LA4_Q6 = () => {

  const [weather, setWeather] = useState(null);

  const handleSearch = async (city) => {
    const data = await getWeather(city);
    setWeather(data);
  };

  return (
    <div style={{
      border: '2px solid SteelBlue',
      padding: '30px',
      borderRadius: '15px',
      backgroundColor: 'AliceBlue',
      maxWidth: '500px',
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

      <Header />
      <Search onSearch={handleSearch} />
      <Dashboard weather={weather} />

    </div>
  );
};

export default WEB_LA4_Q6;