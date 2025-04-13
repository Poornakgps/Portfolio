import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import Section from '../components/ui/Section';
import ProjectCard from '../components/projects/ProjectCard';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  
  const projectsData = [
    {
      id: 1,
      title: 'Multi-Agent AI Orchestrator for PDF Q/A',
      description: 'Built a robust multi-agent AI orchestrator for PDF question answering using FastAPI and Streamlit for user interaction.',
      longDescription: 'Integrated Google Gemini 2.0 for high-quality Q/A, LangChain for dynamic text chunking, and FAISS, improving document retrieval speed by 40%. Leveraged Whisper for speech-to-text capabilities, enabling voice-driven queries and enhancing user experience.',
      tags: ['FastAPI', 'Streamlit', 'Google Gemini 2.0', 'LangChain', 'FAISS', 'Python'],
      category: 'ai',
      link: '#',
      githubLink: 'https://github.com/Poornakgps/AI_Agents',
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
      githubLink: 'https://github.com/Poornakgps/Todo-AWS-Serverless-Application',
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
      githubLink: 'https://github.com/Poornakgps/CliqueConnect',
      image: '/assets/images/social-media.png',
      date: 'July 2024'
    }
  ];
  
  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'ai', label: 'AI & ML' },
    { value: 'algorithms', label: 'Algorithms' },
    { value: 'backend', label: 'Backend' },
    { value: 'fullstack', label: 'Full Stack' }
  ];
  
  const filteredProjects = projectsData
    .filter(project => 
      (filter === 'all' || project.category === filter) &&
      (project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
       project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
    );
  
  return (
    <div>
      <Section 
        title="My Projects" 
        subtitle="A collection of my work spanning various domains and technologies"
      >
        {/* Search and filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md leading-5 bg-white dark:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-gray-100"
              placeholder="Search projects by name, description, or tech stack..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="relative inline-block w-full md:w-48">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Filter className="h-5 w-5 text-gray-400" />
            </div>
            <select
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md leading-5 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-gray-100"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Projects grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">No projects found</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}
      </Section>
      
      {/* Project approach section */}
      <Section
        title="My Development Approach"
        subtitle="How I tackle projects from ideation to completion"
        className="bg-gray-50 dark:bg-gray-900"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/30 rounded-md flex items-center justify-center mb-4">
              <span className="text-blue-600 dark:text-blue-400 text-xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Problem Analysis</h3>
            <p className="text-gray-600 dark:text-gray-300">
              I start by thoroughly understanding the problem, breaking it down, and identifying the core requirements.
              My competitive programming background gives me an edge in approaching complex challenges systematically.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="h-12 w-12 bg-green-100 dark:bg-green-900/30 rounded-md flex items-center justify-center mb-4">
              <span className="text-green-600 dark:text-green-400 text-xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Algorithm Design</h3>
            <p className="text-gray-600 dark:text-gray-300">
              I design efficient algorithms and data structures optimized for performance and scalability.
              I evaluate multiple approaches and select the most efficient solution for the specific context.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="h-12 w-12 bg-purple-100 dark:bg-purple-900/30 rounded-md flex items-center justify-center mb-4">
              <span className="text-purple-600 dark:text-purple-400 text-xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Implementation & Testing</h3>
            <p className="text-gray-600 dark:text-gray-300">
              I write clean, maintainable code with comprehensive testing to ensure reliability.
              My implementation considers edge cases and performance optimizations learned from competitive programming.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Projects;