import React, { useState } from 'react';

const WEB_LA4_Q2 = () => {

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleAdd = () => {
    setResult(Number(num1) + Number(num2));
  };

  const handleSub = () => {
    setResult(Number(num1) - Number(num2));
  };

  return (
    <div style={{
      border: '2px solid SteelBlue',
      padding: '30px',
      borderRadius: '15px',
      backgroundColor: 'AliceBlue',
      maxWidth: '400px',
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

      <h2>Basic Calculator</h2>

      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
        style={{ margin: '10px', padding: '5px' }}
      />

      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
        style={{ margin: '10px', padding: '5px' }}
      />

      <div>
        <button onClick={handleAdd} style={{ margin: '10px' }}>Add</button>
        <button onClick={handleSub} style={{ margin: '10px' }}>Subtract</button>
      </div>

      <h3>Result: {result}</h3>

    </div>
  );
};

export default WEB_LA4_Q2;