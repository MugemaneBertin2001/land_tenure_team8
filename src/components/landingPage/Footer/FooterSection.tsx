import React from 'react'
import LeftFooterPortion from './LeftFooterPortion'
import RightFooterPortion from './RightFooterPortion'


function FooterSection() {
  const now = new Date()
  return (
<footer className="  " id="footer">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <LeftFooterPortion />
          <RightFooterPortion />    
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 mx-auto font-bold"> {`${now.getFullYear()}`} <a href="https://flowbite.com/" className="hover:underline">Land Vault</a>. All Rights Reserved.
          </span>
      </div>
    </div>
</footer>

  )}

export default FooterSection