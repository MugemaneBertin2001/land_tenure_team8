'use client'
import React, { useState } from 'react';

function ResponsiveNavbar() {
  const [activeLink, setActiveLink] = useState('#HeroSection');

  const handleItemClick = (href:string) => {
    setActiveLink(href);
  };

  return (
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <NavItem href="#HeroSection" text="Home" activeLink={activeLink} onItemClick={handleItemClick} />
        <NavItem href="#about-section" text="Company" activeLink={activeLink} onItemClick={handleItemClick} />
        <NavItem href="#features" text="Features" activeLink={activeLink} onItemClick={handleItemClick} />
        <NavItem href="#solutions" text="Solutions" activeLink={activeLink} onItemClick={handleItemClick} />
        <NavItem href="#contact-us" text="Blog" activeLink={activeLink} onItemClick={handleItemClick} />
      </ul>
    </div>
  );
}

interface NavItemProps {
    href: string;
    text: string; // Define the type for the text prop
    activeLink: string;
    onItemClick: (href: string) => void;
  }

function NavItem({ href, text, activeLink, onItemClick }: NavItemProps) {
    const isActive = href === activeLink;
  
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault(); // Prevent default link behavior
  
      onItemClick(href);
  
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <li>
        <a
          href={href}
          onClick={handleClick}
          className={`block py-2 px-3 text-gray-900 rounded ${
            isActive
              ? 'bg-blue-700 text-white'
              : 'hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
          }`}
          aria-current={isActive ? 'page' : undefined}
        >
          {text}
        </a>
      </li>
    );
  }
  

export default ResponsiveNavbar;
