import { Link } from 'react-router-dom';

function Navbar() {
  // const [showLogin, setShowLogin] = useState(true);

  // const handleSwitchButtonClick = () => {
  //   setShowLogin(!showLogin);
  // };

  return (
    <div>
      <nav>
        <Link className='btn btn-primary' to='/'>Login</Link>
        <Link className='btn btn-secondary' to='/sign-up'>Signup</Link>
      </nav>
      {/* <div>
        {showLogin ? <Login onToggleClick={handleSwitchButtonClick} /> : <Signup onToggleClick={handleSwitchButtonClick} />}
      </div> */}
    </div>
  );
}

export default Navbar;
