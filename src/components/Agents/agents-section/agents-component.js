import { useEffect, useState } from 'react';
import { fetchValorantData } from '../../../api/valorant-unofficial-api';

function AgentsComponent() {
    // On crée un état local pour savoir si l'élément est "actif"
    const [agents, setAgents] = useState([]);
    const [selectedAgent, setSelectedAgent] = useState(null)
    const [roles, setRoles] = useState([]);

    // Appel de l'API pour récupérer les agents
    useEffect(() => {
        const getAgents = async () => {
          const data = await fetchValorantData('agents?isPlayableCharacter=true');
          setAgents(data)
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

    function isSelected(agent) {
        return selectedAgent && selectedAgent.uuid === agent.uuid;
    }

    return (
        <>
            <article className="agents-container-1">
                <div className="filters-list">
                    <button className='filters-button'>
                        <img src='/img/filter-icon.png' alt='h' style={{width:'111%'}}/>
                    </button>
                    {roles.map((role) => (
                    <li key={role.uuid}>
                        <button className='filters-button'>
                            <img src={role.displayIcon} alt={role.displayName} style={{width:'75%'}}/>
                        </button>
                    </li>
                    ))}
                </div>
                <div className="agents-buttons-list">
                    {/* bouton pour chaque agent */}
                    {agents.map(agent => (
                    <li key={agent.uuid}>
                        <button className={`agents-button ${isSelected(agent) ? 'selected' : ''}`} onClick={() => {setSelectedAgent(agent)}}>
                            <img src={agent.displayIcon} alt={agent.displayName} style={{width:'115%'}}/>
                        </button>
                    </li>
                    ))}
                </div>
            </article>
            <article className="agents-container-2">
                {selectedAgent && (
                <div className="agents-details-container">
                    <img className="agents-image" src={selectedAgent.fullPortrait} alt={selectedAgent.displayName}/>
                    {/* capacitees pour chaque agent */}
                    {selectedAgent && (
                    <div className="agents-abilities-list">
                        {selectedAgent.abilities.map((ability) => (
                        <div className="agents-abilities">
                            <div class="agents-abilities-media"></div>
                            <div class="agents-abilities-card">
                                <h2 class="agents-abilities-title">
                                    <img src={ability.displayIcon} alt={ability.displayName} style={{width:'20%',bakcgroundColor:''}}/>
                                    {ability.displayName}
                                </h2>
                                <p class="agents-abilities-description">{ability.description}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                    )}
                </div>
                )}
            </article>
        </>
    );
}
export default AgentsComponent;