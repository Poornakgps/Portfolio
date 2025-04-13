import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Server, Database, Book, Terminal, Star } from 'lucide-react';
import Section from '../components/ui/Section';

// Component for displaying star ratings
const StarRating = ({ rating }) => {
  // Handle half stars
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  return (
    <div className="flex">
      {/* Full stars */}
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`filled-${i}`} className="w-5 h-5 text-yellow-500 fill-current" />
      ))}
      
      {/* Half star */}
      {hasHalfStar && (
        <div className="relative w-5 h-5">
          <Star className="absolute w-5 h-5 text-gray-300 dark:text-gray-600" />
          <div className="absolute overflow-hidden w-2.5 h-5">
            <Star className="w-5 h-5 text-yellow-500 fill-current" />
          </div>
        </div>
      )}
      
      {/* Empty stars */}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="w-5 h-5 text-gray-300 dark:text-gray-600" />
      ))}
    </div>
  );
};

const Skills = () => {
  // Updated skills data with star ratings
  const updatedSkills = [
    {
      category: 'Programming Languages',
      items: [
        { name: 'C/C++', rating: 4.5, color: 'bg-blue-500' },
        { name: 'Python', rating: 4, color: 'bg-yellow-500' },
        { name: 'JavaScript', rating: 4, color: 'bg-green-500' },
        { name: 'SQL', rating: 4, color: 'bg-purple-500' }
      ]
    },
    {
      category: 'Libraries & Frameworks',
      items: [
        { name: 'C++ STL', rating: 4.5, color: 'bg-blue-500' },
        { name: 'Node.js', rating: 4, color: 'bg-green-500' },
        { name: 'FastAPI', rating: 4, color: 'bg-yellow-500' },
        { name: 'Django', rating: 3.5, color: 'bg-green-600' },
        { name: 'Java', rating: 3.5, color: 'bg-red-500' }
      ]
    },
    {
      category: 'Cloud & DevOps',
      items: [
        { name: 'AWS', rating: 3, color: 'bg-orange-500' },
        { name: 'Docker', rating: 3.5, color: 'bg-blue-500' },
        { name: 'GitHub', rating: 4, color: 'bg-gray-700' }
      ]
    }
  ];
  
  const getIcon = (category) => {
    switch(category) {
      case 'Programming Languages':
        return Code;
      case 'Libraries & Frameworks':
        return Terminal;
      case 'Cloud & DevOps':
        return Server;
      default:
        return Book;
    }
  };
  
  return (
    <div>
      <Section 
        title="Technical Skills" 
        subtitle="My technical expertise across various domains"
      >
        <div className="space-y-12">
          {updatedSkills.map((skillCategory, index) => {
            const Icon = getIcon(skillCategory.category);
            
            return (
              <div key={index} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                  <Icon className="mr-2 text-blue-600 dark:text-blue-400" size={24} />
                  {skillCategory.category}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex flex-col space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-base font-medium text-gray-900 dark:text-white">{skill.name}</span>
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{skill.rating}/5</span>
                      </div>
                      <StarRating rating={skill.rating} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-10 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Competitive Programming Skills</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            My experience in competitive programming has sharpened my problem-solving abilities and algorithm design skills,
            enabling me to approach complex engineering challenges with a structured and efficient mindset.
          </p>
          <Link 
            to="/competitive" 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            View my competitive programming profile <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </Section>
      
      <Section 
        title="Learning Approach" 
        subtitle="How I continuously enhance my technical skills"
        className="bg-gray-50 dark:bg-gray-900"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Continuous Learning</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I am committed to continuous learning and staying updated with the latest technologies and best practices.
              My approach involves:
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                <span>Regular participation in coding contests to sharpen algorithmic skills</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                <span>Taking online courses and reading technical documentation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                <span>Building personal projects to explore new technologies</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                <span>Following tech blogs and participating in developer communities</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Problem-Solving Approach</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              My competitive programming background has instilled a structured approach to problem-solving:
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                <span>Breaking down complex problems into smaller, manageable pieces</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                <span>Identifying patterns and applying appropriate algorithms</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                <span>Optimizing solutions for efficiency and scalability</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                <span>Testing thoroughly with edge cases and stress tests</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Coursework</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                <span>Programming and Data Structures</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                <span>AI foundations and applications</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                <span>AI for economics</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Online Courses</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                <span>Machine Learning</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                <span>Ultimate AWS Certified Solutions Architect Associate SAA-C03</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Software Development</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                <span>Object-Oriented Programming</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                <span>Operating Systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                <span>Database Management Systems</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Skills;