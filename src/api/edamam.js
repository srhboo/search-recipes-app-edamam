const appID = '87a620cd';
const appKey = '904607d528b6ba987913592efc02e3d5';
import { calIndex, dietLabels, healthLabels } from '../constants/options';

export const BASE_ENDPOINT = `https://api.edamam.com/search?app_id=${appID}&app_key=${appKey}&to=30`;

export const parseOptions = ({cals, labels}) => { 
    const lowerIsDefault = cals[calIndex.min] === 'any', 
          upperIsDefault = cals[calIndex.max] === 'any',
          dietIsDefault = dietLabels.indexOf(labels) < 0,
          healthIsDefault = healthLabels.indexOf(labels) < 0,
          calories = lowerIsDefault && upperIsDefault ? '' : '&calories=',
          lowerBound = lowerIsDefault ? '' : `gte%20${cals[calIndex.min]}`,
          spaceBetween = lowerIsDefault ? '' : upperIsDefault ? '' : ',%20',
          upperBound = upperIsDefault ? '' : `lte%20${cals[calIndex.max]}`,
          diet = dietIsDefault ? '' : '&diet=',
          dietLabel = dietIsDefault ? '' : labels,
          health = healthIsDefault ? '' : '&health=',
          healthLabel = healthIsDefault ? '' : labels;

    return `${calories}${lowerBound}${spaceBetween}${upperBound}${diet}${dietLabel}${health}${healthLabel}`;
};

