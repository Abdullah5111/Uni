import {useState} from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import './Style.css'

function Signup() {
    const navigate = useNavigate();
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
        // Adding New User to Database
        const response = await axios.post('http://127.0.0.1:8000/api/users/', userData);
  
        if (response.status === 201) {
          const userId = response.data.id;
          
          document.cookie = `user_id=${userId}; path=/`;

          // Creating Empty Links for Newly Registered User

          const linksData = {
            user: userId,
            linkedin: null,
            facebook: null,
            instagram: null,
            twitter: null,
            website: null,
            slack: null,
            reddit: null,
            behance: null,
            dribbble: null,
            fiverr: null,
            upwork: null,
            freelancer: null,
          };
          
          await axios.post('http://127.0.0.1:8000/api/links/', linksData);
          
          navigate('/my-home');

        } else {
          console.error('Error registering user');
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <div className="container-fluid d-flex flex-column align-items-center text-dark">
        <h2 className="m-3 custom-width-div custom-heading">Signup</h2>
        <div className="m-1 d-flex flex-column align-items-center custom-width-div custom-border">
          <label className="m-1 custom-font">Username</label>
          <input className="form-control custom-width" type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div className="m-1 d-flex flex-column align-items-center custom-width-div custom-border">
          <label className="m-1 custom-font">Email</label>
          <input className="form-control custom-width" type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="m-1 d-flex flex-column align-items-center custom-width-div custom-border">
          <label className="m-1 custom-font">Password</label>
          <input className="form-control custom-width" type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div>
          <button className="m-1 btn btn-primary custom-width-div" onClick={handleSignupButtonClick}>Signup</button>
        </div>
        <div className="m-3 d-flex flex-column align-items-center  custom-width-div custom-border">
          <label className="m-1 custom-font">Already an Account?</label>
          <Link className="btn btn-outline-primary custom-width"  to="/">Login</Link>
        </div>
      </div>
    );
  }
  
  export default Signup;
  