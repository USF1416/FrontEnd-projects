// Maps.js
import React, { useEffect, useState } from 'react';
import { fetchValorantData } from '../valorant-api/valorant-unofficial-api';
import './MapsStyle.css';

function Maps() {
  const [maps, setMaps] = useState([]);

  useEffect(() => {
    const getMaps = async () => {
      const data = await fetchValorantData('maps');
      setMaps(data);
    };
    getMaps();
  }, []);

  return (
    <div className="item-container">
      <h1>Maps</h1>
      <div className="item-list">
        {maps.map(map => (
          <div key={map.uuid} className="item-card">
            <img src={map.splash} alt={map.displayName} className="item-image" />
            <h2>{map.displayName}</h2>
            <p>{map.coordinates}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Maps;
