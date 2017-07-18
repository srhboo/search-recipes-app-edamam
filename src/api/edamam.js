const appID = '87a620cd';
const appKey = '904607d528b6ba987913592efc02e3d5';
export const fetchRecipes = query =>
    fetch(`https://api.edamam.com/search?q=${query}&app_id=${appID}&app_key=${appKey}`)
    .then(res => res.json());