import React from 'react'
import TopNavbar from '@/components/dashboard/TopNavbar'
import SideNavbar from '@/components/dashboard/SideNavbar'

function page() {
  return (
    <>
    <TopNavbar />
    <div>
      <SideNavbar /> 
    </div>
    </>
  )
}

export default page