import React from 'react';
import { calIndex } from '../../constants/options';
import { OptionsBox } from './options-box';

const UnderlinedOption = ({option}) => <span className="underline-option">{option}</span>;
const OptionLabel = ({label}) => <span className="top-option-label">{label}: </span>;

export const AdvancedOptions = props => (
    <div className="advanced-options">
        <div className="options-label">
            <div onClick={ev => props.displayOptions(!props.showOptions)}>
            <b>filter options+ </b> 
            <span className="option-block">
                <OptionLabel label="calories" /><UnderlinedOption option={props.options.cals[calIndex.min]} /> to <UnderlinedOption option={props.options.cals[calIndex.max]}/>
            </span>|
            <span className="option-block">
                <OptionLabel label="health / diet" /><UnderlinedOption option={props.options.labels} />
            </span>
            </div>
            { 
                props.showOptions ?
                <OptionsBox {...props} />
                : null
            } 
        </div>
    </div>
);