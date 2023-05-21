import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, ...props }) => {
  const inputClass =
    'appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-teal-400';

  return (
    <div className='mb-4'>
      {label && (
        <label className='block text-gray-700 font-bold mb-2'>{label}</label>
      )}
      <input className={inputClass} {...props} />
    </div>
  );
};
