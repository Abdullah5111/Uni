import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyHome = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const cookies = document.cookie.split(';');
    let userId = null;
    for (const cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
      if (name === 'user_id') {
        userId = value;
        break;
      }
    }

    axios.get(`http://127.0.0.1:8000/api/links/${userId}`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
    </div>
  );
}

export default MyHome;
