
import './App.css';

import Homepage from "./components/Homepage";
import Bookmark from "./components/Bookmark"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/bookmark' element={<Bookmark/>} />
     
     </Routes>
     </Router>
    </div>
  );
}

export default App;
