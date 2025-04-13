import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  fullWidth = false,
  icon: Icon,
  iconPosition = 'left',
  ...props
}) => {
  // Variant styles
  const variantStyles = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm focus:ring-blue-500',
    secondary: 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-blue-500',
    outline: 'bg-transparent border border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 focus:ring-blue-500',
    ghost: 'bg-transparent text-blue-600 dark:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 focus:ring-blue-500',
    danger: 'bg-red-600 hover:bg-red-700 text-white shadow-sm focus:ring-red-500',
    success: 'bg-green-600 hover:bg-green-700 text-white shadow-sm focus:ring-green-500',
  };

  // Size styles
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  // Disabled state
  const disabledStyles = disabled
    ? 'opacity-50 cursor-not-allowed'
    : 'hover:transform hover:translate-y-[-1px] transition-transform';

  // Full width
  const widthStyles = fullWidth ? 'w-full' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center font-medium rounded-md 
        focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all
        ${variantStyles[variant]} 
        ${sizeStyles[size]} 
        ${disabledStyles} 
        ${widthStyles} 
        ${className}
      `}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="mr-2 -ml-1 h-5 w-5" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="ml-2 -mr-1 h-5 w-5" />}
    </button>
  );
};

export default Button;