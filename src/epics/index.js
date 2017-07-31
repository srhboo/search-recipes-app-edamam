import { combineEpics } from 'redux-observable';
import { BASE_ENDPOINT, parseOptions } from '../api/edamam';
import { updateResults, setError } from '../actions';
import { ACTION_TYPES } from '../constants/ActionTypes';
import { Observable } from 'rxjs';

const recipeEpic = action$ =>
    action$.ofType(ACTION_TYPES.SEARCH)
    .mergeMap(action => 
        Observable.ajax({
                url:`${BASE_ENDPOINT}&q=${action.payload.input}${parseOptions(action.payload.options)}`,
                crossDomain: true
            })
            .map(({response}) => response.hits ? updateResults(response.hits) : console.log(response))
            .catch(error => Observable.of(setError(true))) //why does this need to be observable of?
);

export default combineEpics(
    recipeEpic
)
