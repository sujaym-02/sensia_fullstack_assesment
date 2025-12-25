import React, { useEffect, useState } from 'react';
import api from '../services/api';

function Dashboard() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    api.get('/users/protected')
      .then(res => setMessage(res.data.message))
      .catch(err => setMessage(err.response.data.message));
  }, []);

  return <div>{message}</div>;
}

export default Dashboard;
