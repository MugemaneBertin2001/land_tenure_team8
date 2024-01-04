// UploadButton.tsx
import React from 'react';

interface UploadButtonProps {
//   onClick: () => void; // Define the onClick function
}

const UploadButton: React.FC<UploadButtonProps> = ({  }) => {
  return (
    <button
    //   onClick={onClick}
      className="flex items-center justify-center bg-pink-900 text-white rounded-lg px-4 py-2"  
    >
       <span className='mr-10'>
        Upload
        </span> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
         <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
        </svg>

    </button>
  );
};

export default UploadButton;
