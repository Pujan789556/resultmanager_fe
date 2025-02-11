import React, { useState, useEffect, useContext } from 'react';
import { DataTable } from '../../components/DataTable';
import { getStudents } from '../../api/students';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import StudentForm from './componenets/StudentForm';
import { authContext } from '../../context/auth';

export const Students = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const { logoutUser } = useContext(authContext);
  useEffect(() => {
    fetchStudents();
  }, []);

  const handleStudentAdded = (newStudent) => {
    setStudents((prev) => [...prev, newStudent]);
    setModalOpen(false);
  };

  const fetchStudents = async () => {
    try {
      const data = await getStudents();
      setStudents(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.status === 401) {
        logoutUser();
      }
    }
  };

  const columns = [
    { name: 'Full Name', selector: 'fullName' },
    { name: 'Roll No', selector: 'rollNo' },
    { name: 'Address', selector: 'address' },
    { name: 'Semester', selector: 'semester' },
  ];

  return (
    <div>
      <h1>Students</h1>
      <Button onClick={() => setModalOpen(true)}>Add Student</Button>
      {loading ? <p>Loading...</p> : <DataTable columns={columns} data={students} />}
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title="Add New Student">
        <StudentForm onStudentAdded={handleStudentAdded} />
      </Modal>
    </div>
  );
};
