import { combineReducers } from 'redux';
import { generateProducts } from '../utils/data';
import { ACTION_TYPES } from '../constants/ActionTypes';

const INITIAL_STATE = {
  input: '',
  results: [],
  recipe: {},
  info: 'recipe',
  error: false
};

export const input = ( state = INITIAL_STATE.input, {type, payload}) => {
  switch(type) {
    case ACTION_TYPES.UPDATE_INPUT:
      return payload;
  }
  return state;
};

export const results = (state = INITIAL_STATE.results, {type, payload}) => {
  switch(type) {
    case ACTION_TYPES.UPDATE_RESULTS:
      return payload; 
  }
  return state;
};

export const recipe = (state = INITIAL_STATE.recipe, {type, payload}) => {
  switch(type) {
    case ACTION_TYPES.DISPLAY_RECIPE:
      return payload;
  }
  return state;
};

export const info = (state = INITIAL_STATE.info, {type, payload}) => {
  switch(type) {
    case ACTION_TYPES.SWITCH_INFO:
      return payload;
  }
  return state;
};

export const error = (state = INITIAL_STATE.error, {type, payload}) => {
  switch(type) {
    case ACTION_TYPES.SET_ERROR:
      return payload;
    case ACTION_TYPES.UPDATE_RESULTS:
      return false;
  }
  return state;
}

export default combineReducers({
  results,
  input,
  recipe,
  info,
  error
});
