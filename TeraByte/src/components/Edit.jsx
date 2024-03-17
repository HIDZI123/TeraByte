import React, { useState } from 'react';
import "../styles/Edit.scss"; // Import SCSS file for styling

const EditComponent = () => {
  const [brightness, setBrightness] = useState(100);
  const [saturation, setSaturation] = useState(100);
  const [inversion, setInversion] = useState(0);
  const [grayscale, setGrayscale] = useState(0);
  const [rotate, setRotate] = useState(0);
  const [flipHorizontal, setFlipHorizontal] = useState(1);
  const [flipVertical, setFlipVertical] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState('brightness');
  const [file, setFile] = useState(null);

  const handleLoadImage = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    setFile(URL.createObjectURL(file));
    resetFilter();
  };

  const applyFilter = () => {
    return {
      transform: `rotate(${rotate}deg) scale(${flipHorizontal}, ${flipVertical})`,
      filter: `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`
    };
  };

  const handleFilterClick = (option) => {
    setSelectedFilter(option);
    switch (option) {
      case 'brightness':
        setBrightness(brightness);
        break;
      case 'saturation':
        setSaturation(saturation);
        break;
      case 'inversion':
        setInversion(inversion);
        break;
      case 'grayscale':
        setGrayscale(grayscale);
        break;
      default:
        break;
    }
  };

  const updateFilter = (value) => {
    switch (selectedFilter) {
      case 'brightness':
        setBrightness(value);
        break;
      case 'saturation':
        setSaturation(value);
        break;
      case 'inversion':
        setInversion(value);
        break;
      case 'grayscale':
        setGrayscale(value);
        break;
      default:
        break;
    }
  };

  const resetFilter = () => {
    setBrightness(100);
    setSaturation(100);
    setInversion(0);
    setGrayscale(0);
    setRotate(0);
    setFlipHorizontal(1);
    setFlipVertical(1);
    handleFilterClick('brightness');
  };

  const saveImage = () => {
    // Your logic to save the image
  };

  return (
    <div className="container">
      <h2>Easy Image Editor</h2>
      <div className="wrapper">
        <div className="editor-panel">
          <div className="filter">
            <label className="title">Filters</label>
            <div className="options">
              <button className={selectedFilter === 'brightness' ? 'active' : ''} onClick={() => handleFilterClick('brightness')}>Brightness</button>
              <button className={selectedFilter === 'saturation' ? 'active' : ''} onClick={() => handleFilterClick('saturation')}>Saturation</button>
              <button className={selectedFilter === 'inversion' ? 'active' : ''} onClick={() => handleFilterClick('inversion')}>Inversion</button>
              <button className={selectedFilter === 'grayscale' ? 'active' : ''} onClick={() => handleFilterClick('grayscale')}>Grayscale</button>
            </div>
            <div className="slider">
              <div className="filter-info">
                <p className="name">Brightness</p>
                <p className="value">{brightness}%</p>
              </div>
              <input type="range" value={brightness} min="0" max="200" onChange={(e) => updateFilter(e.target.value)} />
            </div>
          </div>
          {/* Rotate and Flip controls */}
        </div>
        <div className="preview-img">
          <img src={file ? file : "image-placeholder.svg"} alt="preview-img" style={applyFilter()} />
        </div>
      </div>
      <div className="controls">
        <button className="reset-filter" onClick={resetFilter}>Reset Filters</button>
        <div className="row">
          <input type="file" className="file-input" accept="image/*" hidden onChange={handleLoadImage} />
          <button className="choose-img" onClick={() => document.querySelector(".file-input").click()}>Choose Image</button>
          <button className="save-img" onClick={saveImage}>Save Image</button>
        </div>
      </div>
    </div>
  );
};

export default EditComponent;
