import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useParams
import axios from 'axios';

const Links = () => {
  const navigate = useNavigate()

  const { username } = useParams();
  const [links, setLinks] = useState(null);

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

  return (
    <div>
      {links && (
        <ul>
          <li>LinkedIn: {links.linkedin}</li>
          <li>Facebook: {links.facebook}</li>
          <li>Instagram: {links.instagram}</li>
        </ul>
      )}
    </div>
  );
};

export default Links;
