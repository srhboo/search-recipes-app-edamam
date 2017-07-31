import React from 'react';
import { MobileSearchBox } from './mobile-search-box';

export const MobileSearchSection = props => (
  <div className="search-section mobile" onLoad={console.log("loaded")}>
      <MobileSearchBox screen="mobile" {...props} />
  </div>
);

