export const experience = [
    {
      id: 1,
      title: 'Software Engineer Intern',
      company: 'Xavica Software Solutions Private Limited-QWIPO',
      location: 'Remote',
      duration: 'May 2024 - July 2024',
      description: [
        'Built SKU product categorization model using TF-IDF and Cosine Similarity with 0.93 accuracy, evaluated by F1-score',
        'Designed 5+ interactive dashboards in Metabase to display business data, helping stakeholders make better decisions',
        'Contributing to the development of the ONDC app by gathering code implementations to enhance digital commerce'
      ],
      technologies: ['Python', 'Scikit-learn', 'Metabase'],
      type: 'internship'
    },
    {
      id: 2,
      title: 'NLP Research Intern',
      company: 'IIT Kharagpur',
      location: 'Kharagpur, India',
      duration: 'Feb 2023 - Apr 2023',
      description: [
        'Extracted 48 important Physics topics from 250 documents using LDA (Latent Dirichlet Allocation) probabilistic model',
        'Tackled the problem of converting a document multigraph to a directed acyclic graph by applying Minimum FAS',
        'Applied libraries such as NLTK, NetworkX, Gensim to develop the sequencing algorithm to achieve the optimum outcome'
      ],
      technologies: ['Python', 'NLTK', 'Gensim', 'NetworkX'],
      type: 'research'
    }
  ];
  
  export const projects = [
    {
      id: 1,
      title: 'Dynamic Vehicle Route Planning',
      organization: 'Prof. Arnab Sarkar, Advanced Technology Development centre, IIT Kharagpur',
      duration: 'Aug 2024 - Present',
      description: [
        'Formulated Constraint Satisfaction Problem (CSP) for order allocation, optimizing vehicle assignment for 500 orders',
        'Executed Heuristic and Greedy Algorithms to find best route for vehicles, providing a baseline optimized routes',
        'Used SUMO simulator for traffic modeling and integrated OpenStreetMap data, ensuring accurate real-world scenarios'
      ],
      type: 'research'
    },
    {
      id: 2,
      title: 'Multi-Agent AI Orchestrator for PDF Q/A',
      organization: 'Personal Project',
      duration: 'Jan 2025 - Present',
      description: [
        'Built a robust multi-agent AI orchestrator for PDF question answering using FastAPI and Streamlit for user interaction',
        'Integrated Google Gemini 2.0 for high-quality Q/A, LangChain for dynamic text chunking, and FAISS, improving document retrieval speed by 40%',
        'Leveraged Whisper for speech-to-text capabilities, enabling voice-driven queries and enhancing user experience'
      ],
      technologies: ['FastAPI', 'Streamlit', 'Google Gemini 2.0', 'LangChain', 'Whisper', 'FAISS', 'Python'],
      type: 'personal'
    },
    {
      id: 3,
      title: 'To-Do Serverless Application',
      organization: 'Personal Project',
      duration: 'July 2024',
      description: [
        'Developed a serverless To-Do application using AWS Lambda, API Gateway, and DynamoDB for 100+CRUD operations',
        'Automated task archiving using Lambda functions and integrating Amazon S3 for seamless long-term storage',
        'Engineered a fault-tolerant, scalable backend system using AWS Lambda, with CloudWatch integration for monitoring'
      ],
      technologies: ['AWS Cloud', 'Python'],
      type: 'personal'
    },
    {
      id: 4,
      title: 'CliqueConnect | Backend Development',
      organization: 'Personal Project',
      duration: 'July 2024',
      description: [
        'Designed and implemented a robust backend for a social media platform using Node.js, integrated with PostgreSQL',
        'Developed comprehensive functionalities for user management, post creation, user interactions, and follower notifications',
        'Leveraged libraries like Express, Sequelize, Multer, and JSON Web Token to ensure secure, and scalable API development'
      ],
      technologies: ['Nodejs', 'PostgreSQL'],
      type: 'personal'
    }
  ];
  
  export const education = [
    {
      id: 1,
      degree: 'Bachelors of Technology in Chemical Engineering',
      institution: 'Indian Institute of Technology (IIT) Kharagpur',
      location: 'Kharagpur, India',
      duration: '2021 - 2025',
      achievements: [
        'Secured an All India Rank of 9704 out of 0.14 M+ candidates in Joint Entrance Examination Advanced 2021'
      ]
    }
  ];