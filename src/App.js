import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import { authContext, AuthProvider } from './context/auth';
import { useContext } from 'react';
import { Dashboard } from './pages/Dashboard';
import Navbar from './components/Navbar';
import { Students } from './pages/students/Students';

function ProtectedRoutes({ children }) {
  const { user } = useContext(authContext);
  return user ? <>{children}</> : <Navigate to="/login" />;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/*"
        element={
          <ProtectedRoutes>
            <Navbar />
            <Routes>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="students" element={<Students />} />
            </Routes>
          </ProtectedRoutes>
        }
      />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
