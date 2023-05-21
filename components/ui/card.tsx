import React, { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export const Card: React.FC<CardProps> = ({ title, children, ...props }) => {
  return (
    <div className='bg-white rounded-lg shadow-lg p-8' {...props}>
      {title && <h2 className='text-2xl font-bold mb-4'>{title}</h2>}
      {children}
    </div>
  );
};
