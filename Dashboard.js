import React from 'react';

const Dashboard = ({ weather }) => {

  if (!weather) return <p>No Data</p>;

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>{weather.city}</h2>
      <p>Temperature: {weather.temp} °C</p>
      <p>Weather: {weather.desc}</p>
      <p>Humidity: {weather.humidity}%</p>
      <p>Wind Speed: {weather.wind} m/s</p>
    </div>
  );
};

export default Dashboard;