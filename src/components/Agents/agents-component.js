import { useEffect, useState } from 'react';
import { fetchValorantData } from '../../api/valorant-unofficial-api';

function AgentsComponent() {
    const [countSlice, setCountSlice] = useState(0);
    const countSliceLimit = 10;
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

    return (
        <>
            <article className="agents-buttons-container">
                <div className="agents-buttons-items">
                    {agents.slice(countSlice, countSlice + countSliceLimit).map(agent => (
                        <li key={agent.uuid} style={{ listStyle: 'none'}}>
                            <button className="agents-selections" onClick={() => setSelectedAgent(agent)}>
                                <img src={agent.displayIcon} alt={agent.displayName} className="agents-icons"/>
                                <h3>{agent.displayName}</h3>
                            </button>
                        </li>
                    ))}
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between' }}>
                    <button className='agents-rotation-buttons' onClick={() => countSlice >= countSliceLimit ? setCountSlice(countSlice - countSliceLimit) : null}>Precedent</button>
                    <button className='agents-rotation-buttons' onClick={() => countSlice <= (agents.length - countSliceLimit) ? setCountSlice(countSlice + countSliceLimit) : null}>Suivant</button>
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