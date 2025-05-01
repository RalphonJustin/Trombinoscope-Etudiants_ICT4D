import React from 'react';
import { StudentProvider } from '../context/StudentContext.jsx';
import StudentList from '../components/StudentList';
import SearchBar from '../components/SearchBar';
import '../App.css';

function StudentsPage() {
  return (
    <StudentProvider>
      <div className="app-container">
        <h1>Trombinoscope Étudiant</h1>
        <SearchBar />
        <StudentList />
      </div>
    </StudentProvider>
  );
}

export default StudentsPage;