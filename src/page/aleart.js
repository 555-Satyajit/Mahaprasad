// src/components/ui/alert.js
import React from 'react';

export const Alert = ({ variant, children }) => {
  const variantClass = variant === 'destructive' ? 'bg-red-600 text-white' : 'bg-green-600 text-white';
  return (
    <div className={`p-4 mb-4 rounded-md ${variantClass}`}>
      {children}
    </div>
  );
};

export const AlertDescription = ({ children }) => {
  return <p>{children}</p>;
};
