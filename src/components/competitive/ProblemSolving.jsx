import React, { useState } from 'react';
import { ChevronRight, Info } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const ProblemSolving = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  
  const handleCategoryClick = (index) => {
    setActiveCategory(activeCategory === index ? null : index);
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category, index) => (
        <Card 
          key={index} 
          className={`border border-gray-200 dark:border-gray-700 transition-all ${
            activeCategory === index ? 'ring-2 ring-blue-500 dark:ring-blue-400' : ''
          }`}
          hover
          onClick={() => handleCategoryClick(index)}
        >
          <div className="p-5">
            <div className="flex justify-between items-start mb-4">
              <h4 className="font-medium text-lg text-gray-900 dark:text-white">
                {category.title}
              </h4>
              <Button
                variant="ghost"
                size="sm"
                className="p-1"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCategoryClick(index);
                }}
              >
                <Info size={18} className="text-gray-500 dark:text-gray-400" />
              </Button>
            </div>
            
            <div className="flex items-center mb-3">
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mr-2">
                <div 
                  className="h-2.5 rounded-full bg-blue-600"
                  style={{ width: `${category.expertise}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{category.expertise}%</span>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Solved: <span className="font-semibold text-blue-600 dark:text-blue-400">{category.solved}+ problems</span>
            </p>
            
            {activeCategory === index && (
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  {category.description}
                </p>
                <h5 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Example Problems:</h5>
                <div className="space-y-1">
                  {category.examples.map((example, i) => (
                    <p key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                      <ChevronRight size={14} className="mr-1 text-blue-600 dark:text-blue-400" />
                      {example}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ProblemSolving;