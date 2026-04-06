import React from 'react';

const BookCard = ({ book }) => {
  return (
    <div style={{
      border: '1px solid gray',
      padding: '10px',
      borderRadius: '10px',
      width: '180px',
      textAlign: 'center'
    }}>
      {book.image && (
        <img src={book.image} alt="book" style={{ width: '100px' }} />
      )}
      <h4>{book.title}</h4>
      <p>Author: {book.author}</p>
      <p>Publisher: {book.publisher}</p>
      <p>Year: {book.year}</p>
    </div>
  );
};

export default BookCard;