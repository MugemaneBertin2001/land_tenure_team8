import React from 'react';
import { IconType } from 'react-icons/lib';

interface NavigationItemProps {
    name: string;
    url: string;
    icon: IconType;
    hideText: boolean;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ name, url, icon: Icon, hideText }) => {
    return (
        <li>
            <a
                className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}
                href={url}
            >
                <Icon className='text-2xl' />
                {!hideText && (
                    <span className="text-lg  ">{name}</span>
                )}
            </a>
        </li>
    );
};

export default NavigationItem;
