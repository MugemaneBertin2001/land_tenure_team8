import React from 'react'
import AppLogo from '@/Images/Logo/Logo.png'
import { Image } from 'next/dist/client/image-component'
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import IconInput from '../ContactSection/IconInput';
import {MailIcon } from '@heroicons/react/outline';

function LeftFooterPortion() {
  return (
    <>
      <div className="mb-6 md:mb-0">
        <div className='w-full mx-auto mb-5 '>
              <a href="" className="flex items-center">
              <Image src={AppLogo} className="h-20 w-4/5" alt="App Logo" />
              </a>
        </div>
        <div className='w-full mx-auto mt-5'>
              <p className="text-md text-pink-600 font-bold text-xl">
                Follow us on:
              </p>
              <div className="flex space-x-4 mt-5">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-white hover:text-blue-400 cursor-pointer" size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-white hover:text-blue-600 cursor-pointer" size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-white hover:text-pink-500 cursor-pointer" size={24} />
              </a>
            </div>
        </div>
        <div>
          <form action="" method="post">
            <p className='text-xl font-semibold text-white my-6'>
              Subscribe to Our newsletter
            </p>
            <div className="flex flex-col space-y-3">
            <div className="relative">
                <input type="email" placeholder="Email..." className="pl-10 py-2 pr-3 border border-gray-300 rounded-lg w-full" />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke-linecap="round" stroke-linejoin="round" strokewidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M20 5H4C2.89543 5 2 5.89543 2 7V17C2 18.1046 2.89543 19 4 19H20C21.1046 19 22 18.1046 22 17V7C22 5.89543 21.1046 5 20 5Z" />
                        <path d="M22 7L12 13L2 7" />
                    </svg>
                </div>
            </div>
            <button className="bg-pink-600 py-2 px-8 border border-gray-300 rounded-lg text-white font-bold w-full">Subscribe</button>
            </div>

          </form>
        </div>

      </div>
    </>
  )
}
export default LeftFooterPortion