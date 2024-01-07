"use client"
import React , {useState} from 'react';
import NavigationItem from './NavigationItem';
import NavBars from './NavBars';
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'




const SideNavbar: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    return (
        
        // <div id="docs-sidebar" className="font-roboto hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform block fixed top-[5.3rem] start-0 bottom-0 z-[60] w-fit bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-gray-800 dark:border-gray-700">
        <div id="docs-sidebar" className="block fixed top-[5.3rem] start-0 bottom-0 z-[60] w-fit bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-gray-800 dark:border-gray-700">
            <ul className='space-y-5'>
                <li className='item-end w-fit'>
                <button
                type="button"
                className="toggle-button self-end"
                onClick={toggleSidebar}
            >
                {sidebarOpen ? (
                    <FaArrowLeft className="icon" />
                ) : (
                    <FaArrowRight className="icon" />
                )}
            </button>
                </li>
                {NavBars.map(({ name, url, icon }, index) => (
                    <NavigationItem key={index} name={name} url={url} icon={icon} hideText = {!sidebarOpen}  />
                ))}
            </ul>
        </div>
    );
};

export default SideNavbar;
