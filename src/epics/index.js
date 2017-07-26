import { combineEpics } from 'redux-observable';
import { BASE_ENDPOINT, parseOptions } from '../api/edamam';
import { search, updateResults, setError } from '../actions';
import { ACTION_TYPES } from '../constants/ActionTypes';
import { Observable } from 'rxjs';


const recipeEpic = action$ =>
    action$.ofType(ACTION_TYPES.SEARCH)
    .mergeMap(action => 
        Observable.ajax(`${BASE_ENDPOINT}&q=${action.payload.input}${parseOptions(action.payload.options)}`)
            .map(({response}) => response.hits ? updateResults(response.hits) : console.log('error'))
            .catch(error => Observable.of(setError(true))) //why does this need to be observable of?
);

export default combineEpics(
    recipeEpic
)
