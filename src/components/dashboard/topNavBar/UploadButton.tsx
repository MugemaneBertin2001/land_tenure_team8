// UploadButton.tsx
import React from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';

interface UploadButtonProps {
//   onClick: () => void; // Define the onClick function
}

const UploadButton: React.FC<UploadButtonProps> = ({  }) => {
  return (
    <button
    //   onClick={onClick}
      className="flex items-center justify-center bg-pink-900 text-white rounded-lg px-12 py-2"  
    >
       <span className='mr-10'>
        Upload
        </span> 
        <FaCloudUploadAlt />

    </button>
  );
};

export default UploadButton;
