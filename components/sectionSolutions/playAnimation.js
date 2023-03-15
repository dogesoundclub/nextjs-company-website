import React from 'react'
import Lottie from 'react-lottie-player'

import lottieJson from '/public/lotties/playAnimation.json'

export default function playAnimation() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: `336px`, height: `336px` }}
    />
  )
}
