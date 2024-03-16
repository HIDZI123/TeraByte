/* import React from 'react' */
import {useState} from 'react';

const Upload = () => {
  const [imageUrl, setImageUrl] = useState('');
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImageUrl(imageUrl);
  };


  return (
    <>
    <div id="main" className="main">
      <div id="box">
        <h1>UPLOAD YOUR IMAGE</h1>
        <input
        type="file"
        id="input-file"
        onChange={handleFileChange}
      />
      {imageUrl && (
        <img
          id="upload-pic"
          src={imageUrl}
          alt="Uploaded pic"
          style={{ maxWidth: '100%' }}
        />
      )}
      <div className='buttons'>
      <label htmlFor="input-file">Upload</label>
      <button className='edit'>Edit</button>
      </div>
      </div>

    </div>
    </>

  )
}

export default Upload