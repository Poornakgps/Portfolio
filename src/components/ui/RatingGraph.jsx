import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

const RatingGraph = () => {
  // Sample rating history data - you would replace this with your actual data
  const codeforcesData = [
    { contest: 'Div3 #913', rating: 1450 },
    { contest: 'Div3 #917', rating: 1603 },
    { contest: 'Div2 #920', rating: 1580 },
    { contest: 'Div2 #923', rating: 1595 },
    { contest: 'Div3 #925', rating: 1603 },
  ];
  
  const codechefData = [
    { contest: 'Long #149', rating: 1760 },
    { contest: 'Div2 #151', rating: 1850 },
    { contest: 'Div2 #153', rating: 1894 },
    { contest: 'Long #155', rating: 1880 },
    { contest: 'Div2 #156', rating: 1894 },
  ];

  // Codeforces rating colors and thresholds
  const cfRatingColors = [
    { threshold: 3000, color: '#000000', label: 'Legendary Grandmaster' },
    { threshold: 2600, color: '#FF0000', label: 'International Grandmaster' },
    { threshold: 2400, color: '#FF0000', label: 'Grandmaster' },
    { threshold: 2300, color: '#FF8C00', label: 'International Master' },
    { threshold: 2100, color: '#FF8C00', label: 'Master' },
    { threshold: 1900, color: '#AA00AA', label: 'Candidate Master' },
    { threshold: 1600, color: '#0000FF', label: 'Expert' },
    { threshold: 1400, color: '#03A89E', label: 'Specialist' },
    { threshold: 1200, color: '#008000', label: 'Pupil' },
    { threshold: 0, color: '#808080', label: 'Newbie' }
  ];

  const getColorForRating = (rating) => {
    for (const level of cfRatingColors) {
      if (rating >= level.threshold) {
        return level.color;
      }
    }
    return '#808080';
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      const color = payload[0].name === 'Codeforces' 
        ? getColorForRating(data.rating)
        : '#5E2A41'; // Codechef color
      
      return (
        <div className="bg-white dark:bg-gray-800 p-3 border border-gray-200 dark:border-gray-700 rounded shadow-lg">
          <p className="font-semibold">{data.contest}</p>
          <p style={{ color }}>
            {payload[0].name}: {data.rating}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.2} />
          <XAxis 
            dataKey="contest" 
            allowDataOverflow={true}
            tick={false}
            axisLine={{ stroke: '#374151', opacity: 0.3 }}
          />
          <YAxis 
            domain={[1200, 2000]} 
            axisLine={{ stroke: '#374151', opacity: 0.3 }}
            tick={{ fill: '#6B7280', fontSize: 12 }}
          />
          <Tooltip content={<CustomTooltip />} />
          
          {/* Reference lines for Codeforces ratings */}
          <ReferenceLine y={1600} stroke="#0000FF" strokeDasharray="3 3" />
          <ReferenceLine y={1900} stroke="#AA00AA" strokeDasharray="3 3" />
          
          <Line 
            name="Codeforces"
            data={codeforcesData} 
            type="monotone" 
            dataKey="rating" 
            stroke="#3B82F6" 
            strokeWidth={2}
            dot={{ 
              r: 6, 
              stroke: '#3B82F6', 
              strokeWidth: 2, 
              fill: '#FFFFFF' 
            }}
            activeDot={{ 
              r: 8, 
              stroke: '#3B82F6', 
              strokeWidth: 2, 
              fill: '#3B82F6' 
            }}
          />
          
          <Line 
            name="Codechef"
            data={codechefData} 
            type="monotone" 
            dataKey="rating" 
            stroke="#EC4899" 
            strokeWidth={2}
            dot={{ 
              r: 6, 
              stroke: '#EC4899', 
              strokeWidth: 2, 
              fill: '#FFFFFF' 
            }}
            activeDot={{ 
              r: 8, 
              stroke: '#EC4899', 
              strokeWidth: 2, 
              fill: '#EC4899' 
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingGraph;