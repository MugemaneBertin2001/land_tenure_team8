"use client"
import React from 'react'
import AppLogo from '@/Images/Logo/Logo.png'
import { Image } from 'next/dist/client/image-component'
import User from '@/components/dashboard/topNavBar/User'
import NotificationButton from '@/components/dashboard/topNavBar/NotificationButton'
import UploadButton from './UploadButton'
import SearchBar from './SearchBar'
import MobileMenuButton from '@/components/landingPage/MobileMenuButton'

const TopNavbar = ()=>{
    return(   
        <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse w-20 ">
        <Image src={AppLogo} className="h-13 w-25" alt="App Logo" />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gp-x-10">
            <NotificationButton  count={20}/>
            <User />

        <MobileMenuButton />
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <div className="flex flex-col items-center space-y-3 p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <SearchBar onSearch={()=>{}} />
            <UploadButton />
            
        </div>
        </div>
        </div>
        </nav>

    )
}
export default TopNavbar