import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const MyHome = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [updatedData, setUpdatedData] = useState({});

  useEffect(() => {
    // Extracting UserId from Cookie
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
      // Getting Links of Logged in User
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
    axios.put(`http://127.0.0.1:8000/api/links/${data.id}`, updatedData)

    toast.success('Changes Saved!', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1600,
    });
  }

  const handleInputChange = (property, value) => {
    setUpdatedData(prevData => ({
      ...prevData,
      [property]: value,
    }));
  };

  return (
    <div className="container-fluid d-flex flex-column align-items-center text-dark">
      <h2 className="m-3 custom-width-div custom-heading">My Links</h2>
      <div className='custom-grid'>
      {Object.keys(data).map(property => (
      property !== 'id' && property !== 'user' && (
        <div className="m-1 d-flex flex-column align-items-center" key={property}>
          <label className="m-1 custom-font">{property}:</label>
          <input
            className="form-control custom-width" 
            type="text"
            defaultValue={data[property]}
            onChange={e => handleInputChange(property, e.target.value)}
          />
        </div>
      )
    ))}

    </div>
      <div>
        <button className="m-1 btn btn-outline-primary custom-width" onClick={saveChanges}>Save</button>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default MyHome;
