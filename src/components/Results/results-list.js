import React from 'react';
import {ResultsListItem} from './results-list-item';

export const ResultsList = ({display, results, ...props}) => (
    <div className={`results-list ${display}`}>
        { display === "mobile" ? <button className="back-nav" onClick={() => props.setAnchor("search")}>{`<<`}</button> : null}
        { 
            props.loading ? <div className="loading-message">Aha! I think I have just what you need...</div> 
        :
            props.error ?
            <div className="error-message">Oops looks like something went wrong. Sincerest apologies! <br />Wait a minute and try again.</div> 
            : results.map(result => <ResultsListItem {...props} key={result.recipe.url} recipe={result.recipe} />)}
    </div>
);
