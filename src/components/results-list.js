import React from 'react';
import {ResultsListItem} from './results-list-item';

export const ResultsList = ({results, ...props}) => (
    <div className="results-list">
        {results.map(result => <ResultsListItem {...props} key={result.recipe.url} recipe={result.recipe} />)}
    </div>
);
