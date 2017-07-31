import React from 'react';
import { CalInput } from './cal-input'
import { LabelSection } from './labels';
import { calIndex, allLabels } from '../../constants/options';

export const OptionsBox = ({options, minCalChange, maxCalChange, showOptions, displayOptions, labelsChange, screen}) => (
    <div className="options-box">
        <div>
            calories <CalInput options={options} calChange={minCalChange} calIndex={calIndex.min} />  
            to <CalInput options={options} calChange={maxCalChange} calIndex={calIndex.max} /> 
        </div> 
        <LabelSection labels={allLabels} type="health/diet" labelsChange={labelsChange} options={options} />
        
        {
            screen === "mobile" ? null 
            : <div className="center-stuff">
                <button className="update-button" onClick={ev => displayOptions(!showOptions)}>close</button>
            </div>
        }

    </div>    
);