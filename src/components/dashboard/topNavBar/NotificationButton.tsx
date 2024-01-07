// NotificationButton.tsx
import React from 'react';

interface NotificationButtonProps {
  count: number;
}

const NotificationButton: React.FC<NotificationButtonProps> = ({ count }) => {
  return (
    <div className="relative mx-4">
      <button className="flex items-center justify-center relative">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
        </svg>
        {count > 0 && (
          <span className= "bg-red-600 text-[10px] text-white  rounded-full w-4 h-4 flex items-center justify-center absolute -top-1 -right-1 p-[3px]">
            {count}
          </span>
        )}
      </button>
    </div>
  );
};

export default NotificationButton;
