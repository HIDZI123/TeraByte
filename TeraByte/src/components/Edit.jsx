/* eslint-disable react/prop-types */

// import React from 'react';

const Edit = ({ location }) => {
  // Extract the image URL from the state passed via Link
  const imageUrl = location.state.imageUrl;

  return (
    <div className="box">
      <h1>Edit Image</h1>
      {imageUrl && <img src={imageUrl} alt="Uploaded pic" />}
    </div>
  );
};

export default Edit;


