import {useState} from "react"
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, Link } from 'react-router-dom';
import './Style.css'

function Login() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };

    const handleLoginButtonClick = async () => {
      const userData = {
        username: username,
        password: password,
      };

      try {
        // Calling Login Api
        const response = await axios.post('http://127.0.0.1:8000/api/userLogin/', userData);
  
        if (response.status === 200) {
          const userId = response.data.id;
          document.cookie = `user_id=${userId}; path=/`;
          
          navigate('/my-home');

        } else {
          console.error('Error');
        }
      } catch (error) {
        console.error('User not exists');
      }
    };
  
    return (
      <div className="container-fluid d-flex flex-column align-items-center text-dark">
        <h2 className="m-3 custom-width-div custom-heading">Login</h2>
        <div className="m-1 d-flex flex-column align-items-center custom-width-div custom-border">
          <label className="m-1 custom-font">Email</label>
          <input className="form-control custom-width" type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div className="m-1 d-flex flex-column align-items-center custom-width-div custom-border">
          <label className="m-1 custom-font">Password</label>
          <input className="form-control custom-width" type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div>
          <button className="m-1 btn btn-primary custom-width-div" onClick={handleLoginButtonClick}>Login</button>
        </div>
        <div className="m-3 d-flex flex-column align-items-center custom-width-div custom-border">
          <label className="m-1 custom-font">New User?</label>
          <Link className="btn btn-outline-primary custom-width" to="/sign-up">Signup</Link>
        </div>
      </div>
    );
  }
  
  export default Login;
  