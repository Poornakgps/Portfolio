import React from 'react';

const SkillCard = ({ skill }) => {
  const { name, level, color } = skill;
  
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-900 dark:text-white">{name}</span>
        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className={`h-2.5 rounded-full ${color}`} 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillCard;