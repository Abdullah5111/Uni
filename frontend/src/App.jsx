import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './Pages/Auth';
import MyHome from './Pages/MyHome';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/"  element={<Auth />} />
          <Route path="/MyHome" element={<MyHome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
