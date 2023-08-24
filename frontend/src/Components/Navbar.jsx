import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    document.cookie = 'user_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    navigate('/');
  };

  const userLoggedIn = document.cookie.includes('user_id=');

  return (
    <div>
      <nav>
        {userLoggedIn ? (
          <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <Link className='btn btn-primary' to='/'>Login</Link>
            <Link className='btn btn-secondary' to='/sign-up'>Signup</Link>
          </>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
