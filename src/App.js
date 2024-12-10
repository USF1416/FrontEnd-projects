// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Agents from './components/Agents';
import Maps from './components/Maps';
import Weapons from './components/Weapons';
import Accueil from './components/Accueil';
import './AppStyle.css';

function App() {
  return (
    <Router>
      <div className="App" style={{textAlign: 'center'}}>
        <nav>
          <h1>Bienvenue sur un Valorant Wiki 100% crédible et réalisé par un fan.</h1>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/Agents">Agents</Link></li>
            <li><Link to="/Maps">Maps</Link></li>
            <li><Link to="/Weapons">Weapons</Link></li>
          </ul>
        </nav>
        <main>
        <Routes>
          <Route path="/" element={<Accueil />}/>
          <Route path="/Agents" element={<Agents />} />
          <Route path="/Maps" element={<Maps />} />
          <Route path="/Weapons" element={<Weapons />} />
        </Routes>
        </main>
        <footer className="footer">
          <p>© 2024 Valorant Wiki Fan. Tous droits réservés.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;