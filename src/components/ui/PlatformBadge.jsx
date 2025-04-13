import React from 'react';
import { Award } from 'lucide-react';
import { getCodeforcesColor, getCodeChefColor, getCodeforcesRank, getCodeChefRank } from '../utils/helpers';

// A unified badge component that works for both Codeforces and CodeChef
const PlatformBadge = ({ platform, rating, username, showText = true }) => {
  const isCodeforces = platform.toLowerCase() === 'codeforces';
  
  // Determine the color and rank based on platform and rating
  const getRankInfo = () => {
    if (isCodeforces) {
      return { 
        color: getCodeforcesColor(rating), 
        rank: getCodeforcesRank(rating), 
        textColor: `text-${getRankTextColor(isCodeforces, rating)}`
      };
    } else {
      return { 
        color: getCodeChefColor(rating), 
        rank: getCodeChefRank(rating), 
        textColor: `text-${getRankTextColor(isCodeforces, rating)}`
      };
    }
  };

  // Helper to get the appropriate text color class
  const getRankTextColor = (isCodeforces, rating) => {
    if (isCodeforces) {
      if (rating >= 2400) return 'red-600';
      if (rating >= 2100) return 'orange-600';
      if (rating >= 1900) return 'purple-700';
      if (rating >= 1600) return 'blue-700';
      if (rating >= 1400) return 'teal-600';
      if (rating >= 1200) return 'green-700';
      return 'gray-600';
    } else {
      if (rating >= 2000) return 'yellow-600';
      if (rating >= 1800) return 'teal-600';
      if (rating >= 1600) return 'purple-700';
      if (rating >= 1400) return 'red-900';
      return 'gray-600';
    }
  };

  const { color, rank, textColor } = getRankInfo();

  return (
    <div className="inline-flex items-center bg-white dark:bg-gray-800 rounded-full py-1 pl-1 pr-3 shadow-sm border border-gray-200 dark:border-gray-700">
      <div 
        className="flex items-center justify-center h-8 w-8 rounded-full mr-2"
        style={{ backgroundColor: `${color}20` }} // 20% opacity of the rank color
      >
        <Award size={18} style={{ color }} />
      </div>
      
      {showText && (
        <div className="flex flex-col">
          <span className={`text-xs ${textColor} dark:${textColor} font-bold`}>
            {platform}: {rank}
          </span>
          <span className="text-xs text-gray-600 dark:text-gray-400">
            {rating} • {username || 'username'}
          </span>
        </div>
      )}
    </div>
  );
};

export default PlatformBadge;