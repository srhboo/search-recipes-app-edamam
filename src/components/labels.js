import React from 'react'

export const LabelSection = ({labels, type, labelsChange, options}) => (
    <div>
       <span>{type}</span> <select value={ options.labels } onChange={
            (ev) => labelsChange(ev.target.value)}>
            { labels.map(label => <option key={label }value={label}>{label}</option>) }  
        </select>
    </div>
);