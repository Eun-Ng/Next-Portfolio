import React from 'react';
import Lottie from 'react-lottie-player';
import lottieJson from '../public/404.json';

const PageNotFound = () => {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{width: '50vw', height: '50vh', transform: 'translate(50%, 50%)'}}
    />
  );
};

export default PageNotFound;
