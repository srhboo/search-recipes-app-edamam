import { combineReducers } from 'redux';
import { ACTION_TYPES } from '../constants/ActionTypes';

const INITIAL_STATE = {
  input: '',
  results: [],
  recipe: {},
  info: 'recipe',
  error: false,
  showOptions: false,
  loading: false,
  options: {
    cals:["any","any"],
    labels: "all",
    ingredients: []
  },
  anchor: "search"
};

export const input = ( state = INITIAL_STATE.input, {type, payload}) => {
  switch(type) {
    case ACTION_TYPES.UPDATE_INPUT:
      return payload;
    default:
      return state;
  }
};

export const results = (state = INITIAL_STATE.results, {type, payload}) => {
  switch(type) {
    case ACTION_TYPES.UPDATE_RESULTS:
      return payload; 
    default:
      return state;
  }
};

export const recipe = (state = INITIAL_STATE.recipe, {type, payload}) => {
  switch(type) {
    case ACTION_TYPES.DISPLAY_RECIPE:
      return payload;
    default:
      return state;
  }
};

export const info = (state = INITIAL_STATE.info, {type, payload}) => {
  switch(type) {
    case ACTION_TYPES.SWITCH_INFO:
      return payload;
    default:
      return state;
  }
};

export const error = (state = INITIAL_STATE.error, {type, payload}) => {
  switch(type) {
    case ACTION_TYPES.SET_ERROR:
      return payload;
    case ACTION_TYPES.UPDATE_RESULTS:
      return false;
    default:
      return state;
  }
}

export const showOptions = (state = INITIAL_STATE.showOptions, {type, payload}) => {
  switch(type) {
    case ACTION_TYPES.DISPLAY_OPTIONS:
      return payload;
    case ACTION_TYPES.SEARCH:
      return false;
    default:
      return state;
  }
}

export const loading = (state = INITIAL_STATE.loading, {type, payload}) => {
  switch(type) {
    case ACTION_TYPES.SEARCH:
      return true;
    case ACTION_TYPES.UPDATE_RESULTS:
      return false;
    case ACTION_TYPES.SET_ERROR:
      return false;
    default:
      return state;
  }
}

export const options = (state = INITIAL_STATE.options, {type, payload}) => {
  switch(type) {
    case ACTION_TYPES.MINCAL_CHANGE:
      return {...state, cals: state.cals.map((curr, index) => index === 0 ? payload : curr )};
    case ACTION_TYPES.MAXCAL_CHANGE:
      return {...state, cals: state.cals.map((curr, index) => index === 1 ? payload : curr )};
    case ACTION_TYPES.LABELS_CHANGE:
      return {...state, labels: payload };
    case ACTION_TYPES.INGREDIENTS_CHANGE:
      return {...state, ingredients: payload };
    default:
      return state;
  }
};

export const anchor = (state = INITIAL_STATE.anchor, {type, payload}) => {
  switch(type) {
    case ACTION_TYPES.SET_ANCHOR:
      return payload;
    case ACTION_TYPES.SEARCH:
      return "results";
    case ACTION_TYPES.DISPLAY_RECIPE:
      return "recipe";
    default:
      return state;
  }
}

export default combineReducers({
  results,
  input,
  recipe,
  info,
  error,
  showOptions,
  loading,
  options,
  anchor
});