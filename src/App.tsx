import React from 'react';
import {BrowserRouter as Router, Routes,  Route} from 'react-router-dom'
import Navbar from './components/navigation/Navbar'; 
import { Home } from './pages/home/Home';
import Company from './pages/company/Company';
import FindJob from './pages/findJob/FindJob';

function App() {
  return (
    <>
      <Router>
      <div>
        <Navbar />
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="company" element={<Company />} />
     <Route path="find-job" element={<FindJob />} />
     </Routes>
      </div>
      </Router>
    
    </>
  );
}

export default App;
