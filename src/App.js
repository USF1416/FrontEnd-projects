// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Agents from './components/Agents/agents-page';
import Maps from './components/Maps/maps-page';
import Weapons from './components/Armes/armes-page';
import Accueil from './components/accueil-page';
import './AppStyle.css';

function App() {
  return (
    <Router>
      <div className="App" style={{textAlign: 'center'}}>
        <nav>
          <h1>titre site + logo modifié</h1>
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