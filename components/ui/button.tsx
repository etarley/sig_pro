import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'google'; // Add 'google'
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  icon,
  children,
  ...props
}) => {
  let buttonClass =
    'py-2 px-4 rounded focus:outline-none flex items-center justify-center gap-2';

  switch (variant) {
    case 'primary':
      buttonClass += ' bg-teal-500 hover:bg-teal-600 text-white';
      break;
    case 'secondary':
      buttonClass += ' bg-gray-500 hover:bg-gray-600 text-white';
      break;
    case 'tertiary':
      buttonClass += ' text-teal-500 hover:text-teal-600 bg-transparent';
      break;
    case 'google': // Add this case
      buttonClass += ' bg-gray-200 hover:bg-gray-300 text-black';
      break;
  }

  return (
    <button className={buttonClass} {...props}>
      {icon}
      {children}
    </button>
  );
};
