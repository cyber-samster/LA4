import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books }) => {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '15px',
      justifyContent: 'center'
    }}>
      {books.map((b, index) => (
        <BookCard key={index} book={b} />
      ))}
    </div>
  );
};

export default BookList;