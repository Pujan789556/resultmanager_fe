import { Link } from 'react-router-dom';
import Button from './Button';
import { authContext } from '../context/auth';
import { useContext } from 'react';

const Navbar = () => {
  const { logoutUser } = useContext(authContext);
  return (
    <nav>
      <Link to="/">Dashboard</Link>
      <Link to="/students">Students</Link>
      <Link to="/subjects">Subjects</Link>
      <Link to="/exams">Exams</Link>
      <Link to="/results">Results</Link>
      <Button onClick={logoutUser}>Logout</Button>
    </nav>
  );
};

export default Navbar;
