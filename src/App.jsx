import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Doctors from './pages/doctors/Doctors'
import Firemans from './pages/firemans/Firemans';
import Polices from './pages/polices/Polices';
import Transports from './pages/transports/Transports';
import Face from './components/face/Face';
import Dashboard from './components/dashboard/Dashboard';
import { useState } from 'react';
import Map from './components/map/Map';

function App() {

  const [showModal, setShowModal] = useState(true)

  return (
    <div className="App">
      <BrowserRouter>
        <Face setShowModal={setShowModal} showModal={showModal} />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/doctors" element={<Doctors />}></Route>
          <Route path="/firemans" element={<Firemans />}></Route>
          <Route path="/polices" element={<Polices />}></Route>
          <Route path="/transports" element={<Transports />}></Route>
          <Route path="/map" element={<Map/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
