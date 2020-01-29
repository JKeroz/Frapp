import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './DumbParticles.css';

class DumbParticles extends Component {

    render() {

        return (

            <Particles className='particles' 
                params={{
                    "particles": {
                        "line_linked": {
                                    "color":"#FFFFFF"
                                    },
                        "number": {
                            "value": 40,
                            "density": {
                                "enable": true,
                                "value_area": 400
                            }
                        },
                        "size": {
                            "value": 5
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": false,
                                "mode": "repulse"
                            }
                        }
                    }
                }}
                />
                )}
            }
export default DumbParticles;