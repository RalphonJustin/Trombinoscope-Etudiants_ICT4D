/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function StudentCard({ student }) {
  if (!student) {
    return <div className="student-card">Données de l'étudiant manquantes</div>;
  }

  const targetLink = student.customLink || `/student/${student.id}`; // Utilise le lien personnalisé si disponible

  return (
    <motion.div
      className="student-card"
      style={{ perspective: 1000 }}
      whileHover={{ rotateY: 180 }}
    >
      <Link to={targetLink} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="card-front">
          <img
            src={student.photo || 'default-photo.jpg'}
            alt={student.name || 'Photo de l\'étudiant'}
          />
          <h3>{student.name || 'Nom inconnu'}</h3>
          <p>{student.promo || 'Promotion inconnue'}</p>
        </div>
        <div className="card-back">
          <p><strong>Email :</strong> {student.email || 'Non renseigné'}</p>
          <p><strong>Téléphone :</strong> {student.phone || 'Non renseigné'}</p>
        </div>
      </Link>
    </motion.div>
  );
}

export default StudentCard;