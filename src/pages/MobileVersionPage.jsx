import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import './MobileVersionPage.css';

function MobileVersionPage() {
  const [serverUrl, setServerUrl] = useState('');

  useEffect(() => {
    // Détecte automatiquement l'URL du serveur
    const url = window.location.origin;
    setServerUrl(url);
  }, []);

  return (
    <div className="mobile-version-container">
      <h1>Version Mobile</h1>
      <p>Scannez le code QR ci-dessous pour accéder à l'application sur votre mobile :</p>
      {serverUrl && <QRCode value={serverUrl} size={250} />}
      <p className="server-url">
        Ou cliquez sur le lien suivant :{' '}
        <a href={serverUrl} target="_blank" rel="noopener noreferrer">
          {serverUrl}
        </a>
      </p>
    </div>
  );
}

export default MobileVersionPage;