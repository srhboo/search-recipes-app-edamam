import React from 'react';
import { SearchBox } from './search-box';
import { AdvancedOptions } from './advanced-options';

export const SearchSection = props => (
  <div className="search-section">
    <div className="search-left">
      <SearchBox {...props} />
      <AdvancedOptions {...props} />
    </div>
    <div className="search-right">
      <div className="app-title">find-a-recipe</div>
    </div>  
  </div>
);

