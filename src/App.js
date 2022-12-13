import Registy from './components/registy';
import Login from './components/login';
import Profil from'./components/Profil';
import Test from './components/test';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
   
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/sign" element={<Registy/>}/>
      <Route path="/Profil" element={<Test/>}/>

    </Routes>
    
  </BrowserRouter>

  );
}

export default App;
