import React from 'react';
import '../Icons/icons.css';
import './Search.css';
const Search = () => {
    return ( 
        <div className="search-tab">
        <form id="extended-nav-search" class="nav-search">
            <div class="nav-search-bar"><div id="nav-typeahead-wormhole">    
            <div class="nav-search-typeahead">
                <div id="ember29" class="search-global-typeahead ember-view">
                    <div id="global-nav-typeahead" class="search-typeahead-v2 search-global-typeahead__typeahead ember-view">    
                    <div id="ember31" class="ember-view">
                <input class="search-global-typeahead__input" placeholder="Search" role="combobox" aria-autocomplete="list" aria-activedescendant="" aria-expanded="false" aria-owns="" aria-label="Search" type="text"/></div>
      <div class="search-global-typeahead__overlay search-global-typeahead__ease-out"></div>
</div><div class="search-global-typeahead__controls">
  <button class="search-typeahead-v2__button search-global-typeahead__button" tabindex="-1" data-control-name="nav.search_button" type="button" data-ember-action="" data-ember-action-32="32">
    <li-icon type="search-icon" class="search-global-typeahead__icon" size="medium" role="img" aria-label="i18n_search_button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" data-supported-dps="24x24" fill="currentColor" focusable="false">
  <path d="M21 19.67l-5.44-5.44a7 7 0 10-1.33 1.33L19.67 21zm-11-4.54A5.13 5.13 0 1115.13 10 5.13 5.13 0 0110 15.13z"></path>
</svg></li-icon>
  </button>
</div>
</div>
    </div>
</div></div></form>
        </div>
     );
}
 
export default Search;