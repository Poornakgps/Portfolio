import React from 'react';

const Stats = ({ stats }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 transition-transform duration-300 hover:transform hover:scale-105"
          >
            <div className="flex items-center">
              <div className={`p-3 rounded-md ${stat.color} bg-opacity-10 dark:bg-opacity-20`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{stat.value}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                <p className="text-xs mt-1 font-medium text-blue-600 dark:text-blue-400">{stat.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;