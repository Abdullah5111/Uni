import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MyHome = () => {
  const navigate = useNavigate();

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

    if (userId) {
      axios.get(`http://127.0.0.1:8000/api/user/links/${userId}`)
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    } else {
      navigate('/');
    }
  }, [navigate]);

  const saveChanges = () =>{

  }

  return (
    <div>
      <div>
      {Object.keys(data).map(property => (
        <div key={property}>
          <label>{property}:</label>
          <input
            type="text"
            value={data[property]}
          />
        </div>
      ))}
    </div>
      <div>
        <button onClick={saveChanges}>Save</button>
      </div>
    </div>
  );
}

export default MyHome;
