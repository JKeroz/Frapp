import React, { Component } from 'react';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import './App.css';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import DumbParticles from './components/DumbParticles/DumbParticles';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '90560f4519e946b4a6a1f6a58a678ff7'
 });

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imgUrl: '',
      box: {},
      route: 'signin',
      isSignedIn:  false
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      rightCol: width - (clarifaiFace.right_col * width),
      topRow: clarifaiFace.top_row * height,
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onInputChange = (event) => {
   this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imgUrl: this.state.input});
    app.models
      .predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
        .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
        .catch(err => console.log(err));
      
  } 
  
  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home'){
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render(){
    const { isSignedIn, imgUrl, route, box} = this.state;
    return (
        <div className="App">
            <DumbParticles />
            <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
            { 
              route === 'home' 
            ? <div>
              <Logo />
              <Rank />
              <ImageLinkForm 
              onInputChange={this.onInputChange} 
              onButtonSubmit={this.onButtonSubmit}/>
              <FaceRecognition box={box} imgUrl={imgUrl}/>
              </div>
            : (
              route === 'signin'
             ) ? <Signin onRouteChange={this.onRouteChange}/>
               : <Register onRouteChange={this.onRouteChange}/>
            }
        </div>
    )
  }
}

export default App;
