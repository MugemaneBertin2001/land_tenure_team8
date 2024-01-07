import React from 'react'
import DashboardLayout from '../../components/dashboard/sharedContentWrapper/ContentLayout';


function page() {
  return (
    <DashboardLayout>
      <div className='flex-grow bg-white text-black p-8'>
        <div className='w-full text-center'>
          <h1 className='text-4xl font-bold'>Settings</h1>
          <p className='mt-4 text-lg'>Settings content goes here...</p>
        </div>
      </div>
    </DashboardLayout>
    
  )
}

export default page