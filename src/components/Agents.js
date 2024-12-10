import React, { useEffect, useState } from 'react';
import { fetchValorantData } from '../valorant-api/valorant-unofficial-api';
import './AgentsStyle.css';

function Agents() {
  const [countSlice, setCountSlice] = useState(0);
  const [agents, setAgents] = useState([]);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const getAgents = async () => {
      const data = await fetchValorantData('agents?isPlayableCharacter=true');
      setAgents(data);
      // Extraire les rôles uniques
      const uniqueRoles = data.reduce((acc, agent) => {
        if (agent.role && !acc.find(role => role.displayName === agent.role.displayName)) {
          acc.push(agent.role);
        }
        return acc;
      }, []);
      setRoles(uniqueRoles);
    };
    getAgents();
  }, []); // [] signifie que l'effet s'exécute seulement au montage du composant

  return (
    <>
      <section className="roles-container">
        <article>
          
          <h2>Roles du jeu</h2>
          <ul>
            {roles.map((role, index) => (
              <li key={index} className="roles-items">
                <div className="roles-details">
                  <img src={role.displayIcon} alt={role.displayName} className="roles-icons" style={{backgroundColor: '#ddd'}}/>
                  <h3>{role.displayName}</h3>
                  <p>{role.description}</p>
                </div>
              </li>
            ))}
          </ul>

        </article>
      </section>

      <section className="agents-container-1">
        <article className="agents-buttons-container">
          
          <div className="agents-buttons-items">
            {agents.slice(countSlice, countSlice + 10).map(agent => (
              <li key={agent.uuid} style={{ listStyle: 'none'}}>
                <button className="agents-selections" onClick={() => setSelectedAgent(agent)}>
                  <img src={agent.displayIcon} alt={agent.displayName} className="agents-icons"/>
                </button>
              </li>
            ))}
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between' }}>
            <button className='agents-rotation-buttons' onClick={() => countSlice >= 10 ? setCountSlice(countSlice - 10) : null}>prec</button>
            <button className='agents-rotation-buttons' onClick={() => countSlice <= (agents.length - 10) ? setCountSlice(countSlice + 10) : null}>suiv</button>
          </div>

        </article>
        <article className="agents-container-2">
          
          {selectedAgent && (
            <div className="agents-details-container">
              <img src={selectedAgent.fullPortrait} alt={selectedAgent.displayName} className="agents-image"/>
              <h2>{selectedAgent.displayName}</h2>
              <p>{selectedAgent.description}</p>
              {selectedAgent && (
                <div className="agents-abilities">
                  {selectedAgent.abilities.map((ability, index) => (
                    <div key={index} className="agents-abilities-items">
                      <img src={ability.displayIcon} alt={ability.displayName} className="agents-abilities-icon" style={{backgroundColor: '#ddd'}}/>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          
        </article>
      </section>
    </>
  );
}

export default Agents;