import React from 'react';

function About() {
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
      <h2 style={titleStyle}>About This App</h2>

      <div style={sectionStyle}>
        <p>
          The <strong>CNN Image Classifier Dashboard</strong> is a full-stack machine learning application built to classify images using a Convolutional Neural Network (CNN). It’s trained on the CIFAR-10 dataset and can identify objects like cats, trucks, airplanes, and more — all in real time.
        </p>
        <p>
          This dashboard is part of a broader ML journey by <strong>Ali Asghar</strong>, integrating FastAPI, React, and PyTorch into a scalable, client-ready product. It showcases how deep learning can be deployed for intuitive, visual predictions — bridging backend intelligence with frontend clarity.
        </p>
      </div>

      <div style={sectionStyle}>
        <p>This app is ideal for:</p>
        <ul style={listStyle}>
          <li>Image-based screening tools</li>
          <li>Educational demos for ML learners</li>
          <li>Client-facing ML prototypes</li>
          <li>Portfolio projects showcasing real-time prediction</li>
          <li>Interactive dashboards for visual classification</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <p>
          Built with modular architecture, this app supports future expansion — including multi-model integration, mobile responsiveness, and cloud deployment. It’s designed to be both technically robust and visually polished, making it a perfect showcase for real-world ML impact.
        </p>
      </div>

      <div style={{ textAlign: 'center', fontSize: '0.9rem', color: '#888' }}>
        Version 2.0 · Powered by FastAPI + React + PyTorch · © 2025 Ali Asghar
      </div>
    </div>
  );
}

export default About;