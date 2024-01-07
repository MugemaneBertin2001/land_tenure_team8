import React from 'react'
import AppLogo from '@/Images/Logo/Logo.png'
import { Image } from 'next/dist/client/image-component'
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

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
            <div className='flex flex-row space-x-3'>
            <input type="text" name="" id=""  className='py-2 px-8 border border-gray-300 rounded-lg ' placeholder='Email...'/>
            <button className='bg-pink-600 p-2 border border-gray-300 rounded-lg text-white font-bold'>Subscribe</button>

            </div>
          </form>
        </div>

      </div>
    </>
  )
}
export default LeftFooterPortion