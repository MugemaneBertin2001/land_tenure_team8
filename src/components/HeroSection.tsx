"use client"
import React from 'react'
import { SignInButton } from "@clerk/nextjs";

function HeroSection() {
  return (
    <div className='mt-10 bg-cover bg-center h-[94vh] items-center ' id='HeroSection' >
        <div className="hero-section  text-white py-16 px-4 text-center my-auto">
            <p className="text-3xl md:text-5xl	 leading-relaxed ">
            Empowering Land Ownership <br />
            with
            <span className='text-[#F62898] ml-3'>
                Blockchain Technology
            </span> 
            </p>
            <p className='text-sm'>
            Unlock the Future of Secure, Transparent, and Efficient Land Records Management
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 my-10">
                <button className="bg-purple-900 text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-300 ease-in-out">
                    Get Started
                </button>
                <SignInButton>
                <button type="button" className=" block md:hidden text-purple-700 bg-white border mr-5 border-purple-700 hover:bg-purple-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-gray-900 dark:hover:bg-purple-700 dark:focus:ring-purple-800" >Sign In</button>
                </SignInButton> 
        </div>
    </div>
    </div>
  )
}

export default HeroSection