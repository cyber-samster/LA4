import React from 'react';

const WEB_LA4_Q1 = (props) => {
  return (
    <div style={{  
      border: '2px solid SteelBlue',  
      padding: '30px',  
      borderRadius: '15px',  
      backgroundColor: 'AliceBlue',
      maxWidth: '500px',
      margin: '40px auto',
      fontFamily: 'Arial',
      textAlign: 'center'
    }}>

      {/* Student Identification */}
      <div style={{ 
        borderBottom: '1px solid Silver', 
        marginBottom: '15px', 
        paddingBottom: '10px' 
      }}>
        <h3 style={{ margin: '0', color: 'DimGray' }}>Student Details:</h3>
        <p style={{ margin: '5px 0', fontWeight: 'bold' }}>
          Name: SAMARTH BHATNAGAR
        </p>
        <p style={{ margin: '5px 0', fontWeight: 'bold' }}>
          Reg No: 24BCI0082
        </p>
      </div>

      {/* Greeting Logic */}
      <h1 style={{ color: 'RoyalBlue' }}>
        Welcome, {props.name}!
      </h1>

      <p style={{ fontSize: '1.1rem' }}>
        Greetings to everyone in <strong>{props.city}</strong>.
      </p>

      <p style={{ color: 'Gray', fontStyle: 'italic' }}>
        This React application demonstrates the use of functional components, props,
        JSX syntax, and inline styling to display dynamic data.
      </p>

    </div>
  );
};

export default WEB_LA4_Q1;