import React from 'react'
import { LeftPortion } from './LeftPortion'
import { RightPortion } from './RightPortion'
import AnalyticsContainer from './AnalyticsContainer'
import LandRecords from './LandRecords'
import mockRecords from './LandRecordMochData'

function WelcomeBanner() {
  return (
    <>
    <div className="flex flex-wrap space-4">
    <LeftPortion />
    <RightPortion />
    </div>
    <AnalyticsContainer />
    <LandRecords records={mockRecords} />
    </>
  )
}

export default WelcomeBanner