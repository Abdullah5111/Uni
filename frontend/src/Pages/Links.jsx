import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Links = () => {
  const navigate = useNavigate()

  const { username } = useParams();
  const [links, setLinks] = useState([]);

  const fetchLinks = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/user/links/${username}/`);
      setLinks(response.data);
    } catch (error) {
      console.error(`User ${username} not exists`, error);
      navigate('/');
    }
  };

  useEffect(() => {
    fetchLinks();
  }, [username]);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        toast.success('Link copied to clipboard!', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1600,
        });
        console.log(`Copied: ${text}`);
      })
      .catch((error) => {
        console.error('Error copying to clipboard:', error);
      });
  };

  return (
    <div className="container-fluid d-flex flex-column align-items-center text-dark">
      <h2 className="m-3 custom-width-div custom-heading">Links of {username}</h2>
      <div className='custom-grid'>
      {Object.keys(links).map(property => (
        property !== 'id' && property !== 'user' && links[property] !== null && links[property] !== '' && (
          <div className="m-1 d-flex flex-column align-items-center" key={property}>
            <label className="m-1 custom-font">{property}:</label>
            <input
              className="form-control custom-width" 
              type="text"
              value={links[property]}
              readOnly
            />
            <button className="m-1 btn btn-outline-primary custom-width" onClick={() => copyToClipboard(links[property])}>Copy</button>
          </div>
        )
      ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Links;
