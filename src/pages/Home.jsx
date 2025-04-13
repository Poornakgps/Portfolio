import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Mail, Phone, Award, Code, Briefcase } from 'lucide-react';
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import Section from '../components/ui/Section';
import ProjectCard from '../components/projects/ProjectCard';
import RatingGraph from '../components/ui/RatingGraph';

const Home = () => {
  const stats = [
    { label: 'Codeforces', value: 'Expert (1603)', icon: Award, color: 'text-blue-600', desc: 'Top 2.0%' },
    { label: 'CodeChef', value: '4-Star (1894)', icon: Award, color: 'text-yellow-600', desc: 'Top 1.8%' },
    { label: 'Best CF Rank', value: '452', icon: Award, color: 'text-green-600', desc: 'Div.3 Round 917' },
    { label: 'Problems Solved', value: '800+', icon: Code, color: 'text-purple-600', desc: 'And counting...' },
  ];

  const featuredProjects = [
    {
      id: 1,
      title: 'Multi-Agent AI Orchestrator',
      description: 'PDF question answering system using Google Gemini 2.0, LangChain, and FAISS',
      tags: ['FastAPI', 'LangChain', 'FAISS', 'Streamlit'],
      link: '#'
    },
    {
      id: 2,
      title: 'Dynamic Vehicle Route Planning',
      description: 'Optimized vehicle assignment for 500 orders using CSP formulation and heuristic algorithms',
      tags: ['Python', 'SUMO', 'OpenStreetMap', 'Algorithms'],
      link: '#'
    },
    {
      id: 3,
      title: 'To-Do Serverless Application',
      description: 'Serverless application using AWS Lambda, API Gateway, and DynamoDB',
      tags: ['AWS', 'Lambda', 'DynamoDB', 'Serverless'],
      link: '#'
    }
  ];

  return (
    <div>
      <Hero />
      
      <div className="py-6 bg-gray-50 dark:bg-gray-900">
        <Stats stats={stats} />
      </div>
      
      <Section title="Competitive Programming" subtitle="My Algorithm Skills">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Rating History</h3>
            <RatingGraph />
            <div className="mt-4 flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Global rank: <span className="font-semibold">452</span> in Codeforces Div.3 Round 917
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Global rank: <span className="font-semibold">87th</span> in Codechef Division 2 Round 151
                </p>
              </div>
              <Link to="/competitive" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">
                More details <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">My Approach</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-500 dark:bg-blue-400 mt-1"></div>
                <p className="ml-3 text-gray-700 dark:text-gray-300">Strong foundation in data structures & algorithms</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-500 dark:bg-blue-400 mt-1"></div>
                <p className="ml-3 text-gray-700 dark:text-gray-300">Systematic problem-solving using optimization techniques</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-500 dark:bg-blue-400 mt-1"></div>
                <p className="ml-3 text-gray-700 dark:text-gray-300">Expert in graph algorithms, dynamic programming, and greedy approaches</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-500 dark:bg-blue-400 mt-1"></div>
                <p className="ml-3 text-gray-700 dark:text-gray-300">Efficient code optimization for competitive environments</p>
              </li>
            </ul>
            <div className="mt-6">
              <Link to="/skills" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">
                View all skills <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
      
      <Section title="Featured Projects" subtitle="Recent Work" className="bg-gray-50 dark:bg-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link 
            to="/projects" 
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            View All Projects <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </Section>
      
      <Section title="Work Experience" subtitle="Professional Journey">
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <div className="flex justify-between">
              <div>
                <h3 className="text-xl font-bold">Software Engineer Intern</h3>
                <p className="text-gray-600 dark:text-gray-400">Xavica Software Solutions Private Limited-QWIPO</p>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">May 2024 - July 2024</span>
            </div>
            <p className="mt-3 text-gray-700 dark:text-gray-300">
              Built SKU product categorization model using TF-IDF and Cosine Similarity with 0.93 accuracy, 
              evaluated by F1-score. Designed interactive dashboards in Metabase.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <div className="flex justify-between">
              <div>
                <h3 className="text-xl font-bold">NLP Research Intern</h3>
                <p className="text-gray-600 dark:text-gray-400">IIT Kharagpur</p>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">Feb 2023 - Apr 2023</span>
            </div>
            <p className="mt-3 text-gray-700 dark:text-gray-300">
              Extracted important Physics topics using LDA probabilistic model and 
              tackled the conversion of document multigraph to directed acyclic graph.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link 
            to="/experience" 
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            View Full Experience <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </Section>
      
      <section className="py-12 bg-blue-700 dark:bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-6">Let's Connect</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://github.com/Poornakgps" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-white text-blue-700 rounded-md shadow-sm hover:bg-blue-50 transition-colors"
            >
              <Github size={20} className="mr-2" /> GitHub
            </a>
            <a 
              href="https://linkedin.com/in/poornachandra-doddi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-white text-blue-700 rounded-md shadow-sm hover:bg-blue-50 transition-colors"
            >
              <Linkedin size={20} className="mr-2" /> LinkedIn
            </a>
            <a 
              href="mailto:poornakgps123@gmail.com"
              className="inline-flex items-center px-4 py-2 bg-white text-blue-700 rounded-md shadow-sm hover:bg-blue-50 transition-colors"
            >
              <Mail size={20} className="mr-2" /> Email
            </a>
            <a 
              href="tel:+919550401251"
              className="inline-flex items-center px-4 py-2 bg-white text-blue-700 rounded-md shadow-sm hover:bg-blue-50 transition-colors"
            >
              <Phone size={20} className="mr-2" /> Phone
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;