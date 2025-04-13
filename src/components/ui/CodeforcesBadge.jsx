import React from 'react';
import { Award } from 'lucide-react';

const CodeforcesBadge = ({ rating, username, showText = true }) => {
  // Determine the color and rank based on rating
  const getRankInfo = (rating) => {
    if (rating >= 3000) {
      return { color: '#000000', rank: 'Legendary Grandmaster', textColor: 'text-gray-900' };
    } else if (rating >= 2600) {
      return { color: '#FF0000', rank: 'International Grandmaster', textColor: 'text-red-600' };
    } else if (rating >= 2400) {
      return { color: '#FF0000', rank: 'Grandmaster', textColor: 'text-red-600' };
    } else if (rating >= 2300) {
      return { color: '#FF8C00', rank: 'International Master', textColor: 'text-orange-600' };
    } else if (rating >= 2100) {
      return { color: '#FF8C00', rank: 'Master', textColor: 'text-orange-600' };
    } else if (rating >= 1900) {
      return { color: '#AA00AA', rank: 'Candidate Master', textColor: 'text-purple-700' };
    } else if (rating >= 1600) {
      return { color: '#0000FF', rank: 'Expert', textColor: 'text-blue-700' };
    } else if (rating >= 1400) {
      return { color: '#03A89E', rank: 'Specialist', textColor: 'text-teal-600' };
    } else if (rating >= 1200) {
      return { color: '#008000', rank: 'Pupil', textColor: 'text-green-700' };
    } else {
      return { color: '#808080', rank: 'Newbie', textColor: 'text-gray-600' };
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
            Codeforces: {rank}
          </span>
          <span className="text-xs text-gray-600 dark:text-gray-400">
            {rating} • {username}
          </span>
        </div>
      )}
    </div>
  );
};

export default CodeforcesBadge;