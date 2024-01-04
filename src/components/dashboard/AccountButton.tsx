import React from 'react'
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

function AccountButton() {
  return (
    <>
        {/* <UserButton /> */}
        <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className=" inline-flex md:block text-purple-700 bg-white border mr-5 border-purple-700 hover:bg-purple-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-gray-900 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Account 
        </button>
        <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 text-center">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                  <li className='border-b'>
                  <SignInButton>
                    <button type="button" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full">Sign In</button>
                  </SignInButton> 
                  </li>
                  <li>
                  <SignUpButton>
                    <button type="button" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full">Sign Up</button>
                  </SignUpButton> 
                  </li>
                </ul>
            </div>
    </>
  )
}

export default AccountButton