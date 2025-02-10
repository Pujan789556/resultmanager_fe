import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import "./styles/global.css";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
return (
<AuthProvider>
<Router>
<AppRoutes />
</Router>
</AuthProvider>
);
}

function AppRoutes() {
const { user } = useAuth();
return (
<Routes>
<Route path="/signup" element={<SignUp />} />
<Route path="/login" element={<Login />} />
<Route
path="/"
element={
<ProtectedRoute>
<Dashboard />
</ProtectedRoute>
}
/>
</Routes>
);
}

export default App;

// components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
const { user } = useAuth();
return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;

// components/Button.js
import React from "react";
import "../styles/global.css";

const Button = ({ children, onClick }) => {
return (
<button className="btn" onClick={onClick}>
{children}
</button>
);
};

export default Button;

// components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Button from "./Button";

const Navbar = () => {
const { logout } = useAuth();

return (
<nav className="navbar">
<Link to="/">Dashboard</Link>
<Link to="/profile">Profile</Link>
<Button onClick={logout}>Logout</Button>
</nav>
);
};

export default Navbar;

// pages/Dashboard.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";

const Dashboard = () => {
return (
<div>
<Navbar />
<Routes>
<Route path="/" element={<h2>Dashboard Home</h2>} />
<Route path="/profile" element={<h2>Profile Page</h2>} />
</Routes>
</div>
);
};

export default Dashboard;

// pages/Login.js
import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import "../styles/global.css";

const Login = () => {
return (
<div className="auth-container">
<h2>Login</h2>
<input type="email" placeholder="Email" />
<input type="password" placeholder="Password" />
<Button>Login</Button>
<p>
Don't have an account? <Link to="/signup">Sign up</Link>
</p>
</div>
);
};

export default Login;

// pages/SignUp.js
import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import "../styles/global.css";

const SignUp = () => {
return (
<div className="auth-container">
<h2>Sign Up</h2>
<input type="text" placeholder="Name" />
<input type="email" placeholder="Email" />
<input type="password" placeholder="Password" />
<Button>Sign Up</Button>
<p>
Already have an account? <Link to="/login">Login</Link>
</p>
</div>
);
};

export default SignUp;

// styles/global.css
body {
font-family: Arial, sans-serif;
}

.auth-container {
display: flex;
flex-direction: column;
align-items: center;
max-width: 300px;
margin: auto;
gap: 10px;
}

.navbar {
display: flex;
justify-content: space-around;
padding: 10px;
background-color: #007bff;
color: white;
}

.navbar a {
color: white;
text-decoration: none;
font-weight: bold;
}

input {
padding: 10px;
width: 100%;
border: 1px solid #ccc;
border-radius: 5px;
}

.btn {
padding: 10px 20px;
background-color: #007bff;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
}

.btn:hover {
background-color: #0056b3;
}
