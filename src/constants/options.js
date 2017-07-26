export const calIndex = { min:0, max: 1};
export const labelIndex = {diet: 0, health:1};

export const dietLabels = ["balanced","high-protein","high-fiber","low-carb","low-fat"];
export const healthLabels = ["dairy-free","egg-free","fish-free","gluten-free","kidney-friendly","kosher","low-sugar","paleo","peanut-free","pecatarian","pork-free","shellfish-free","soy-free","vegan","vegetarian"];
export const allLabels = ["all", ...dietLabels, ...healthLabels];

export const defaultAny = val => val.length ? val : "any";
