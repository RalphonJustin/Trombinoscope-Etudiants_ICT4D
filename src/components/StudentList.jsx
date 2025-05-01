import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';
import StudentCard from './StudentCard';

function StudentList() {
  const { students, searchQuery } = useContext(StudentContext);

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="student-list">
      {filteredStudents.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
}

export default StudentList;