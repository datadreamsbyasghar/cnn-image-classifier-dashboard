import React from 'react';

function Docs() {
  const containerStyle = {
    padding: '40px',
    maxWidth: '900px',
    margin: '0 auto',
    color: '#333',
    lineHeight: '1.6'
  };

  const titleStyle = {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#1c1c1c'
  };

  const sectionStyle = {
    marginBottom: '30px'
  };

  const listStyle = {
    paddingLeft: '20px'
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Documentation</h2>

      <div style={sectionStyle}>
        <h4>  What is a Convolutional Neural Network?</h4>
        <p>
          A <strong>Convolutional Neural Network (CNN)</strong> is a deep learning model designed to process visual data. It uses convolutional layers to detect patterns like edges, textures, and shapes, making it ideal for image classification tasks.
        </p>
      </div>

      <div style={sectionStyle}>
        <h4>  Model Inputs</h4>
        <ul style={listStyle}>
          <li><strong>Image</strong>: RGB image (32×32 pixels)</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h4>How Prediction Works</h4>
        <p>
          The CNN processes the image through multiple layers and outputs a predicted class label:
        </p>
        <ul style={listStyle}>
          <li><strong>airplane</strong>, <strong>automobile</strong>, <strong>bird</strong>, <strong>cat</strong>, <strong>deer</strong>, <strong>dog</strong>, <strong>frog</strong>, <strong>horse</strong>, <strong>ship</strong>, <strong>truck</strong></li>
        </ul>
        <p>
          These predictions help users understand what the model sees in the image and can be used for educational, commercial, or research purposes.
        </p>
      </div>

      <div style={sectionStyle}>
        <h4>  Tech Stack</h4>
        <p>
          <strong>Frontend</strong>: React · Bootstrap<br />
          <strong>Backend</strong>: FastAPI · PyTorch · CNN Model<br />
          <strong>Deployment</strong>: Localhost (demo) · Future-ready for cloud
        </p>
      </div>

      <div style={{ textAlign: 'center', fontSize: '0.9rem', color: '#888' }}>
        Last updated: November 2025 · CNN Model v2.0
      </div>
    </div>
  );
}

export default Docs;