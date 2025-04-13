import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const {
    title,
    description,
    tags = [],
    link,
    githubLink,
    image,
  } = project;
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:transform hover:translate-y-[-4px]">
      {image && (
        <div className="h-48 overflow-hidden">
          <img className="w-full h-full object-cover" src={image} alt={title} />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
        
        <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm h-12">
          {description}
        </p>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="mt-5 flex justify-between items-center">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300"
            >
              View Project <ExternalLink size={16} className="ml-1" />
            </a>
          )}
          
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-200"
              aria-label="View on GitHub"
            >
              <Github size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;