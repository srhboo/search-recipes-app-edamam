const appID = '87a620cd';
const appKey = '904607d528b6ba987913592efc02e3d5';
import { labelIndex, calIndex, dietLabels, healthLabels } from '../constants/options';

export const BASE_ENDPOINT = `https://api.edamam.com/search?app_id=${appID}&app_key=${appKey}&to=200`;

export const parseOptions = ({cals, labels}) => { 
    const lowerIsDefault = cals[calIndex.min] === 'any', 
          upperIsDefault = cals[calIndex.max] === 'any',
          labelIsDefault = labels === 'all',
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

//   options: {
//     cals:["any","any"],
//     labels: ["all","all"],
//     ingredients: []
//   }

//   &calories=gte%20591,%20lte%20722&health=alcohol-free

// &calories=gte%202,%20lte%20200&diet=high-protein&health=dairy-free
