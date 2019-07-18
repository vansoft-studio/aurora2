import React,{ Component } from 'react';

import { Slide } from 'react-slideshow-image';
 


 
const properties = {
  duration: 3000,
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
         
            <span><img src={require(`../images/f.jpg`)} /></span>
          </div>
        
        <div className="each-slide">
          
            <span><img src={require(`../images/se.jpg`)} /></span>
          </div>
       
        <div className="each-slide">
          
            <span><img src={require(`../images/ter.jpg`)} /></span>
          </div>
      
      </Slide>
    )
}
export default Slideshow