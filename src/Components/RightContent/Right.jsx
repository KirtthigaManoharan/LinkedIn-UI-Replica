import React from 'react';
import './Right.css'
import Module from './RightTop/Module/module';
import Imagecontent from './RightTop/Imagecontent/imagecontent';
import Footer from './RightBottom/Footer/rightfooter';
const Right = () => {
    return ( 
        <aside className="feed-right-rail feed-right-rail--multi-card right-rail">

        {/* <div className="feed-right-rail__top-module">
            
        </div> */}
        <Module />
        <div className="sticky ember-view">
            <div className="right-rail-container feed-right-rail__container">
            <div id="feed-right-rail-tooltip-sticky-outlet"></div>
            <Imagecontent />
            <Footer/>
            </div>
        </div>

        </aside>
     );
}
 
export default Right;