import React from 'react';
import { ResultsListItem } from './results-list-item';
import { Loading } from './loading';
import { Error } from './error';

export const ResultsList = ({display, results, ...props}) => (
    <div className={`results-list ${display}`}>
        { display === "mobile" ? <button className="back-nav" onClick={() => props.setAnchor("search")}>{`<<`}</button> : null}
        { 
            true ? 
            <Loading />
        :
            props.error ?
            <Error />
            : results.map((result, ind) => <ResultsListItem {...props} key={`${result.recipe.url}-${ind}`} recipe={result.recipe} />)}
    </div>
);
