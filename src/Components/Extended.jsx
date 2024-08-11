import React from 'react';
import Record from './../Record.json'; // Import the JSON data

const Extended = () => {
  return (
    <>
    <h1 className='text-center fw-bold mt-3 mb-5 '> Gallery</h1>
      <div className="d-flex justify-content-center">
        <div className="row">
          {Record.pictures.map((picture, index) => (
            <div key={index} className="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <img
                src={picture.imageUrl}
                className="w-100 shadow-1-strong rounded mb-4"
                alt={picture.caption}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Extended;
