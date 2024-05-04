// Gallery.js
import React from 'react';
import GalleryData from './galleryData';
import './gallery.css'; // Import your CSS file for styling

const Gallery = () => {
  return (
    <>
    <h2 className='centered-text' style={{ textAlign: "center", margin: "2%" }}>Gallery</h2>
    <div className="gallery-container">
      {GalleryData.map((image) => (
        <div key={image.id} className="gallery-item">
          <img
            src={image.url}
            alt={image.caption}
            className="gallery-image"
            style={{ width: '200px', height: '150px' }} />
          <p>{image.caption}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default Gallery;
