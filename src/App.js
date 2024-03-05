import './App.css';
import Mascotas from './Mascotas'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from './Detail'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mascotas />} />
          <Route path="/mascotas" element={<Mascotas />} />
          <Route path="/mascotas/:mascotaId" element={<Detail />} />
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
