import React from 'react';
import { Award } from 'lucide-react';

const CodechefBadge = ({ rating, username, showText = true }) => {
  // Determine the color and rank based on rating
  const getRankInfo = (rating) => {
    if (rating >= 2500) {
      return { color: '#FFC100', rank: '7★', textColor: 'text-yellow-500' };
    } else if (rating >= 2200) {
      return { color: '#FFC100', rank: '6★', textColor: 'text-yellow-500' };
    } else if (rating >= 2000) {
      return { color: '#FFBF00', rank: '5★', textColor: 'text-yellow-600' };
    } else if (rating >= 1800) {
      return { color: '#62A7A5', rank: '4★', textColor: 'text-teal-600' };
    } else if (rating >= 1600) {
      return { color: '#684273', rank: '3★', textColor: 'text-purple-700' };
    } else if (rating >= 1400) {
      return { color: '#5E2A41', rank: '2★', textColor: 'text-red-900' };
    } else {
      return { color: '#6A6A6A', rank: '1★', textColor: 'text-gray-600' };
    }
  };

  const { color, rank, textColor } = getRankInfo(rating);

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
            CodeChef: {rank}
          </span>
          <span className="text-xs text-gray-600 dark:text-gray-400">
            {rating} • {username}
          </span>
        </div>
      )}
    </div>
  );
};

export default CodechefBadge;