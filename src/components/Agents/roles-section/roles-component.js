import { useEffect, useState } from 'react';
import { fetchValorantData } from '../../../api/valorant-unofficial-api';

function RolesComponent() {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const getAgents = async () => {
      const data = await fetchValorantData('agents?isPlayableCharacter=true');
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
    <article style={{marginTop:'2.5%',display:'flex',justifyContent:'space-around'}}>
        {roles.map((role) => (
          <li key={role.uuid}>
            <div class="roles-card">
              <img className="roles-icon" src={role.displayIcon} alt={role.displayName}/>
              <div class="content-card">
                <h2 style={{fontFamily:'fantasy', fontWeight:'1'}}>{role.displayName}</h2>
                <p class="description-card">{role.description}</p>
              </div>
            </div>
          </li>
        ))}
    </article>
  );
}

export default RolesComponent;