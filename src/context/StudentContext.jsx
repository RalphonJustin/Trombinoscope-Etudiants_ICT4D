import React, { useState, useEffect } from 'react';
import { loadStudents, saveStudents } from '../utils/localStorageUtils';
import { StudentContext } from './StudentContext';

export function StudentProvider({ children }) {
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const savedStudents = loadStudents();
    if (savedStudents) {
      setStudents(savedStudents);
    }
  }, []);

  useEffect(() => {
    saveStudents(students);
  }, [students]);

  return (
    <StudentContext.Provider value={{ students, setStudents, searchQuery, setSearchQuery }}>
      {children}
    </StudentContext.Provider>
  );
}