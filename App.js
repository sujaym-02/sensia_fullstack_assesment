import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './componenets/Register';
import Login from './componenets/Login';
import Dashboard from './componenets/Dashboard';
import AdminDashboard from './componenets/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
