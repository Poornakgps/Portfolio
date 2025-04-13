import React from 'react';
import { Award, ExternalLink, TrendingUp } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import competitiveData from '../data/competitive';

// Platform badge component
const PlatformBadge = ({ platform, rating, username, showText = true }) => {
  // Determine the color and rank based on platform
  const getRankInfo = () => {
    if (platform.toLowerCase() === 'codeforces') {
      if (rating >= 1600) return { color: '#0000FF', rank: 'Expert', textColor: 'text-blue-700' };
      // Other Codeforces ranks could be added here
      return { color: '#808080', rank: 'Newbie', textColor: 'text-gray-600' };
    } else {
      if (rating >= 1800) return { color: '#62A7A5', rank: '4★', textColor: 'text-teal-600' };
      // Other CodeChef ranks could be added here
      return { color: '#6A6A6A', rank: '1★', textColor: 'text-gray-600' };
    }
  };

  const { color, rank, textColor } = getRankInfo();

  return (
    <div className="inline-flex items-center bg-white dark:bg-gray-800 rounded-full py-1 pl-1 pr-3 shadow-sm border border-gray-200 dark:border-gray-700">
      <div 
        className="flex items-center justify-center h-8 w-8 rounded-full mr-2"
        style={{ backgroundColor: `${color}20` }}
      >
        <Award size={18} style={{ color }} />
      </div>
      
      {showText && (
        <div className="flex flex-col">
          <span className={`text-xs ${textColor} font-bold`}>
            {platform}: {rank}
          </span>
          <span className="text-xs text-gray-600 dark:text-gray-400">
            {rating} • {username || "username"}
          </span>
        </div>
      )}
    </div>
  );
};

const CompetitiveProgramming = () => {
  // Extend with an additional contest
  const additionalContest = {
    platform: 'Codeforces',
    contestName: 'Codeforces Round 970 (Div. 3)',
    rank: 411,
    totalParticipants: '20k+',
    date: 'Apr 2025',
    problems: []
  };
  
  // Get platforms data from competitive data
  const { platforms } = competitiveData;
  
  // Create combined best performances with the additional contest
  const bestPerformances = [
    additionalContest,
    ...competitiveData.bestPerformances
  ];
  
  return (
    <div>
      <Section 
        title="Competitive Programming Profile" 
        subtitle="My journey through algorithms and problem-solving"
      >
        {/* Competitive Platforms */}
        <Card className="p-6 mb-8">
          <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <Award className="mr-2 text-blue-600 dark:text-blue-400" size={24} />
            Competitive Platforms
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">
                    {platform.name === 'Codeforces' ? 'CF' : 'CC'}
                  </span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">{platform.name}</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {platform.rank} (Rating: {platform.rating})
                  </p>
                  <p className="text-sm text-blue-600 dark:text-blue-400">{platform.percentile} of contestants globally</p>
                  <a 
                    href={platform.profileUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View profile <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {platforms.map((platform, index) => (
              <PlatformBadge 
                key={index}
                platform={platform.name}
                rating={platform.rating}
                username={platform.handle}
              />
            ))}
          </div>
        </Card>
        
        {/* Best Contest Performances */}
        <Card className="p-6 mb-8">
          <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <TrendingUp className="mr-2 text-blue-600 dark:text-blue-400" size={24} />
            Best Contest Performances
          </h3>
          
          <div className="space-y-6">
            {bestPerformances.map((performance, index) => (
              <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <div>
                    <h4 className="font-medium text-lg text-gray-900 dark:text-white">{performance.contestName}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {performance.platform} • {performance.date}
                    </p>
                  </div>
                  <div className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 rounded-full text-sm font-medium text-blue-800 dark:text-blue-200">
                    Rank: {performance.rank}/{performance.totalParticipants}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
        
        {/* External Links */}
        <div className="flex justify-center">
          <div className="inline-flex space-x-4">
            <a 
              href="https://codeforces.com/profile/chandu1479" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              <ExternalLink size={16} className="mr-2" /> Codeforces Profile
            </a>
            <a 
              href="https://www.codechef.com/users/chandukgpian" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 text-sm font-medium rounded-md shadow-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <ExternalLink size={16} className="mr-2" /> CodeChef Profile
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default CompetitiveProgramming;