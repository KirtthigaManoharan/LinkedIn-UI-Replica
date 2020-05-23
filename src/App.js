import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import Mainheader from './Components/Header/Main';
import Content from './Components/Content/content';
// import Messagebox from './Components/MessageBox/MessageBox';
class App extends Component {
  componentDidMount() {
    setInterval(this.showscreen,1000)
}
showscreen(){
 $(".showscreen").addClass("displaynone");
 $(".show").addClass("displayit");
}
  render() {

    return (
      <div>
      <figure className="showscreen">
      <img className="loader" src="linkedin-icon.jpg" alt="loading.." />
      <figcaption className="linePreloader"></figcaption>
          </figure>
      <div className="show whole-content">
          <Mainheader />
          <Content />
          {/* <Messagebox/> */}
      </div>
      </div>
    );
  }
}

export default App;
