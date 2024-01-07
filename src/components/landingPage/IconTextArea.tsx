import React from 'react';

interface IconInputProps {
  icon: React.ElementType;
  placeholder: string;
  [key: string]: any; // Allow any other props
}

const IconTextArea: React.FC<IconInputProps> = ({ icon: Icon, placeholder, ...rest }) => {
  return (
    <div className="relative">
      
      
    </div>
  );
};
export default  IconTextArea