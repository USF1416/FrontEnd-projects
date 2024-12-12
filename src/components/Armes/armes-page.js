// Weapons.js
import React, { useEffect, useState } from 'react';
import { fetchValorantData } from '../../api/valorant-unofficial-api';
import '../../style/WeaponsStyle.css';

function Weapons() {
  const [weapons, setWeapons] = useState([]);

  useEffect(() => {
    const getWeapons = async () => {
      const data = await fetchValorantData('weapons');
      setWeapons(data);
    };
    getWeapons();
  }, []);

  return (
    <div className="item-container">
      <h1>Weapons</h1>
      <div className="item-list">
        {weapons.map(weapon => (
          <div key={weapon.uuid} className="item-card">
            <img src={weapon.displayIcon} alt={weapon.displayName} className="item-image" />
            <h2>{weapon.displayName}</h2>
            <p>{weapon.shopData ? weapon.shopData.category : 'No category available'}</p>
            <p>{weapon.shopData ? weapon.shopData.cost : 'No category available'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Weapons;