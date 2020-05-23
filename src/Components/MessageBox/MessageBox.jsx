import React from 'react';
import './MessageBox.css';
const messbox=() =>{
    return(
<aside className="msg-overlay-container ember-view">
<div tabindex="-1" class="mh4 msg-overlay-list-bubble msg-overlay-list-bubble--is-minimized ember-view">
    <header class="msg-overlay-bubble-header ">
  {/* <div class="ember-view"></div> */}
  <section class="msg-overlay-bubble-header__details flex-row align-items-center">
    <div class="presence-entity presence-entity--size-1 ember-view">
        <img title="Kirtthiga Manoharan" alt="Kirtthiga Manoharan" class=" presence-entity__image EntityPhoto-circle-1 lazy-image ghost-person loaded ember-view" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"/>

<div class=" presence-entity__indicator presence-entity__indicator--size-1 presence-indicator presence-indicator--is-online presence-indicator--size-1 ember-view">
<span class="visually-hidden">
    Status is online
</span>
</div>
</div>
    <button class="msg-overlay-bubble-header__button truncate ml2">
      <h4 class="truncate t-14 t-bold t-white">
        <span aria-hidden="true">Messaging</span>
        <span class="visually-hidden">
          You are on the messaging overlay. Press enter to open the list of conversations.
        </span>
      </h4>
    </button>
 </section>
  <section class="msg-overlay-bubble-header__controls display-flex">
    <button class="msg-overlay-bubble-header__control msg-overlay-bubble-header__control--new-convo-btn artdeco-button artdeco-button--circle artdeco-button--inverse artdeco-button--1 artdeco-button--tertiary ember-view">  
    <li-icon aria-hidden="true" type="compose-icon" class="artdeco-button__icon" size="small">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" data-supported-dps="16x16" fill="currentColor" focusable="false">
  <path d="M11 8.75l2-2V13a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h6.25l-2 2H4v7h7V8.75zm-5-.16L5 11l2.41-1 5.49-5.48-1.42-1.42zm8.85-6.73l-.71-.71a.5.5 0 00-.71 0l-1.18 1.19 1.41 1.41 1.19-1.19a.5.5 0 000-.71z"></path>
</svg></li-icon>

<span class="artdeco-button__text">
    Compose message
</span></button>
<artdeco-dropdown id="ember514" class="ember-view">
    <artdeco-dropdown-trigger aria-expanded="false" role="button" placement="top" class="artdeco-button artdeco-button--1 artdeco-button--circle artdeco-button--tertiary artdeco-button--inverse ember-view" tabindex="0">        
    <li-icon type="ellipsis-horizontal-icon" size="small" color="true" role="img" aria-label="Open messenger dropdown menu">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" data-supported-dps="16x16" fill="currentColor" focusable="false">
  <path d="M2 7h2v2H2V7zm5 2h2V7H7v2zm5-2v2h2V7h-2z"></path>
</svg></li-icon>

</artdeco-dropdown-trigger>      
<div class="msg-overlay-bubble-header__dropdown-container">
<artdeco-dropdown-content arrow-dir="right" justification="right" placement="top" data-dropdown="" tabindex="-1" aria-hidden="true" id="ember516" class="artdeco-dropdown-with-arrow ember-view"><div class="artdeco-dropdown__content-inner">
            <ul class="white-space-nowrap">
<artdeco-dropdown-item data-control-name="overlay.compose_group" data-dropdown="" class="ember-view" tabindex="0">         
 New group conversation
</artdeco-dropdown-item>
<artdeco-dropdown-item data-control-name="overlay.connection_list_settings_from_dropdown" data-dropdown="" class="ember-view" tabindex="0">
Messaging settings
</artdeco-dropdown-item>          </ul>

</div>
</artdeco-dropdown-content>      </div>
</artdeco-dropdown>  </section>
</header>
<section class="msg-overlay-list-bubble__content msg-overlay-list-bubble__content--scrollable">
</section>
</div>

</aside>
    )
};
export default messbox
