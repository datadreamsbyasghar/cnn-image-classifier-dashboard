// CNNForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

function CNNForm() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    setPreview(URL.createObjectURL(file));
    setResult(null);
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedImage) {
      setError('Please select an image first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedImage);

    try {
      const response = await axios.post('http://localhost:8000/predict-image', formData);
      setResult(response.data.prediction);
    } catch (err) {
      setError('Prediction failed. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-header bg-secondary text-white">
          <h5 className="mb-0">CNN Image Classifier</h5>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Upload Image (32×32 RGB)</label>
              <input type="file" accept="image/*" onChange={handleImageChange} className="form-control" />
            </div>
            {preview && (
              <div className="mb-3 text-center">
                <img src={preview} alt="Preview" style={{ maxWidth: '150px', borderRadius: '8px' }} />
              </div>
            )}
            <button type="submit" className="btn btn-primary w-100">
              <i className="fa fa-image me-2"></i> Predict
            </button>
          </form>

          {result && (
            <div className="alert alert-success mt-4 text-center">
              <strong>Prediction:</strong> {result}
              <p className="text-muted mt-2">This image was classified using your trained CNN model.</p>
            </div>
          )}

          {error && (
            <div className="alert alert-danger mt-4 text-center">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CNNForm;