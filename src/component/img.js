import React from 'react';
import { Slide } from 'react-slideshow-image';

const slideImages = [
  require(`../images/first.jpg`),/*images is copyed in slide images */
  require(`../images/second.jpg`),
  require(`../images/third.jpg`)
];

const properties = {  /*properties of image slider for the transmition speed,duration etc */
  duration: 2500,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

const Slideshow = () => { /*function call for the Slideshow properties and called 3 images */
  return (
    <Slide {...properties}>
      <div className="each-slide">
        <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
          <span> Image Sliders make great landing pages too...</span>

        </div>
      </div>

      <div className="each-slide">
        <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
          <span-1>Standout by highlighting your  <br /> key strengths...</span-1>
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