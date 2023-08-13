import React, {useState} from "react"
import axios from 'axios';

function Login({ onToggleClick }) {
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
          console.log('User logged in successfully');
        } else {
          console.error('Error');
        }
      } catch (error) {
        console.error('API call error:', error);
      }
    };
  
    return (
      <div>
        <h2>Login Form</h2>
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
          <button onClick={onToggleClick}>New User? Signup</button>
        </div>
      </div>
    );
  }
  
  export default Login;
  