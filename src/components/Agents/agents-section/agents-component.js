import { useEffect, useState } from 'react';
import { fetchValorantData } from '../../../api/valorant-unofficial-api';

function AgentsComponent() {
    // On crée un état local pour savoir si l'élément est "actif"
    const [agents, setAgents] = useState([]);
    const [selectedAgent, setSelectedAgent] = useState(null)
  
    // Appel de l'API pour récupérer les agents
    useEffect(() => {
        const getAgents = async () => {
        const data = await fetchValorantData('agents?isPlayableCharacter=true');
        setAgents(data);
        };
        getAgents();
    }, []); // [] signifie que l'effet s'exécute seulement au montage du composant

    function isSelected(agent) {
        return selectedAgent && selectedAgent.uuid === agent.uuid;
    }

    return (
        <>
            <article className="agents-container-1">
                <div className="agents-buttons-list" style={{display:'flex'}}>
                    {/* bouton pour chaque agent */}
                    {agents.map(agent => (
                        <li key={agent.uuid} style={{ listStyle: 'none'}}>
                            <button className={`agents-button ${isSelected(agent) ? 'selected' : ''}`} onClick={() => {setSelectedAgent(agent)}}>
                                <img className="agents-icons" src={agent.displayIcon} alt={agent.displayName} />
                            </button>
                        </li>
                    ))}
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
        </>
    );
}
export default AgentsComponent;