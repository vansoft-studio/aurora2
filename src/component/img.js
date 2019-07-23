import React from 'react';
import { Slide } from 'react-slideshow-image';

const slideImages = [
  require(`../images/first.jpg`),
  require(`../images/second.jpg`),
  require(`../images/third.jpg`)
];

const properties = {
  duration: 2500,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

const Slideshow = () => {
  return (
    <Slide {...properties}>
      <div className="each-slide">
        <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
        <span> Image Sliders make great landing pages too...</span>
        
          </div>
      </div>
     
      <div className="each-slide">
        <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
          <span-1>Standout by highlighting your  <br/> key strengths...</span-1>
        </div>
      </div>
      <div className="each-slide">
        <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
          <span-2>Brag about your great customer testimonies...</span-2>
        </div>
      </div>
    </Slide>
  )
}
export default Slideshow