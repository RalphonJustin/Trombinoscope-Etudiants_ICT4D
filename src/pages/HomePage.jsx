import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <div className="logo-container">
        <img src="/pwa-192x192.png" alt="Logo Trombinoscope" className="app-logo" />
      </div>
      <h1 className="animated-text">Bienvenue sur le Trombinoscope des Étudiants de ICT4D</h1>
      <p className="description-text">Explorez les fonctionnalités de l'application Tromni-ICT4D :</p>
      <div className="button-group">
        <button onClick={() => navigate('/admin')} className="homepage-button">
          Admin
        </button>
        <button onClick={() => navigate('/students')} className="homepage-button">
          Étudiants
        </button>
        <button onClick={() => navigate('/mobile')} className="homepage-button">
          Version Mobile
        </button>
      </div>
    </div>
  );
}

export default HomePage;