import React, { Component } from 'react';
// import Particles from 'react-particles-js';
import Navigation from './components/Navigation/navigation';
import Logo from './components/Logo/Logo';
import './App.css';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import DumbParticles from './components/DumbParticles/DumbParticles';



class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
    }
  }
  onInputChange = (event) => {
    console.log(event.target.value);
  }
  onButtonSubmit = () => {
    console.log('click');
  }

  render(){
    return (
        <div className="App">
          <div>
            <DumbParticles />
            <Navigation />
            <Logo />
            <Rank />
            <ImageLinkForm 
            onInputChange={this.onInputChange} 
            onButtonSubmit={this.onButtonSubmit}/>
          </div>
        </div>
    )
  }
}

export default App;
