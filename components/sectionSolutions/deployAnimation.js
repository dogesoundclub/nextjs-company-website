import React from 'react'
import Lottie from 'react-lottie-player'

import lottieJson from '/public/lotties/deployAnimation.json'

export default function deployAnimation() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: `336px`, height: `336px` }}
    />
  )
}
