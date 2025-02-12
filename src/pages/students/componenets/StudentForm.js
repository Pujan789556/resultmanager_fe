import { useState } from 'react';
import Button from '../../../components/Button';
import '../../../styles/global.css';
import { addStudent } from '../../../api/students';

export default function StudentForm({ onStudentAdded }) {
  const [student, setStudent] = useState({});

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!student.fullName || !student.address || !student.rollNo || !student.semester) {
      return alert('All fields are required');
    }
    const newStudent = await addStudent(student);
    onStudentAdded(newStudent);
    setStudent({});
  };
  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <label>Full Name:</label>
      <input type="text" name="fullName" onChange={handleChange} required />

      <label>Address:</label>
      <input type="text" name="address" onChange={handleChange} required />

      <label>Roll No:</label>
      <input type="number" name="rollNo" onChange={handleChange} required />

      <label>Semesters:</label>
      <select name="semester" onChange={handleChange}>
        {['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'].map((sem) => (
          <option value={sem}>{sem}</option>
        ))}
      </select>

      <Button type="submit">Submit</Button>
    </form>
  );
}
