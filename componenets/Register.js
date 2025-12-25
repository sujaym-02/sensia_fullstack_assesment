import React, { useState } from 'react';
import api from '../services/api';

function Register() {
  const [form, setForm] = useState({ username: '', email: '', password: '', roleName: 'User' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await api.post('/users/register', form);
      alert(res.data.message);
    } catch (err) {
       if (err.response && err.response.data) {
    alert(err.response.data.message);
  } else {
    alert('Server not responding or network error');
  }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" placeholder="Username" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <select name="roleName" onChange={handleChange}>
        <option>User</option>
        <option>Admin</option>
        <option>Editor</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
