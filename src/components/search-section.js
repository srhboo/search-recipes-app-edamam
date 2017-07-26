import React from 'react';
import Select from 'react-select';

//options section 
import { LabelSection } from './labels';
import { allLabels, defaultAny, calIndex } from '../constants/options';

const UnderlinedOption = ({option}) => <span className="underline-option">{option}</span>;
const OptionLabel = ({label}) => <span className="top-option-label">{label}: </span>;

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
      <span className="keep-together">
        <input value={input} onChange={ev => updateInput(ev.target.value)} /> 
        <button className="search-button" onClick={ev => search(input, options)}>Get Cooking!</button>
      </span>
      <div className="advanced-options">
        <div className="options-label">
          <div onClick={ev => displayOptions(!showOptions)}>
            <b>filter options+ </b> 
            <span className="option-block">
              <OptionLabel label="calories" /><UnderlinedOption option={options.cals[calIndex.min]} /> to <UnderlinedOption option={options.cals[calIndex.max]}/></span>|
            <span className="option-block">
            <OptionLabel label="health / diet" /><UnderlinedOption option={options.labels} /></span>
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
              <LabelSection labels={allLabels} type="health/diet" labelsChange={labelsChange} options={options} />
              <div className="center-stuff"><button className="update-button" onClick={ev => displayOptions(!showOptions)}>close</button></div>
            </div>
            : null
          } 
        </div>
      </div>
    </div>
    <div className="search-right">
      <div className="app-title">find-a-recipe</div>
    </div>
    
  </div>
);

