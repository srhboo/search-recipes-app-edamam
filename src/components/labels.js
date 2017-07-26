import React from 'react'
import { labelIndex } from '../constants/options';

export const LabelSection = ({labels, type, labelsChange, options}) => (
    <div>
       <span>{type}</span> <select value={ options.labels[labelIndex[type]] } onChange={
            (ev) => labelsChange(options.labels.map((curr,index) => index === labelIndex[type] ? ev.target.value : curr ))}>
            { labels.map(label => <option value={label}>{label}</option>) }  
        </select>
    </div>
);