import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';

export function Dashboard() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<h2>Dashboard Home</h2>}></Route>
      </Routes>
    </div>
  );
}
