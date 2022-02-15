
import './App.css';

import React, { Component } from 'react'
import Compteur from './compt';

export default class App extends Component {
  state = {
    fullName:'Wassim Glouia',
    bio:'I am a full stack web developer',
    imgSrc:'https://images4.alphacoders.com/290/thumb-1920-290878.jpg',
    profession:'Textile engineer',
    show : false
  }
  handleShow = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.show ? (
          <>
            <h1 style={{color:"black", textJustify:"justify", fontFamily:"time", fontSize:"25px"}}>{this.state.fullName}</h1>
            <h1 style={{color:"black", textJustify:"justify", fontFamily:"time", fontSize:"25px"}}>{this.state.bio}</h1>
            <img src={this.state.imgSrc} alt="failed" />
            <h1 style={{color:"black", textJustify:"justify", fontFamily:"time", fontSize:"25px"}}>{this.state.profession}</h1>
          </>
        ) : (
          <h1 style ={{color:"green", textJustify:"justify", fontFamily:"time", fontSize:"25px"}}>Show the profile</h1>
        )
        }
        <button onClick={this.handleShow}>{!this.state.show ? "show" : "hide"}</button>
        <>
        <h1 style ={{color:"green", textJustify:"justify", fontFamily:"time", fontSize:"25px"}}>Show the count</h1>
        <Compteur/>

        </>
      </div>
    );
  }
}



