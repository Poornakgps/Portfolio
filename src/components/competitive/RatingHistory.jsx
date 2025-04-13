import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Legend } from 'recharts';
import { ChevronDown } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { getCodeforcesColor, getCodeChefColor } from '../../utils/helpers';

const RatingHistory = ({ ratingData }) => {
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  
  const { codeforces, codechef } = ratingData;
  
  // Prepare combined data for 'all' view
  const combinedData = [];
  
  // Add identifiers to distinguish platforms
  codeforces.forEach(item => {
    combinedData.push({
      ...item,
      platform: 'Codeforces',
      color: getCodeforcesColor(item.rating)
    });
  });
  
  codechef.forEach(item => {
    combinedData.push({
      ...item,
      platform: 'CodeChef',
      color: getCodeChefColor(item.rating)
    });
  });
  
  // Sort by date
  combinedData.sort((a, b) => new Date(a.date) - new Date(b.date));
  
  // Get the data based on the selected platform
  const chartData = selectedPlatform === 'all' 
    ? combinedData 
    : selectedPlatform === 'codeforces' 
      ? codeforces 
      : codechef;
  
  // Define domain values based on platform
  let yDomain = [1000, 2000]; // Default range
  
  if (selectedPlatform === 'codeforces') {
    yDomain = [1200, Math.max(...codeforces.map(item => item.rating)) + 100];
  } else if (selectedPlatform === 'codechef') {
    yDomain = [1400, Math.max(...codechef.map(item => item.rating)) + 100];
  } else {
    yDomain = [1200, Math.max(...combinedData.map(item => item.rating)) + 100];
  }
  
  // Define reference lines for rating thresholds
  const referenceLines = selectedPlatform === 'codeforces' 
    ? [
        { y: 1200, label: 'Pupil', color: getCodeforcesColor(1200) },
        { y: 1400, label: 'Specialist', color: getCodeforcesColor(1400) },
        { y: 1600, label: 'Expert', color: getCodeforcesColor(1600) },
        { y: 1900, label: 'Candidate Master', color: getCodeforcesColor(1900) }
      ]
    : selectedPlatform === 'codechef'
    ? [
        { y: 1400, label: '2★', color: getCodeChefColor(1400) },
        { y: 1600, label: '3★', color: getCodeChefColor(1600) },
        { y: 1800, label: '4★', color: getCodeChefColor(1800) },
        { y: 2000, label: '5★', color: getCodeChefColor(2000) }
      ]
    : [];
  
  // Custom tooltip component
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      
      return (
        <Card className="p-3 !bg-white dark:!bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg">
          <p className="font-semibold">{data.contest}</p>
          <p style={{ color: data.color || payload[0].color }}>
            {data.platform || selectedPlatform === 'codeforces' ? 'Codeforces' : 'CodeChef'}: {data.rating}
          </p>
          {data.date && <p className="text-xs text-gray-500 dark:text-gray-400">{data.date}</p>}
        </Card>
      );
    }
    return null;
  };
  
  return (
    <div>
      <div className="mb-4 flex justify-end">
        <div className="relative inline-block text-left">
          <div>
            <Button
              onClick={() => setSelectedPlatform(selectedPlatform === 'all' ? 'codeforces' : selectedPlatform === 'codeforces' ? 'codechef' : 'all')}
              variant="secondary"
              size="sm"
              icon={ChevronDown}
              iconPosition="right"
            >
              {selectedPlatform === 'all' ? 'All Platforms' : 
               selectedPlatform === 'codeforces' ? 'Codeforces' : 'CodeChef'}
            </Button>
          </div>
        </div>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart 
            data={chartData}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.2} />
            
            <XAxis 
              dataKey={selectedPlatform === 'all' ? 'date' : 'contest'} 
              tick={{ fill: '#6B7280', fontSize: 12 }}
              axisLine={{ stroke: '#374151', opacity: 0.3 }}
              tickFormatter={(value) => {
                if (selectedPlatform === 'all') {
                  const date = new Date(value);
                  return `${date.getMonth() + 1}/${date.getFullYear().toString().substr(-2)}`;
                }
                return value.substring(0, 10) + '...';
              }}
            />
            
            <YAxis 
              domain={yDomain}
              axisLine={{ stroke: '#374151', opacity: 0.3 }}
              tick={{ fill: '#6B7280', fontSize: 12 }}
            />
            
            <Tooltip content={<CustomTooltip />} />
            
            {/* Reference lines for rating thresholds */}
            {referenceLines.map((line, index) => (
              <ReferenceLine key={index} y={line.y} stroke={line.color} strokeDasharray="3 3" />
            ))}
            
            {selectedPlatform === 'all' ? (
              <>
                <Legend />
                <Line 
                  name="Codeforces"
                  type="monotone" 
                  dataKey="rating" 
                  data={codeforces.map(item => ({ ...item, platform: 'Codeforces' }))} 
                  stroke="#3B82F6" 
                  strokeWidth={2}
                  dot={{ r: 4, stroke: '#3B82F6', strokeWidth: 2, fill: '#FFFFFF' }}
                  activeDot={{ r: 6, stroke: '#3B82F6', strokeWidth: 2, fill: '#3B82F6' }}
                />
                <Line 
                  name="CodeChef"
                  type="monotone" 
                  dataKey="rating" 
                  data={codechef.map(item => ({ ...item, platform: 'CodeChef' }))} 
                  stroke="#EC4899" 
                  strokeWidth={2}
                  dot={{ r: 4, stroke: '#EC4899', strokeWidth: 2, fill: '#FFFFFF' }}
                  activeDot={{ r: 6, stroke: '#EC4899', strokeWidth: 2, fill: '#EC4899' }}
                />
              </>
            ) : (
              <Line 
                type="monotone" 
                dataKey="rating" 
                stroke={selectedPlatform === 'codeforces' ? '#3B82F6' : '#EC4899'} 
                strokeWidth={2}
                dot={{ 
                  r: 4, 
                  stroke: selectedPlatform === 'codeforces' ? '#3B82F6' : '#EC4899', 
                  strokeWidth: 2, 
                  fill: '#FFFFFF' 
                }}
                activeDot={{ 
                  r: 6, 
                  stroke: selectedPlatform === 'codeforces' ? '#3B82F6' : '#EC4899', 
                  strokeWidth: 2, 
                  fill: selectedPlatform === 'codeforces' ? '#3B82F6' : '#EC4899' 
                }}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 text-xs text-center text-gray-500 dark:text-gray-400">
        {selectedPlatform === 'codeforces' && (
          <div className="flex justify-center space-x-4">
            {referenceLines.map((line, index) => (
              <div key={index} className="flex items-center">
                <div 
                  className="w-3 h-3 rounded-full mr-1"
                  style={{ backgroundColor: line.color }}
                ></div>
                <span>{line.label}</span>
              </div>
            ))}
          </div>
        )}
        {selectedPlatform === 'codechef' && (
          <div className="flex justify-center space-x-4">
            {referenceLines.map((line, index) => (
              <div key={index} className="flex items-center">
                <div 
                  className="w-3 h-3 rounded-full mr-1"
                  style={{ backgroundColor: line.color }}
                ></div>
                <span>{line.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RatingHistory;