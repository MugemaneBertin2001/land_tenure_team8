"use client"
import React from 'react'
import { SignInButton } from "@clerk/nextjs";

function HeroSection() {
  return (
    <div className='mt-10 bg-cover bg-center h-[94vh] items-center ' id='HeroSection' >
        <div className="hero-section  text-white py-16 px-4 text-center ">
            <p className="text-3xl md:text-5xl my-10 	leading-relaxed ">
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
        </div>
    </div>
    </div>
  )
}

export default HeroSection