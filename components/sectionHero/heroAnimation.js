import React from 'react'
import Lottie from 'react-lottie-player'

import lottieJson from '/public/lotties/heroAnimation.json'

export default function heroAnimation() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: `100%`, height: `100%` }}
    />
  )
}
