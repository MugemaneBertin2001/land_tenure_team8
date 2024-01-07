// UploadButton.tsx
import React from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';

interface UploadButtonProps {
//   onClick: () => void; // Define the onClick function
}

const UploadButton: React.FC<UploadButtonProps> = ({  }) => {
  return (
    <div className="flex items-center  rounded-lg px-4">
      <div className="relative">
    <button
    //   onClick={onClick}
      className="py-2 px-8 border border-gray-300 rounded-lg flex items-center justify-center bg-pink-900 text-white "  
    >
       <span className='mr-10'>
        Upload
        </span> 
        <FaCloudUploadAlt />

    </button>
    </div>
    </div>
  );
};

export default UploadButton;
