import React from 'react'
import DashboardLayout from '../../components/dashboard/sharedContentWrapper/ContentLayout';
import WelcomeBanner from '../../components/dashboard/MainPartComponents/WelcomeBanner'


function page() {
  return (
    <DashboardLayout>
      <div className='flex-grow bg-white text-black p-8 mt-10'>
        <div className='w-full text-center'>
          <WelcomeBanner />
        </div>
      </div>
    </DashboardLayout>
    
  )
}

export default page