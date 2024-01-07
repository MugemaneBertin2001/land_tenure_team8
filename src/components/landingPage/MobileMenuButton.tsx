import React, { useState } from 'react';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';

function MobileMenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      data-collapse-toggle="navbar-sticky"
      type="button"
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="navbar-sticky"
      aria-expanded={isOpen ? 'true' : 'false'}
      onClick={toggleMenu}
    >
      <span className="sr-only">{isOpen ? 'Close main menu' : 'Open main menu'}</span>
      {isOpen ? <IoCloseOutline className="w-5 h-5" /> : <IoMenuOutline className="w-5 h-5" />}
    </button>
  );
}

export default MobileMenuButton;
