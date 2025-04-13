import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  hover = false,
  onClick = null,
  as = 'div'
}) => {
  const Component = as;
  
  const baseStyles = "bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden";
  const hoverStyles = hover ? "transition-all duration-300 hover:shadow-xl hover:transform hover:translate-y-[-4px]" : "";
  const clickableStyles = onClick ? "cursor-pointer" : "";
  
  return (
    <Component 
      className={`${baseStyles} ${hoverStyles} ${clickableStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </Component>
  );
};

// Card subcomponents
Card.Header = ({ children, className = '' }) => (
  <div className={`p-6 border-b border-gray-200 dark:border-gray-700 ${className}`}>
    {children}
  </div>
);

Card.Body = ({ children, className = '' }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

Card.Footer = ({ children, className = '' }) => (
  <div className={`p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 ${className}`}>
    {children}
  </div>
);

Card.Title = ({ children, className = '' }) => (
  <h3 className={`text-lg font-bold text-gray-900 dark:text-white ${className}`}>
    {children}
  </h3>
);

Card.Subtitle = ({ children, className = '' }) => (
  <p className={`text-sm text-gray-600 dark:text-gray-400 ${className}`}>
    {children}
  </p>
);

export default Card;