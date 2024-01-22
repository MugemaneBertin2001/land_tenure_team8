import React from 'react'
import { LeftPortion } from './LeftPortion'
import { RightPortion } from './RightPortion'


function WelcomeBanner() {
  return (
    <div className="flex flex-wrap">
    <LeftPortion />
    <RightPortion />
  </div>
  )
}

export default WelcomeBanner