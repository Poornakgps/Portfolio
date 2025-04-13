import React from 'react';
import SkillCard from './SkillCard';

const SkillCategory = ({ category, skills, icon: Icon }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
      <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
        {Icon && <Icon className="mr-2 text-blue-600 dark:text-blue-400" size={24} />}
        {category}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;