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
import Table from './components/table/Table';
import { useEffect } from 'react';

import { db } from "./firebase";
import { onValue, ref, set } from "firebase/database";

function App() {

  const [showModal, setShowModal] = useState(true)
  const [datas, setDatas] = useState([])

  useEffect(() => {
    console.log("loading");
    onValue(ref(db), async (snapshot) => {
      const data = snapshot.val();

      if (data !== null) {
        const datas = [];
        datas.push(data);
        setDatas(datas);
      }
    });
  }, []);


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
          {datas.length ? (
            <Route path="/map" element={<Map datas={datas && datas} />}></Route>
          ) : null}
          {datas.length && (
            <Route
              path="/table"
              element={<Table datas={datas && datas} />}
            ></Route>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
