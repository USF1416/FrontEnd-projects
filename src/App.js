// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Agents from './components/Agents/agents-page';
import Maps from './components/Maps/maps-page';
import Accueil from './components/accueil-page';
import './AppStyle.css';
// import Weapons from './components/Armes/armes-page';


function App() {
  return (
    <Router>
      <div className="App" style={{textAlign: 'center'}}>
        <nav>
          <h1>Valorant <img src="/img/icon Valorant.png" alt="Valorant icon" width='100rem'/> WikiFan</h1>
          <ul className="ListSectionLink">
            <button className="SectionLink"><Link to="/">Accueil</Link></button>
            <button className="SectionLink"><Link to="/Agents">Agents</Link></button>
            <button className="SectionLink"><Link to="/Maps">Maps</Link></button>
            {/*<button className="SectionLink"><Link to="/Weapons">Weapons</Link></button>*/}
          </ul>
        </nav>
        <main>
        <Routes>
          <Route path="/" element={<Accueil />}/>
          <Route path="/Agents" element={<Agents />} />
          <Route path="/Maps" element={<Maps />} />
          {/*<Route path="/Weapons" element={<Weapons />} />*/}
        </Routes>
        </main>
        <footer className="footer">
          <p>© 2025 Valorant Wiki Fan. Tous droits réservés.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;