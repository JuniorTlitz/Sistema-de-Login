import React from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Home } from './pages/Home'
import { Privada } from "./pages/Private";
import {RequireAuth} from "./contexts/Auth/RequireAuth";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Header do site</h1>
        <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/private"}>Pagina privada</Link>
        </nav>
      </header>
      <hr/>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/private' element={<RequireAuth><Privada /></RequireAuth>} />
        </Routes>
    </div>
  );
}

export default App;
