import React from 'react';
import Particles, { IParticlesParams } from 'react-particles-js';
import us from '../assets/us.jpg';

import './styles.scss';

const particlesConfig: IParticlesParams = {
  "particles": {
    "number": {
      "value": 50,
      "density": {
        "enable": false
      }
    },
    "size": {
      "value": 4,
      "random": true,
      "anim": {
        "speed": 4,
        "size_min": 0.9
      }
    },
    "line_linked": {
      "enable": false
    },
    "move": {
      "random": true,
      "speed": 2,
      "direction": "none",
      "out_mode": "out"
    }
  }
}

const OpeningSection = () => {
  return (
    <div className="opening-section">
      <div className="image-container">
        <img src={us} alt="" className="image" />
      </div>
      <div className="section">
        <Particles params={particlesConfig} className="particles" />
      </div>
      <div className="section-text">
        <div className="text-container">
          <div className="text">
            <h4>
              Undangan Pernikahan
            </h4>
            <h2 className="wow fadeIn heading-font-couple animated" data-wow-delay="0.2s" style={{visibility: 'visible', 'animationDelay': '0.2s'}}>Ulfah &amp; Renal</h2>
            <p className="wow fadeIn animated" data-wow-delay="0.2s" style={{visibility: 'visible', 'animationDelay': '0.2s'}}>31 October 2021</p>
            <p className="wow fadeIn animated" data-wow-delay="0.2s" style={{visibility: 'visible', 'animationDelay': '0.2s'}}>13:00
              - 20:00 WIB
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OpeningSection;