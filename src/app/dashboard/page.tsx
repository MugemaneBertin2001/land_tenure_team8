import React from 'react'
import TopNavbar from '@/components/dashboard/topNavBar/TopNavbar'
import SideNavbar from '@/components/dashboard/sidebar/SideNavbar'

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