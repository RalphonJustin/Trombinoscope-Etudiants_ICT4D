import React, { useContext, useState } from 'react';
import { StudentContext } from '../context/StudentContext';

function AdminPanel() {
  const { students, setStudents } = useContext(StudentContext);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    promo: '',
    photo: '',
    customLink: '' // Nouveau champ pour le lien personnalisé
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'photo' && files.length > 0) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm((prev) => ({ ...prev, photo: reader.result }));
      };
      reader.readAsDataURL(files[0]);
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name) return;
    const newStudent = { ...form, id: Date.now() }; // Ajout d'un ID unique
    setStudents([...students, newStudent]);
    setForm({ name: '', email: '', phone: '', promo: '', photo: '', customLink: '' });
  };

  const handleDelete = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="admin-panel">
      <h2>Ajouter un étudiant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nom" value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input type="text" name="phone" placeholder="Téléphone" value={form.phone} onChange={handleChange} />
        <input type="text" name="promo" placeholder="Promo" value={form.promo} onChange={handleChange} />
        <input type="text" name="customLink" placeholder="Lien personnalisé" value={form.customLink} onChange={handleChange} />
        <input type="file" name="photo" accept="image/*" onChange={handleChange} />
        <button type="submit">Ajouter</button>
      </form>

      <h2>Liste des étudiants</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} <button onClick={() => handleDelete(student.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPanel;