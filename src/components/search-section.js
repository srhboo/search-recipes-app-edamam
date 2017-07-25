import React from 'react';
import Select from 'react-select';


//options section 
import { LabelSection } from './labels';
import { dietLabels, healthLabels, defaultAny } from '../constants/options';


export const SearchSection = ({input, 
                               updateInput, 
                               search, 
                               showOptions, 
                               displayOptions, 
                               options,
                               minCalChange,
                               maxCalChange,
                               labelsChange,
                               ingredientsChange}) => (
  <div className="search-section">
    <div className="search-left">
        <input value={input} onChange={ev => updateInput(ev.target.value)} /> 
        <button className="search-button" onClick={ev => search(input)}>Get Cooking!</button>
    </div>
    <div className="advanced-options">
        <div className="options-label" onClick={ev => displayOptions(!showOptions)}> 
          options +
          </div>
          { showOptions ?
            <div className="options-box">
              <div>calories <input type="text" 
                                         value={options.cals[0]} 
                                         onChange={(ev)=>minCalChange(ev.target.value)} 
                                         onFocus={()=>minCalChange("")} 
                                         onBlur={()=>minCalChange(defaultAny(options.cals[0]))} /> 
              to <input type="text" 
                        value={options.cals[1]} 
                        onChange={(ev)=>maxCalChange(ev.target.value)} 
                        onFocus={()=>maxCalChange("")}
                        onBlur={()=>maxCalChange(defaultAny(options.cals[1]))} /> 
              </div> 
              <LabelSection labels={dietLabels} type="diet" labelsChange={labelsChange} options={options} />
              <LabelSection labels={healthLabels} type="health" labelsChange={labelsChange} options={options} />
              <div className="center-stuff"><button className="update-button" onClick={ev => displayOptions(!showOptions)}>update</button></div>
            </div>
            : null
          } 
    </div>
    {/*<div className="app-title">find-a-recipe</div>*/}
  </div>
);

