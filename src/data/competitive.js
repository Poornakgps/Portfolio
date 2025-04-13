// src/data/competitive.js - Single source of truth for competitive programming data

export const competitiveData = {
  platforms: [
    { 
      name: 'Codeforces', 
      handle: 'chandu1479', 
      rating: 1603, 
      rank: 'Expert', 
      color: '#0000FF',
      percentile: 'Top 2.0%',
      profileUrl: 'https://codeforces.com/profile/chandu1479',
      solvedCount: 844
    },
    { 
      name: 'CodeChef', 
      handle: 'username', // Replace with actual handle when available
      rating: 1926, 
      rank: '4-Star', 
      color: '#62A7A5',
      percentile: 'Top 1.8%',
      profileUrl: 'https://www.codechef.com/users/chandukgpian',
      solvedCount: 230
    }
  ],
  
  ratingHistory: {
    codeforces: [
      { contest: 'Round #900', rating: 1450, date: '2023-10-15' },
      { contest: 'Round #905', rating: 1490, date: '2023-11-10' },
      { contest: 'Round #909', rating: 1520, date: '2023-12-05' },
      { contest: 'Round #913', rating: 1580, date: '2024-01-18' },
      { contest: 'Round #917', rating: 1603, date: '2024-02-23' }
    ],
    codechef: [
      { contest: 'Long #145', rating: 1760, date: '2023-09-25' },
      { contest: 'Div2 #149', rating: 1810, date: '2023-11-08' },
      { contest: 'Div2 #151', rating: 1850, date: '2023-12-15' },
      { contest: 'Long #153', rating: 1870, date: '2024-01-20' },
      { contest: 'Div2 #156', rating: 1894, date: '2024-02-28' }
    ]
  },
  
  bestPerformances: [
    {
      platform: 'Codeforces',
      contestName: 'Division 3 Round #917',
      rank: 452,
      totalParticipants: '20k+',
      date: 'Feb 2024',
      problems: [
        { name: 'A. Least Product', solved: true, complexity: 'Easy' },
        { name: 'B. Erase First or Second Half', solved: true, complexity: 'Easy' },
        { name: 'C. Torn Lucky Ticket', solved: true, complexity: 'Medium' },
        { name: 'D. X-Sum', solved: true, complexity: 'Medium' },
        { name: 'E. Count Paths', solved: true, complexity: 'Hard' },
        { name: 'F. Is It Flower?', solved: false, complexity: 'Hard' }
      ]
    },
    {
      platform: 'CodeChef',
      contestName: 'Division 2 Round #151',
      rank: 87,
      totalParticipants: '2k+',
      date: 'Dec 2023',
      problems: [
        { name: 'PROBLEM1', solved: true, complexity: 'Easy' },
        { name: 'PROBLEM2', solved: true, complexity: 'Easy' },
        { name: 'PROBLEM3', solved: true, complexity: 'Medium' },
        { name: 'PROBLEM4', solved: true, complexity: 'Medium' },
        { name: 'PROBLEM5', solved: true, complexity: 'Hard' },
        { name: 'PROBLEM6', solved: false, complexity: 'Hard' }
      ]
    }
  ],
  
  problemCategories: [
    { 
      title: 'Dynamic Programming', 
      solved: 120, 
      examples: ['Longest Common Subsequence', 'Coin Change', 'Knapsack Problem'],
      description: 'Efficient algorithms that solve problems by breaking them down into simpler subproblems',
      expertise: 90
    },
    { 
      title: 'Graph Algorithms', 
      solved: 95, 
      examples: ['Shortest Path', 'DFS/BFS Traversals', 'Network Flow'],
      description: 'Algorithms that operate on graph data structures to solve connectivity problems',
      expertise: 85
    },
    { 
      title: 'Greedy Algorithms', 
      solved: 80, 
      examples: ['Activity Selection', 'Huffman Coding', 'Fractional Knapsack'],
      description: 'Algorithms that make locally optimal choices at each stage to find global optimum',
      expertise: 90
    },
    { 
      title: 'Binary Search', 
      solved: 65, 
      examples: ['Lower/Upper Bound', 'Binary Search on Answer', 'Search in Rotated Array'],
      description: 'Efficient search algorithm that works on sorted arrays by halving the search space',
      expertise: 95
    },
    { 
      title: 'Data Structures', 
      solved: 110, 
      examples: ['Segment Trees', 'Fenwick Trees', 'Disjoint Set Union'],
      description: 'Advanced data structures for efficient querying and modification operations',
      expertise: 85
    },
    { 
      title: 'String Algorithms', 
      solved: 50, 
      examples: ['KMP', 'Z Algorithm', 'Trie'],
      description: 'Specialized algorithms for text processing and pattern matching',
      expertise: 80
    },
  ],
  
  skills: [
    { name: 'Problem Analysis', level: 95, description: 'Breaking down complex problems into manageable parts' },
    { name: 'Algorithm Design', level: 90, description: 'Creating efficient solutions using appropriate algorithms' },
    { name: 'Time Complexity Analysis', level: 95, description: 'Evaluating and optimizing algorithm efficiency' },
    { name: 'Code Optimization', level: 85, description: 'Writing fast, memory-efficient code for competitive environments' },
    { name: 'Bug Fixing', level: 90, description: 'Quickly identifying and fixing logical errors in code' }
  ],
  
  contests: [
    {
      platform: 'Codeforces',
      name: 'Division 3 Round #917',
      rank: 452,
      total: '20k+',
      date: 'Feb 2024'
    },
    {
      platform: 'Codeforces',
      name: 'Division 3 Round #913',
      rank: 631,
      total: '20k+',
      date: 'Jan 2024'
    },
    {
      platform: 'CodeChef',
      name: 'Division 2 Round #151',
      rank: 87,
      total: '2k+',
      date: 'Dec 2023'
    },
    {
      platform: 'CodeChef',
      name: 'Division 2 Round #153',
      rank: 294,
      total: '2k+',
      date: 'Jan 2024'
    },
    {
      platform: 'Codeforces',
      name: 'Educational Round #95',
      rank: 789,
      total: '18k+',
      date: 'Dec 2023'
    },
    {
      platform: 'CodeChef',
      name: 'Long Challenge December',
      rank: 156,
      total: '3k+',
      date: 'Dec 2023'
    }
  ],
  
  // Common statistics for quick reference
  stats: [
    { label: 'Codeforces', value: 'Expert (1603)', icon: 'Award', color: 'text-blue-600', desc: 'Top 2.0%' },
    { label: 'CodeChef', value: '4-Star (1894)', icon: 'Award', color: 'text-yellow-600', desc: 'Top 1.8%' },
    { label: 'Best CF Rank', value: '452', icon: 'Award', color: 'text-green-600', desc: 'Div.3 Round 917' },
    { label: 'Problems Solved', value: '800+', icon: 'Code', color: 'text-purple-600', desc: 'And counting...' }
  ],
  
  // Added achievements section for easier reference
  achievements: [
    "Attained Expert rating on Codeforces, placing in the top 2.0% globally",
    "Achieved 4-star rating on CodeChef, ranking in the top 1.8% of participants",
    "Secured a global rank of 452 in Codeforces Division 3 Round 917",
    "Ranked 87th in CodeChef Division 2 Round 151 among 2k+ participants",
    "Solved 800+ algorithmic problems across various platforms"
  ]
};

export default competitiveData;