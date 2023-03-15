import React from 'react'
import Lottie from 'react-lottie-player'

import lottieJson from '/public/lotties/promoteAnimation.json'

export default function promoteAnimation() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: `336px`, height: `336px` }}
    />
  )
}
