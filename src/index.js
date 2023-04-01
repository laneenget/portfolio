import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import * as Particles from "./scripts/particles.js";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

window.onload = function() {
    Particles.init({
      selector: '.background',
      color: '#094067',
      maxParticles: 300,

      responsive: [
        {
          breakpoint: 768,
          options: {
            maxParticles: 200,
            connectParticles: false
          }
        }, 
        {
          breakpoint: 425,
          options: {
            maxParticles: 100,
            connectParticles: false
          }
        }, 
        {
          breakpoint: 320,
          options: {
            maxParticles: 0
     
    // disables particles.js
          }
        }
      ]
    });
  };
