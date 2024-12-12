// recupApisDatas.js
export const fetchValorantData = async (endpoint) => {
  try {
    const response = await fetch(`https://valorant-api.com/v1/${endpoint}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
    return [];
  }
};