import React from 'react';
import { ResultsListItem } from './results-list-item';
import { Loading } from './loading';

export const ResultsList = ({display, results, ...props}) => (
    <div className={`results-list ${display}`}>
        { display === "mobile" ? <button className="back-nav" onClick={() => props.setAnchor("search")}>{`<<`}</button> : null}
        { 
            props.loading ? 
            <Loading />
        :
            props.error ?
            <div className="error-message">Oops something went wrong. We may have hit the limit of searches we can do per minute. <br />
            (We're very popular these days) <br />
            Please try again in a minute! You won't regret it.</div> 
            : results.map(result => <ResultsListItem {...props} key={result.recipe.url} recipe={result.recipe} />)}
    </div>
);
