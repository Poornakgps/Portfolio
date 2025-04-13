export const projects = [
    {
      id: 1,
      title: 'Multi-Agent AI Orchestrator for PDF Q/A',
      description: 'Built a robust multi-agent AI orchestrator for PDF question answering using FastAPI and Streamlit for user interaction.',
      longDescription: 'Integrated Google Gemini 2.0 for high-quality Q/A, LangChain for dynamic text chunking, and FAISS, improving document retrieval speed by 40%. Leveraged Whisper for speech-to-text capabilities, enabling voice-driven queries and enhancing user experience.',
      tags: ['FastAPI', 'Streamlit', 'Google Gemini 2.0', 'LangChain', 'FAISS', 'Python'],
      category: 'ai',
      link: '#',
      githubLink: 'https://github.com/Poornakgps',
      image: '/assets/images/pdf-qa.png',
      date: 'Jan 2025 - Present'
    },
    {
      id: 2,
      title: 'Dynamic Vehicle Route Planning',
      description: 'Formulated Constraint Satisfaction Problem (CSP) for order allocation, optimizing vehicle assignment for 500 orders.',
      longDescription: 'Executed Heuristic and Greedy Algorithms to find best route for vehicles, providing a baseline optimized routes. Used SUMO simulator for traffic modeling and integrated OpenStreetMap data, ensuring accurate real-world scenarios.',
      tags: ['Python', 'SUMO', 'OpenStreetMap', 'CSP', 'Algorithms'],
      category: 'algorithms',
      link: '#',
      githubLink: 'https://github.com/Poornakgps',
      image: '/assets/images/route-planning.png',
      date: 'Aug 2024 - Present'
    },
    {
      id: 3,
      title: 'To-Do Serverless Application',
      description: 'Developed a serverless To-Do application using AWS Lambda, API Gateway, and DynamoDB for 100+ CRUD operations.',
      longDescription: 'Automated task archiving using Lambda functions and integrating Amazon S3 for seamless long-term storage. Engineered a fault-tolerant, scalable backend system using AWS Lambda, with CloudWatch integration for monitoring.',
      tags: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'S3', 'CloudWatch', 'Python'],
      category: 'backend',
      link: '#',
      githubLink: 'https://github.com/Poornakgps',
      image: '/assets/images/todo-app.png',
      date: 'July 2024'
    },
    {
      id: 4,
      title: 'CliqueConnect | Backend Development',
      description: 'Designed and implemented a robust backend for a social media platform using Node.js, integrated with PostgreSQL.',
      longDescription: 'Developed comprehensive functionalities for user management, post creation, user interactions, and follower notifications. Leveraged libraries like Express, Sequelize, Multer, and JSON Web Token to ensure secure, and scalable API development.',
      tags: ['Node.js', 'PostgreSQL', 'Express', 'Sequelize', 'JWT'],
      category: 'backend',
      link: '#',
      githubLink: 'https://github.com/Poornakgps',
      image: '/assets/images/social-media.png',
      date: 'July 2024'
    }
  ];
  
  export const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'ai', label: 'AI & ML' },
    { value: 'algorithms', label: 'Algorithms' },
    { value: 'backend', label: 'Backend' },
    { value: 'fullstack', label: 'Full Stack' }
  ];