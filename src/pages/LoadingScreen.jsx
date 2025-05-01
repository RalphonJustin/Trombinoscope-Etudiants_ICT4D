import React from 'react';
import './LoadingScreen.css';

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="spinner"></div>
      <h1 className="loading-text">Chargement...</h1>
    </div>
  );
}

export default LoadingScreen;