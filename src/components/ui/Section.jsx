import React from 'react';

const Section = ({ 
  title, 
  subtitle, 
  children, 
  className = '', 
  titleClassName = '',
  subtitleClassName = ''
}) => {
  return (
    <section className={`py-12 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className={`text-3xl font-bold text-gray-900 dark:text-white tracking-tight sm:text-4xl ${titleClassName}`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`mt-3 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300 ${subtitleClassName}`}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;