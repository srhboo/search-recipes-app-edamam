import React from 'react';

export const CalInput = ({options, calChange, calIndex}) => {
    const defaultAny = val => val.length ? val : "any";
    return (
        <input type="text" 
                value={options.cals[calIndex]} 
                onChange={(ev)=>calChange(ev.target.value)} 
                onFocus={()=>calChange("")}
                onBlur={()=>calChange(defaultAny(options.cals[calIndex]))} /> 
)};