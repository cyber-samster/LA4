import React, { useState } from 'react';

const WEB_LA4_Q4 = () => {

  const [m1, setM1] = useState('');
  const [m2, setM2] = useState('');
  const [m3, setM3] = useState('');
  const [result, setResult] = useState('');

  const calculateGrade = () => {
    const avg = (Number(m1) + Number(m2) + Number(m3)) / 3;
    let grade = '';

    if (avg >= 90) {
      grade = 'A';
    } else if (avg >= 75) {
      grade = 'B';
    } else if (avg >= 60) {
      grade = 'C';
    } else if (avg >= 50) {
      grade = 'D';
    } else {
      grade = 'F';
    }

    setResult(`Average: ${avg.toFixed(2)} | Grade: ${grade}`);
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

      <h2>Grade Calculator</h2>

      <input
        type="number"
        placeholder="Enter Marks 1"
        value={m1}
        onChange={(e) => setM1(e.target.value)}
        style={{ margin: '10px', padding: '5px' }}
      />

      <input
        type="number"
        placeholder="Enter Marks 2"
        value={m2}
        onChange={(e) => setM2(e.target.value)}
        style={{ margin: '10px', padding: '5px' }}
      />

      <input
        type="number"
        placeholder="Enter Marks 3"
        value={m3}
        onChange={(e) => setM3(e.target.value)}
        style={{ margin: '10px', padding: '5px' }}
      />

      <div>
        <button onClick={calculateGrade} style={{ margin: '10px' }}>
          Calculate Grade
        </button>
      </div>

      <h3>{result}</h3>

    </div>
  );
};

export default WEB_LA4_Q4;