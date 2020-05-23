import React, { Component } from 'react';
import '../Header/Main.css';
import '../Icons/icons.css';
import LinkedinIcon from '../LinkedinIcon/linkicon';
import Search from '../Search/Search';
import Home from '../Icons/Home/Home';
import Mynetwork from '../Icons/Mynetwork/Mynetwork';
import Jobs from '../Icons/Jobs/Jobs';
import Message from '../Icons/Message/Message';
import Notification from '../Icons/Notification/Notification';
import Ad from '../Icons/Premiumad/Ad';
import Me from '../Icons/Me/Me';
import Work from '../Icons/Work/Work';

const elements = {
 LinkedinIcon: <LinkedinIcon/>,
 Home : <Home />,
 Mynetwork : <Mynetwork />,
 Jobs: <Jobs/>,
 Message: <Message />,
 Notification: <Notification />,
 Me: <Me />,
 Work: <Work />,
 Ad: <Ad />
}

class Mainheader extends Component {
    state = {  }
    

    render() { 
        return ( 
            <div>
            {/* <div className="mainshow"> */}
            <div className="header-tab sticky-nav-top">
            <ul className="nav-main nav-container display-flex full-height">
                <LinkedinIcon/>
                <Search />
                <li>{elements.Home}</li>
                <li>{elements.Mynetwork}</li>
                <li>{elements.Jobs}</li>
                <li>{elements.Message}</li>
                <li>{elements.Notification}</li>
                <li>{elements.Me}</li>
                <li>{elements.Work}</li>
                <li>{elements.Ad}</li>
            </ul>
            </div>
            
            {/* </div> */}
            </div>
         );
    }
}
 
export default Mainheader;