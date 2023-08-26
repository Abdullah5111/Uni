import {useState} from "react"
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

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
        const response = await axios.post('http://127.0.0.1:8000/api/userLogin/', userData);
  
        if (response.status === 200) {
          const userId = response.data.id;
          document.cookie = `user_id=${userId}; path=/`;
          
          navigate('/my-home');
          
          console.log('User logged in successfully');
        } else {
          console.error('Error');
        }
      } catch (error) {
        console.error('User not exists');
      }
    };
  
    return (
      <div>
        <h2>Login</h2>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div>
          <button onClick={handleLoginButtonClick}>Login</button>
        </div>
        <div>
        <Link to="/sign-up">New User? Signup</Link>
        </div>
      </div>
    );
  }
  
  export default Login;
  