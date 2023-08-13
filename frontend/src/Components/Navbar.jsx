import React, { useState } from 'react';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';

function Navbar() {
  const [showLogin, setShowLogin] = useState(true);

  const handleSwitchButtonClick = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div>
      <nav>
        <button onClick={() => setShowLogin(true)}>Login</button>
        <button onClick={() => setShowLogin(false)}>Signup</button>
      </nav>
      <div>
        {showLogin ? <Login onToggleClick={handleSwitchButtonClick} /> : <Signup onToggleClick={handleSwitchButtonClick} />}
      </div>
    </div>
  );
}

export default Navbar;
