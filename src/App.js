import React, { useState } from 'react';
import NewStudentForm from './components/NewStudentForm';
import StudentCollection from './components/StudentCollection';
import './App.css';

const students = [
  {
    id: 1,
    fullName: "Ada Lovelace",
    email: "ada@lovelace.uk",
    present: true,
  },
  {
    id: 2,
    fullName: "Katherine Johnson",
    email: "kat@nasa.gov",
    present: false,
  },
];

function App () {
  console.log('rendering');
  const [studentList, setStudentList] = useState(students);

  const updateStudent = (updatedStudent) => {
    const students = [];

    studentList.forEach((student) => {
      if (student.id === updatedStudent.id) {
        students.push(updatedStudent);
      } else {
        students.push(student);
      }
    });

    setStudentList(students);
  }
  // callback function to add students to the list
  const addStudent = (student) => {
    // Duplicate Student List
    const newStudentList = [...students];

    // Find the max id and add one
    const nextId = Math.max(...newStudentList.map((student) => student.id)) + 1;
    newStudentList.push({
      id: nextId,
      fullName: student.fullName,
      email: student.email,
      present: false,
    });
    setStudentList(newStudentList); //update the state of studentList 
  }

  return (
    <div className="App">
      <StudentCollection students={studentList} onUpdateStudent={updateStudent} />
      <NewStudentForm onSubmitCallBack={ addStudent } />
    </div>
  );
}

export default App;
