import Button from '../components/Button';
import '../styles/global.css';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { login } from '../api/auth';
import { authContext } from '../context/auth';

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { loginUser } = useContext(authContext);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!loginData.email || !loginData.password) {
      return alert('All fields are required');
    }
    const data = await login(loginData);
    if (data) loginUser(data.data);
  };

  return (
    <div className="authContainer">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="authContainer">
        <input name="email" type="email" placeholder="Email Address" onChange={handleInputChange} />
        <input name="password" type="password" placeholder="Password" onChange={handleInputChange} />
        <Button type="submit">Login</Button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
};

export default Login;
