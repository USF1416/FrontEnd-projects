import { useEffect, useState } from 'react';
import { fetchValorantData } from '../../api/valorant-unofficial-api';

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
    <article>
        <h2>Roles du jeu</h2>
        <ul>
            {roles.map((role) => (
                <li key={role.uuid} className="roles-items">
                    <div className="roles-details">
                        <img src={role.displayIcon} alt={role.displayName} className="roles-icons" style={{backgroundColor: '#ddd'}}/>
                        <h3>{role.displayName}</h3>
                        <p>{role.description}</p>
                    </div>
                </li>
            ))}
        </ul>
    </article>
  );
}

export default RolesComponent;