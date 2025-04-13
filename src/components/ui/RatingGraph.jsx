import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Legend } from 'recharts';
import { ChevronDown } from 'lucide-react';

const RatingChart = ({ ratingData }) => {
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  
  const { codeforces, codechef } = ratingData;
  
  // Combined data for 'all' view
  const combinedData = [
    ...codeforces.map(item => ({
      ...item,
      platform: 'Codeforces',
      color: '#3B82F6'
    })),
    ...codechef.map(item => ({
      ...item,
      platform: 'CodeChef',
      color: '#EC4899'
    }))
  ].sort((a, b) => new Date(a.date) - new Date(b.date));
  
  // Get data based on selected platform
  const chartData = selectedPlatform === 'all' 
    ? combinedData 
    : selectedPlatform === 'codeforces' 
      ? codeforces 
      : codechef;
  
  // Define domain values
  const yDomain = [
    Math.min(...combinedData.map(item => item.rating)) - 50,
    Math.max(...combinedData.map(item => item.rating)) + 50
  ];
  
  // Rating threshold reference lines
  const referenceLines = [
    { y: 1200, label: 'Pupil', color: '#008000' },
    { y: 1400, label: 'Specialist', color: '#03A89E' },
    { y: 1600, label: 'Expert', color: '#0000FF' },
    { y: 1900, label: 'Candidate Master', color: '#AA00AA' },
    { y: 2100, label: 'Master', color: '#FF8C00' }
  ];
  
  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      
      return (
        <div className="bg-white dark:bg-gray-800 p-3 border border-gray-200 dark:border-gray-700 rounded shadow-lg">
          <p className="font-semibold">{data.contest}</p>
          <p style={{ color: data.color || payload[0].color }}>
            {data.platform || (selectedPlatform === 'codeforces' ? 'Codeforces' : 'CodeChef')}: {data.rating}
          </p>
          {data.date && <p className="text-xs text-gray-500 dark:text-gray-400">{data.date}</p>}
        </div>
      );
    }
    return null;
  };
  
  return (
    <div className="w-full">
      <div className="mb-4 flex justify-end">
        <button
          onClick={() => setSelectedPlatform(selectedPlatform === 'all' ? 'codeforces' : selectedPlatform === 'codeforces' ? 'codechef' : 'all')}
          className="inline-flex items-center px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
        >
          {selectedPlatform === 'all' ? 'All Platforms' : 
           selectedPlatform === 'codeforces' ? 'Codeforces' : 'CodeChef'}
          <ChevronDown size={16} className="ml-1" />
        </button>
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
                return value.substring(0, 8) + '...';
              }}
            />
            
            <YAxis 
              domain={yDomain}
              axisLine={{ stroke: '#374151', opacity: 0.3 }}
              tick={{ fill: '#6B7280', fontSize: 12 }}
            />
            
            <Tooltip content={<CustomTooltip />} />
            
            {/* Reference lines */}
            {selectedPlatform !== 'codechef' && referenceLines.map((line, index) => (
              <ReferenceLine key={index} y={line.y} stroke={line.color} strokeDasharray="3 3" />
            ))}
            
            {selectedPlatform === 'all' ? (
              <>
                <Legend />
                <Line 
                  name="Codeforces"
                  type="monotone" 
                  dataKey="rating" 
                  data={chartData.filter(item => item.platform === 'Codeforces')} 
                  stroke="#3B82F6" 
                  strokeWidth={2}
                  dot={{ r: 4, stroke: '#3B82F6', strokeWidth: 2, fill: '#FFFFFF' }}
                  activeDot={{ r: 6, stroke: '#3B82F6', strokeWidth: 2, fill: '#3B82F6' }}
                />
                <Line 
                  name="CodeChef"
                  type="monotone" 
                  dataKey="rating" 
                  data={chartData.filter(item => item.platform === 'CodeChef')} 
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
      
      <div className="mt-2 text-xs text-center text-gray-500 dark:text-gray-400">
        {selectedPlatform !== 'codechef' && (
          <div className="flex justify-center flex-wrap gap-x-4 gap-y-1">
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

export default RatingChart;