import React, { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { StudentContext } from '../context/StudentContext'

function StudentDetail() {
  const { id } = useParams()
  const { students } = useContext(StudentContext)

  const student = students.find(s => s.id.toString() === id)

  if (!student) return <p>Étudiant introuvable</p>

  return (
    <div className="student-detail">
      <Link to="/">← Retour</Link>
      <img src={student.photo} alt={student.name} style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '10px' }} />
      <h2>{student.name}</h2>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Téléphone:</strong> {student.phone}</p>
      <p><strong>Promo:</strong> {student.promo}</p>
    </div>
  )
}

export default StudentDetail
