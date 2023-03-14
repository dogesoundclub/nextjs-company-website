import React from 'react'
import Lottie from 'react-lottie-player'

import lottieJson from '/public/lotties/greenBeacon.json'

export default function statAnimation() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: `100%`, height: `100%` }}
    />
  )
}
