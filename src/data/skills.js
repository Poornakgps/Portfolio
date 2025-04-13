export const skills = [
    {
      category: 'Programming Languages',
      items: [
        { name: 'C/C++', level: 95, color: 'bg-blue-500' },
        { name: 'Python', level: 90, color: 'bg-yellow-500' },
        { name: 'JavaScript', level: 85, color: 'bg-green-500' },
        { name: 'SQL', level: 80, color: 'bg-purple-500' }
      ]
    },
    {
      category: 'Libraries & Frameworks',
      items: [
        { name: 'C++ STL', level: 95, color: 'bg-blue-500' },
        { name: 'Node.js', level: 85, color: 'bg-green-500' },
        { name: 'FastAPI', level: 80, color: 'bg-yellow-500' },
        { name: 'NetworkX', level: 85, color: 'bg-purple-500' },
        { name: 'React.js', level: 75, color: 'bg-red-500' },
        { name: 'Tailwind CSS', level: 80, color: 'bg-blue-400' }
      ]
    },
    {
      category: 'Cloud & DevOps',
      items: [
        { name: 'AWS', level: 85, color: 'bg-orange-500' },
        { name: 'Docker', level: 75, color: 'bg-blue-500' },
        { name: 'GitHub', level: 90, color: 'bg-gray-700' },
        { name: 'PostgreSQL', level: 85, color: 'bg-blue-500' },
        { name: 'MongoDB', level: 80, color: 'bg-green-500' },
        { name: 'MySQL', level: 85, color: 'bg-blue-400' }
      ]
    },
    {
      category: 'Algorithms & Data Structures',
      items: [
        { name: 'Graph Algorithms', level: 95, color: 'bg-green-500' },
        { name: 'Dynamic Programming', level: 90, color: 'bg-blue-500' },
        { name: 'Greedy Algorithms', level: 90, color: 'bg-yellow-500' },
        { name: 'Tree Algorithms', level: 85, color: 'bg-purple-500' },
        { name: 'String Algorithms', level: 80, color: 'bg-red-500' },
        { name: 'Advanced Data Structures', level: 85, color: 'bg-indigo-500' }
      ]
    }
  ];
  
  export const competitiveProgramming = {
    platforms: [
      { 
        name: 'Codeforces', 
        handle: 'chandu1479', 
        rating: 1603, 
        rank: 'Expert', 
        color: 'text-blue-600',
        percentile: 'Top 2.0%',
        profileUrl: 'https://codeforces.com/profile/chandu1479'
      },
      { 
        name: 'CodeChef', 
        handle: '', 
        rating: 1894, 
        rank: '4-Star', 
        color: 'text-yellow-600',
        percentile: 'Top 1.8%',
        profileUrl: 'https://www.codechef.com/users/'
      }
    ],
    
    contests: [
      {
        platform: 'Codeforces',
        name: 'Division 3 Round #917',
        rank: 452,
        total: '20k+',
        date: 'July 2024'
      },
      {
        platform: 'Codeforces',
        name: 'Division 3 Round #913',
        rank: 631,
        total: '20k+',
        date: 'June 2024'
      },
      {
        platform: 'CodeChef',
        name: 'Division 2 Round #151',
        rank: 87,
        total: '2k+',
        date: 'July 2024'
      },
      {
        platform: 'CodeChef',
        name: 'Division 2 Round #153',
        rank: 294,
        total: '2k+',
        date: 'August 2024'
      }
    ],
    
    problemCategories: [
      { 
        title: 'Dynamic Programming', 
        solved: 120, 
        examples: ['Longest Common Subsequence', 'Coin Change', 'Knapsack Problem'] 
      },
      { 
        title: 'Graph Algorithms', 
        solved: 95, 
        examples: ['Shortest Path', 'DFS/BFS Traversals', 'Network Flow'] 
      },
      { 
        title: 'Greedy Algorithms', 
        solved: 80, 
        examples: ['Activity Selection', 'Huffman Coding', 'Fractional Knapsack'] 
      },
      { 
        title: 'Binary Search', 
        solved: 65, 
        examples: ['Lower/Upper Bound', 'Binary Search on Answer', 'Search in Rotated Array'] 
      },
      { 
        title: 'Data Structures', 
        solved: 110, 
        examples: ['Segment Trees', 'Fenwick Trees', 'Disjoint Set Union'] 
      },
      { 
        title: 'String Algorithms', 
        solved: 50, 
        examples: ['KMP', 'Z Algorithm', 'Trie'] 
      },
    ]
  };