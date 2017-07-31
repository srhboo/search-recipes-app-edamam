import React from 'react';
import { MobileSearchBox } from './mobile-search-box';
import logo from '../../img/logo.svg';

export const MobileSearchSection = props => (
  <div className="search-section mobile">
      <img src={logo} />
      <MobileSearchBox screen="mobile" {...props} />
  </div>
);

