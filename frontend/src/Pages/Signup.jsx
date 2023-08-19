import React, {useState} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

function Signup({ onToggleClick }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };

    const handleSignupButtonClick = async () => {
      const userData = {
        username: username,
        email: email,
        password: password,
      };

      try {
        const response = await axios.post('http://127.0.0.1:8000/api/users/', userData);
  
        if (response.status === 201) {
          console.log('User registered successfully');
        } else {
          console.error('Error registering user');
        }
      } catch (error) {
        console.error('API call error:', error);
      }
    };
  
    return (
      <div>
        <h2>Signup Form</h2>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div>
          <button onClick={handleSignupButtonClick}>Signup</button>
        </div>
        <div>
          <Link to="/">Already Account? Login</Link>
        </div>
      </div>
    );
  }
  
  export default Signup;
  