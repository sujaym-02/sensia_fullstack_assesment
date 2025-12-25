import React, { useEffect, useState } from 'react';
import api from '../services/api';

function AdminDashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get('/admin/users')
      .then(res => setUsers(res.data))
      .catch(err => console.error(err.response.data));
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      {users.map(u => (
        <div key={u.id}>{u.username} - {u.Role?.name}</div>
      ))}
    </div>
  );
}

export default AdminDashboard;
