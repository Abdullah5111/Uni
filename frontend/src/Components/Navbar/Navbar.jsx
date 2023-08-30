import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove Cookies
    document.cookie = 'user_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    navigate('/');
  };

  const userLoggedIn = document.cookie.includes('user_id=');

  return (
    <div>
      <nav className='nav nav-tabs'>
        {userLoggedIn ? (
          <button className='nav-item  nav-link' onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <Link className='nav-item nav-link' to='/'>Login</Link>
            <Link className='nav-item nav-link' to='/sign-up'>Signup</Link>
          </>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
