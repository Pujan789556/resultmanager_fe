import { useState } from 'react';
import Button from '../components/Button';
import '../styles/global.css';
import { Link, useNavigate } from 'react-router-dom';
import { signUp } from '../api/auth';

const SignUp = () => {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  
  const onSignUp = async (event) => {
    event.preventDefault();
    if (!userData.name || !userData.email || !userData.password) {
      return alert('All fields are required');
    }
    const data = await signUp(userData);
    if (data) navigate('/login');
  };

  const onInputChange = (event) => {
    const fieldName = event.target.name;
    setUserData({ ...userData, [fieldName]: event.target.value });
  };

  return (
    <div className="authContainer">
      <h1>Sign Up</h1>
      <form onSubmit={onSignUp} className="authContainer">
        <input name="name" type="text" placeholder="Name" onChange={onInputChange} />
        <input name="email" type="email" placeholder="Email Address" onChange={onInputChange} />
        <input name="password" type="password" placeholder="Password" onChange={onInputChange} />
        <Button type="submit">Sign Up</Button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default SignUp;
