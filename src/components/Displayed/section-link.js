import React from 'react';

export const SectionLink = ({title, switchInfo, selectedInfo}) => {
  return (selectedInfo === title ? 
    <button className="bold-selected" onClick={() => {switchInfo(title)}}>{title}</button> 
    :<button onClick={() => {switchInfo(title)}}>{title}</button>
)};