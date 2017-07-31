import React from 'react';
import { MobileSearchBox } from './mobile-search-box';

export const MobileSearchSection = props => (
  <div className="search-section mobile">
      <MobileSearchBox screen="mobile" {...props} />
  </div>
);

