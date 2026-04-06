import React, { useState } from 'react';
import Header7 from './Header7';
import Search7 from './Search7';
import BookList from './BookList';
import { searchBooks } from './bookApi';

const WEB_LA4_Q7 = () => {

  const [books, setBooks] = useState([]);

  const handleSearch = async (query) => {
    const result = await searchBooks(query);
    setBooks(result);
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

      <Header7 />
      <Search7 onSearch={handleSearch} />
      <BookList books={books} />

    </div>
  );
};

export default WEB_LA4_Q7;