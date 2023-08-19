import  { useState } from 'react';
import Signup from './Signup'
import Login from './Login'

function Auth() {
  const [showLogin, setShowLogin] = useState(true);

  const handleToggleClick = () => {
    setShowLogin((prevShowLogin) => !prevShowLogin);
  };

  return (
    <div>
      {showLogin ? <Login onToggleClick={handleToggleClick} /> : <Signup onToggleClick={handleToggleClick} />}
    </div>
  );
}

export default Auth;