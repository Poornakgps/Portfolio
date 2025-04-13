import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, ArrowRight } from 'lucide-react';
import Section from '../components/ui/Section';
import { experience, projects, education } from '../data/experience';

const Experience = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredExperience = filter === 'all' 
    ? [...experience, ...projects]
    : filter === 'work' 
      ? experience 
      : projects;
  
  // Sort by date (most recent first)
  const sortedExperience = filteredExperience.sort((a, b) => {
    const dateA = a.duration.split(' - ')[0];
    const dateB = b.duration.split(' - ')[0];
    return new Date(dateB) - new Date(dateA);
  });
  
  return (
    <div>
      <Section 
        title="Experience" 
        subtitle="My professional journey and project experience"
      >
        <div className="mb-8 flex justify-center">
          <div className="inline-flex p-1 bg-gray-100 dark:bg-gray-800 rounded-md">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                filter === 'all'
                  ? 'bg-white dark:bg-gray-700 shadow-sm text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('work')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                filter === 'work'
                  ? 'bg-white dark:bg-gray-700 shadow-sm text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Work Experience
            </button>
            <button
              onClick={() => setFilter('projects')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                filter === 'projects'
                  ? 'bg-white dark:bg-gray-700 shadow-sm text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Projects
            </button>
          </div>
        </div>
        
        <div className="relative">
          {/* Timeline */}
          <div className="absolute left-0 w-0.5 h-full bg-gray-200 dark:bg-gray-700 ml-6 md:ml-10"></div>
          
          <div className="space-y-12">
            {sortedExperience.map((item, index) => (
              <div key={item.id} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-0 mt-1.5 h-4 w-4 rounded-full bg-blue-600 dark:bg-blue-400 ml-4 md:ml-8 z-10"></div>
                
                {/* Content */}
                <div className="ml-12 md:ml-20">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">
                          {item.company || item.organization}
                        </p>
                      </div>
                      <div className="flex items-center mt-2 md:mt-0 text-gray-600 dark:text-gray-300">
                        <Calendar size={16} className="mr-1" />
                        <span className="text-sm">{item.duration}</span>
                        
                        {item.location && (
                          <>
                            <span className="mx-2">•</span>
                            <MapPin size={16} className="mr-1" />
                            <span className="text-sm">{item.location}</span>
                          </>
                        )}
                      </div>
                    </div>
                    
                    <ul className="mt-4 space-y-2">
                      {item.description.map((desc, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                          <span className="text-gray-700 dark:text-gray-300">{desc}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {item.technologies && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.technologies.map((tech, i) => (
                          <span 
                            key={i}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
      
      <Section 
        title="Education" 
        subtitle="Academic Background"
        className="bg-gray-50 dark:bg-gray-900"
      >
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          {education.map((edu) => (
            <div key={edu.id} className="relative">
              <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                    <GraduationCap className="mr-2 text-blue-600 dark:text-blue-400" size={20} />
                    {edu.degree}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">
                    {edu.institution}
                  </p>
                </div>
                <div className="flex items-center mt-2 md:mt-0 text-gray-600 dark:text-gray-300">
                  <Calendar size={16} className="mr-1" />
                  <span className="text-sm">{edu.duration}</span>
                  
                  {edu.location && (
                    <>
                      <span className="mx-2">•</span>
                      <MapPin size={16} className="mr-1" />
                      <span className="text-sm">{edu.location}</span>
                    </>
                  )}
                </div>
              </div>
              
              {edu.achievements && (
                <div className="mt-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Achievements</h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                        <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>
      
      <Section 
        title="Competitive Programming Achievements" 
        subtitle="Contests and Rankings"
      >
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              <span className="text-gray-700 dark:text-gray-300">
                Attained a global rank of <strong>452</strong> and <strong>631</strong> in Codeforces Division.3 Round 917 and 913 respectively (out of 20k+ participants)
              </span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              <span className="text-gray-700 dark:text-gray-300">
                Secured <strong>87th</strong> and <strong>294th</strong> positions in Codechef Division 2 Rounds 151 and 153, competing against over 2k+ participants
              </span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              <span className="text-gray-700 dark:text-gray-300">
                Earned the title of <strong>Expert on Codeforces</strong> with rating of 1603, placing in the top 2.0% of contestants
              </span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              <span className="text-gray-700 dark:text-gray-300">
                Achieved the <strong>4-star coder</strong> designation on CodeChef with a 1894 rating, ranking in the top 1.8% of participants globally
              </span>
            </div>
          </div>
          
          <div className="mt-6">
            <a
              href="/competitive"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
              View detailed competitive programming profile <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Experience;