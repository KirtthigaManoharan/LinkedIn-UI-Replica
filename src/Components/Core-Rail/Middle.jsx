import React, {Component} from 'react';
import './Middle.css';
import Middletop from '../Core-Rail/MiddleTop/Midtop';
import MiddleBottom from '../Core-Rail/MiddleBottom/MidBotMain';
import MiddleBottomTwo from '../Core-Rail/MiddleBottom2/MidBot2';
import MiddleBottomThree from '../Core-Rail/MiddleBottom3/MidBot3';
const corerail =  {
    MiddleTop : <Middletop />,
    MiddleBottom : <MiddleBottom />,
    MiddleBottomTwo: <MiddleBottomTwo />,
    MiddleBottomThree:<MiddleBottomThree />
}
class CoreRail extends Component {
    state = {  }
    render(){
    return ( 
        <div class="core-rail">
            <div class="ember-view">
                {corerail.MiddleTop}
                {corerail.MiddleBottom}
                {corerail.MiddleBottomTwo}
                {corerail.MiddleBottomThree}
            </div>
        </div>
     );
    }
}
 
export default CoreRail;