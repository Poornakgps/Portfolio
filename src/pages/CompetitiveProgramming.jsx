import React, { useState } from 'react';
import { Clock, Award, Code, GitBranch, Search, Cpu, ChevronRight, ExternalLink, TrendingUp } from 'lucide-react';
import Section from '../components/ui/Section';
import RatingGraph from '../components/ui/RatingGraph';
import CodeforcesBadge from '../components/ui/CodeforcesBadge';
import CodechefBadge from '../components/ui/CodechefBadge';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import competitiveData from '../data/competitive';

const CompetitiveProgramming = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [selectedContest, setSelectedContest] = useState(null);
  
  const { platforms, problemCategories, contests, bestPerformances, skills } = competitiveData;
  
  const filteredContests = selectedPlatform === 'all' 
    ? contests
    : contests.filter(contest => contest.platform.toLowerCase() === selectedPlatform.toLowerCase());

  return (
    <div>
      <Section 
        title="Competitive Programming Profile" 
        subtitle="My journey through algorithms and problem-solving"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
              <Award className="mr-2 text-blue-600 dark:text-blue-400" size={24} />
              Achievements
            </h3>
            <div className="space-y-6">
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
                  </div>
                </div>
              ))}
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400 font-bold text-lg">JEE</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">JEE Advanced 2021</h4>
                  <p className="text-gray-600 dark:text-gray-300">All India Rank: 9704</p>
                  <p className="text-sm text-blue-600 dark:text-blue-400">Among 0.14M+ candidates</p>
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
              <GitBranch className="mr-2 text-blue-600 dark:text-blue-400" size={24} />
              Rating History
            </h3>
            <div className="h-64">
              <RatingGraph />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <CodeforcesBadge 
                  rating={platforms[0].rating} 
                  username={platforms[0].handle} 
                />
              </div>
              <div>
                <CodechefBadge 
                  rating={platforms[1].rating} 
                  username={platforms[1].handle || "username"}
                />
              </div>
            </div>
          </Card>
        </div>
        
        <Card className="p-6 mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <Search className="mr-2 text-blue-600 dark:text-blue-400" size={24} />
            Problem Solving Skills
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problemCategories.map((category, index) => (
              <div 
                key={index} 
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h4 className="font-medium text-lg text-gray-900 dark:text-white mb-2">
                  {category.title}
                </h4>
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
                <div className="space-y-1">
                  {category.examples.map((example, i) => (
                    <p key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                      <ChevronRight size={14} className="mr-1 text-blue-600 dark:text-blue-400" />
                      {example}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>
        
        <Card className="p-6 mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <TrendingUp className="mr-2 text-blue-600 dark:text-blue-400" size={24} />
            Best Contest Performances
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {bestPerformances.map((performance, index) => (
              <Card key={index} className="border border-gray-200 dark:border-gray-700">
                <Card.Header className="flex justify-between items-start">
                  <div>
                    <Card.Title>{performance.contestName}</Card.Title>
                    <Card.Subtitle>{performance.platform} • {performance.date}</Card.Subtitle>
                  </div>
                  <div className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 rounded-full text-sm font-medium text-blue-800 dark:text-blue-200">
                    Rank: {performance.rank} / {performance.totalParticipants}
                  </div>
                </Card.Header>
                <Card.Body>
                  <h4 className="font-medium mb-2">Problems</h4>
                  <div className="space-y-2">
                    {performance.problems.map((problem, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className={`w-3 h-3 rounded-full mr-2 ${problem.solved ? 'bg-green-500' : 'bg-red-500'}`}></div>
                          <span className="text-sm text-gray-700 dark:text-gray-300">{problem.name}</span>
                        </div>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          problem.complexity === 'Easy' 
                            ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200' 
                            : problem.complexity === 'Medium'
                              ? 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200'
                              : 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200'
                        }`}>
                          {problem.complexity}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Card>
        
        <Card className="p-6 mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <Clock className="mr-2 text-blue-600 dark:text-blue-400" size={24} />
            Contest History
          </h3>
          
          <div className="mb-6 flex flex-wrap gap-2">
            <Button
              variant={selectedPlatform === 'all' ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setSelectedPlatform('all')}
            >
              All Platforms
            </Button>
            <Button
              variant={selectedPlatform === 'codeforces' ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setSelectedPlatform('codeforces')}
            >
              Codeforces
            </Button>
            <Button
              variant={selectedPlatform === 'codechef' ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setSelectedPlatform('codechef')}
            >
              CodeChef
            </Button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Platform
                  </th>
                  <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Contest
                  </th>
                  <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Global Rank
                  </th>
                  <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Participants
                  </th>
                  <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {filteredContests.map((contest, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {contest.platform}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                      {contest.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-blue-600 dark:text-blue-400">
                      {contest.rank}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                      {contest.total}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                      {contest.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <Cpu className="mr-2 text-blue-600 dark:text-blue-400" size={24} />
            Problem-Solving Approach
          </h3>
          
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-gray-900 dark:text-white">{skill.name}</span>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="h-2.5 rounded-full bg-blue-600" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{skill.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
            <h4 className="font-medium text-lg text-gray-900 dark:text-white mb-2">My Competitive Programming Approach</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                <span>I focus on understanding the problem thoroughly before attempting to solve it.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                <span>Break down complex problems into smaller, manageable subproblems.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                <span>Consider edge cases and optimize solutions for time and space complexity.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                <span>Regular practice to maintain and improve problem-solving skills.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                <span>Continuous learning of new algorithms and data structures.</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 flex justify-center">
            <div className="inline-flex space-x-4">
              <a 
                href="https://codeforces.com/profile/chandu1479" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
              >
                <ExternalLink size={16} className="mr-2" /> Codeforces Profile
              </a>
              <a 
                href="https://www.codechef.com/users/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md shadow-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <ExternalLink size={16} className="mr-2" /> CodeChef Profile
              </a>
            </div>
          </div>
        </Card>
      </Section>
    </div>
  );
};

export default CompetitiveProgramming;