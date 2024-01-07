import React from 'react'

function RightFooterPortion() {
  return (
    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm uppercase font-bold text-pink-600 dark:text-white">company</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="/about-us" className="hover:underline">About us</a>
                      </li>
                      <li className="mb-4">
                          <a href="/how-it-works" className="hover:underline">How it works</a>
                      </li>
                      <li className="mb-4">
                          <a href="/features" className="hover:underline">Features</a>
                      </li>
                      <li className="mb-4">
                          <a href="/blogs" className="hover:underline">blogs</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm  uppercase  font-bold text-pink-600 dark:text-white">Quick links</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="/community" className="hover:underline ">community</a>
                      </li>
                      <li className="mb-4">
                          <a href="/privacy-policy" className="hover:underline">privacy policy</a>
                      </li>
                      <li className="mb-4">
                          <a href="/terms-of-service" className="hover:underline"> Terms of service</a>
                      </li>
                      <li className="mb-4">
                          <a href="/faqs" className="hover:underline"> FAQs</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-bold text-pink-600  uppercase  dark:text-white">solutions</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://github.com/themesberg/flowbite" className="hover:underline ">For Agents</a>
                      </li>
                      <li className="mb-4">
                          <a href="https://github.com/themesberg/flowbite" className="hover:underline ">For property Owner</a>
                      </li>
                      <li className="mb-4">
                          <a href="https://github.com/themesberg/flowbite" className="hover:underline ">For government parastatals</a>
                      </li>
                  </ul>
              </div>
          </div>
  )
}

export default RightFooterPortion