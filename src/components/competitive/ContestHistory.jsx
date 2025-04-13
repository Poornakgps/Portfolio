import React, { useState } from 'react';
import { ExternalLink, Calendar, Users, Award } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const ContestHistory = ({ contests }) => {
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  
  const platforms = ['all', ...new Set(contests.map(contest => contest.platform.toLowerCase()))];
  
  const filteredContests = selectedPlatform === 'all'
    ? contests
    : contests.filter(contest => contest.platform.toLowerCase() === selectedPlatform);
  
  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        {platforms.map((platform) => (
          <Button
            key={platform}
            variant={selectedPlatform === platform ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setSelectedPlatform(platform)}
          >
            {platform === 'all' ? 'All Platforms' : 
              platform === 'codeforces' ? 'Codeforces' : 
              platform === 'codechef' ? 'CodeChef' : 
              platform}
          </Button>
        ))}
      </div>
      
      <div className="space-y-4">
        {filteredContests.map((contest, index) => (
          <Card key={index} className="border border-gray-200 dark:border-gray-700">
            <div className="p-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">{contest.name}</h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400">{contest.platform}</p>
                </div>
                <div className="mt-2 sm:mt-0 flex items-center text-gray-600 dark:text-gray-300">
                  <Calendar size={16} className="mr-1" />
                  <span className="text-sm">{contest.date}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-md mr-3">
                    <Award size={18} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Rank</p>
                    <p className="font-semibold">{contest.rank}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-md mr-3">
                    <Users size={18} className="text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Participants</p>
                    <p className="font-semibold">{contest.total}</p>
                  </div>
                </div>
              </div>
              
              {/* Link to contest (optional if you have URLs for each contest) */}
              {contest.url && (
                <div className="mt-4">
                  <a
                    href={contest.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View contest <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              )}
            </div>
          </Card>
        ))}
        
        {filteredContests.length === 0 && (
          <div className="text-center py-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="text-gray-600 dark:text-gray-300">No contests found for the selected platform.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContestHistory;