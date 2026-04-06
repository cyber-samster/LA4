import React, { useState } from 'react';

const WEB_LA4_Q3 = () => {

  const images = [
    "https://picsum.photos/id/1015/300/200",
    "https://picsum.photos/id/1016/300/200",
    "https://picsum.photos/id/1018/300/200",
    "https://picsum.photos/id/1020/300/200"
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div style={{
      border: '2px solid SteelBlue',
      padding: '30px',
      borderRadius: '15px',
      backgroundColor: 'AliceBlue',
      maxWidth: '600px',
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

      <h2>Image Gallery</h2>

      {/* Large Preview */}
      <img 
        src={selectedImage} 
        alt="Preview" 
        style={{
          width: '100%',
          height: '300px',
          marginBottom: '15px',
          borderRadius: '10px',
          transition: '0.3s'
        }}
      />

      {/* Thumbnails */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '10px'
      }}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Thumbnail"
            onClick={() => setSelectedImage(img)}
            style={{
              width: '80px',
              height: '60px',
              cursor: 'pointer',
              borderRadius: '5px',
              transition: 'transform 0.3s'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          />
        ))}
      </div>

    </div>
  );
};

export default WEB_LA4_Q3;