import React from 'react';
import {ResultsListItem} from './results-list-item';

export const ResultsList = ({results, ...props}) => (
    <div className="results-list">
        { props.error ?
        <div className="error-message">Sorry about that! Please try again.</div> 
        : results.map(result => <ResultsListItem {...props} key={result.recipe.url} recipe={result.recipe} />)}
    </div>
);
