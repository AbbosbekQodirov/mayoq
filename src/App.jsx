import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Doctors from './pages/doctors/Doctors'
import Firemans from './pages/firemans/Firemans';
import Polices from './pages/polices/Polices';
import Transports from './pages/transports/Transports';
import Face from './components/face/Face';

function App() {

  return (
    <BrowserRouter>
        <Face/>
      <Routes>
        <Route path="/doctors" element={<Doctors />}></Route>
        <Route path="/firemans" element={<Firemans />}></Route>
        <Route path="/polices" element={<Polices />}></Route>
        <Route path="/transports" element={<Transports />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
