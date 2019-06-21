import React from 'react'
import images from '../assets';

const imageLoader = (imgName) => {
  if (images[imgName]) {
    return <img src={images[imgName]} alt="robo-img" width="100%"/>
  } else {
    return null;
  }
}

export default imageLoader;