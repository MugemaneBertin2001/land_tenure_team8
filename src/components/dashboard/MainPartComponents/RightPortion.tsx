import React from 'react'
import RecordBarChart from './RecordBarChart '
import mockRecords from './LandRecordMochData'

export function RightPortion() {

    return (
      <div className="lg:w-1/2 md:w-full sm:w-full  h-full rounded-[0.6rem] text-md">
      <div className='rounded-[0.6rem] w-full h-full ' >
       <RecordBarChart records={mockRecords} />
       </div>
      </div>
    )
}
