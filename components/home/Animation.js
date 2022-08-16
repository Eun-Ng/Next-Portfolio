import React from 'react';
import Lottie from 'react-lottie-player';

import lottieJson from '../../public/rocketAnimation.json';

export default function Animation() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{width: 400, height: 400}}
    />
  );
}
