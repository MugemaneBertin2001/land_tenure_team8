import React from 'react'

export function LeftPortion() {

    return (
    <div className="lg:w-1/2 md:w-full sm:w-full  h-full rounded-[0.6rem] text-md">
    <div id='left-portion'className='rounded-[0.6rem] w-full h-full p-4' >
      <h1 className='text-center text-3xl text-white'>
      Welcome to  <span className='text-pink-600'>Landvault</span>
      </h1>
      <p className='text-sm text-white py-3'>
      Secure your transaction process with us when you buy or sell properties globally
      </p>
      <div className='container mx-auto  text-center'>
      <button className="bg-pink-900 text-white p-2 rounded focus:outline-none focus:ring focus:border-pink-900 text-sm">
      Start Transactions
      </button>
      </div>
    </div>
    </div>
    )
}
