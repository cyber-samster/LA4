import React, { useState } from 'react';

const WEB_LA4_Q5 = () => {

  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]); // spread operator
      setTask('');
    }
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

      <h2>Todo List</h2>

      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{ margin: '10px', padding: '5px' }}
      />

      <button onClick={addTask} style={{ margin: '10px' }}>
        Add Task
      </button>

      <ul style={{ textAlign: 'left', marginTop: '20px' }}>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>

    </div>
  );
};

export default WEB_LA4_Q5;