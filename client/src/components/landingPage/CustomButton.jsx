import React from 'react';

const CustomButton = ({ label, onClick, action, type, className }) => {
  const isPrimary = type === 'primary';
  return (
    <button
      className={`w-full border border-sky-blue rounded-full text-lg font-semibold p-2.5 
      ${isPrimary ? 'bg-sky-blue text-white' : 'text-sky-blue'} 
      ${className ? className : ''}`}
      type={action || 'submit'}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default CustomButton;
