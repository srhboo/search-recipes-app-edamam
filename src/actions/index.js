import {ACTION_TYPES} from '../constants/ActionTypes';

export function updateInput(val) {
  return {
    type: ACTION_TYPES.UPDATE_INPUT,
    payload: val
  }
}

export function search(val) {
  return {
    type: ACTION_TYPES.SEARCH,
    payload: val
  }
}

export function updateResults(results) {
  return {
    type: ACTION_TYPES.UPDATE_RESULTS,
    payload: results
  }
}

export function displayRecipe(recipe) {
  return {
    type: ACTION_TYPES.DISPLAY_RECIPE,
    payload: recipe
  }
}

export function switchInfo(info) {
    return {
      type: ACTION_TYPES.SWITCH_INFO,
      payload: info
    }
}

export function setError(error) {
  return {
    type: ACTION_TYPES.SET_ERROR,
    payload: error
  }
}

export function displayOptions(bool) {
  return {
    type: ACTION_TYPES.DISPLAY_OPTIONS,
    payload: bool
  }
}