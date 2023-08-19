import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyHome from './Pages/MyHome';
import Navbar from './Components/Navbar';
import Signup from './Pages/Signup';
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/sign-up" exact element={<Signup />} />
          <Route path="/my-home" element={<MyHome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
