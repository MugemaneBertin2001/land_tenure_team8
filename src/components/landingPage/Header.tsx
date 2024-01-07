"use client"
import React from 'react'
import AppLogo from '@/Images/Logo/Logo.png'
import { Image } from 'next/dist/client/image-component'
import AccountButton from '../dashboard/topNavBar/AccountButton'
import MobileMenuButton from './MobileMenuButton'
import ResponsiveNavbar from './ResponsiveNavbar'
function Header() {
  return(
<nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse w-20 ">
      <Image src={AppLogo} className="h-13 w-25" alt="App Logo" />
  </a>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
    <AccountButton />
    <MobileMenuButton />
  </div>
  <ResponsiveNavbar />
  </div>
</nav>


  )
}

export default Header