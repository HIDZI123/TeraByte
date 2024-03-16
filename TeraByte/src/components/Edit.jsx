import React, { useState } from 'react';
import Jimp from 'jimp';
import path from 'path';

const Edit = () => {
  const [editedImagePath, setEditedImagePath] = useState(null);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const image = await Jimp.read(file);
        const outputPath = path.join(__dirname, 'editedimage.jpg');
        await image.contrast(-0.5).writeAsync(outputPath);
        setEditedImagePath(outputPath);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="change-brightness-component">
      <input
        type="file"
        onChange={handleFileChange}
        accept="image/png, image/jpeg" // restricts file selection to only image files
      />
      {editedImagePath && (
        <div className="edited-image-preview">
          <p>Edited Image Path: {editedImagePath}</p>
          <img src={editedImagePath} alt="Edited Image" />
        </div>
      )}
    </div>
  );
};

export default Edit;
