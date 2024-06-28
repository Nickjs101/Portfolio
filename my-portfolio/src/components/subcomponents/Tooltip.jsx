import React, { useState } from 'react';

const Tooltip = ({ children, text }) => {
  const [visible, setVisible] = useState(false);

  const handleMouseEnter = () => {
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };

  return (
    <div 
      className="relative flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {visible && (
        <div className="absolute bottom-full mb-2 w-max bg-gray-700 text-white text-sm p-2 rounded shadow-lg">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
