import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Award, Briefcase, GraduationCap, ChevronRight } from 'lucide-react';
import Section from '../components/ui/Section';

const About = () => {
  return (
    <div>
      <Section 
        title="About Me" 
        subtitle="Chemical Engineering Student | Competitive Programmer | Software Developer"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Hello, I'm Poornachandra Doddi
              </h3>
              
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  I am a Chemical Engineering student at the Indian Institute of Technology (IIT) Kharagpur with a strong 
                  passion for competitive programming, algorithm design, and software development.
                </p>
                
                <p>
                  My journey in competitive programming has helped me develop a structured approach to problem-solving.
                  I'm currently an <span className="text-blue-600 dark:text-blue-400 font-medium">Expert on Codeforces (1603)</span> and a 
                  <span className="text-yellow-600 dark:text-yellow-400 font-medium"> 4-star coder on CodeChef (1894)</span>, 
                  placing me in the top 2.0% and 1.8% of contestants globally, respectively.
                </p>
                
                <p>
                  Beyond competitive programming, I've worked on various software development projects, ranging from 
                  AI-driven applications to serverless cloud solutions. My experience includes both backend development 
                  and algorithm optimization, with a focus on building efficient, scalable systems.
                </p>
                
                <p>
                  I thrive on tackling complex technical challenges and am always eager to learn new technologies and 
                  techniques to enhance my skills. My chemical engineering background provides me with a unique perspective 
                  on problem-solving, combining analytical thinking with creative solutions.
                </p>
              </div>
              
              <div className="mt-6 flex flex-wrap gap-4">
                <Link 
                  to="/experience" 
                  className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <Briefcase size={16} className="mr-2" />
                  View Experience
                </Link>
                
                <Link 
                  to="/projects" 
                  className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <Code size={16} className="mr-2" />
                  View Projects
                </Link>
                
                <Link 
                  to="/competitive" 
                  className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <Award size={16} className="mr-2" />
                  CP Profile
                </Link>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <GraduationCap size={20} className="mr-2 text-blue-600 dark:text-blue-400" />
                Education
              </h3>
              
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 dark:text-white">Indian Institute of Technology (IIT) Kharagpur</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">2021 - 2025</p>
                <p className="mt-1 text-gray-700 dark:text-gray-300">Bachelors of Technology in Chemical Engineering</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Achievements</h4>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">
                      Secured an All India Rank of 9704 out of 0.14 M+ candidates in Joint Entrance Examination Advanced 2021
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mt-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Award size={20} className="mr-2 text-blue-600 dark:text-blue-400" />
                Competitive Programming
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Codeforces</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="text-blue-600 dark:text-blue-400 font-medium">Expert (1603)</span> - Top 2.0%
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">CodeChef</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="text-yellow-600 dark:text-yellow-400 font-medium">4-Star (1894)</span> - Top 1.8%
                  </p>
                </div>
                
                <Link 
                  to="/competitive" 
                  className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View detailed profile <ChevronRight size={14} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      <Section 
        title="My Journey" 
        subtitle="From Chemical Engineering to Competitive Programming"
        className="bg-gray-50 dark:bg-gray-900"
      >
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-0 w-0.5 h-full bg-gray-200 dark:bg-gray-700 ml-6"></div>
            
            <div className="space-y-12">
              <div className="relative">
                <div className="absolute left-0 mt-1.5 h-4 w-4 rounded-full bg-blue-600 dark:bg-blue-400 ml-4 z-10"></div>
                <div className="ml-16">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Starting with Programming Fundamentals
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">2021</p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    Began my journey with programming and data structures in my first year at IIT Kharagpur. 
                    Developed a strong foundation in algorithms and problem-solving techniques.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-0 mt-1.5 h-4 w-4 rounded-full bg-blue-600 dark:bg-blue-400 ml-4 z-10"></div>
                <div className="ml-16">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Diving into Competitive Programming
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">2022</p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    Started participating in competitive programming contests on platforms like Codeforces and CodeChef.
                    Gradually improved my rating through consistent practice and learning advanced algorithms.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-0 mt-1.5 h-4 w-4 rounded-full bg-blue-600 dark:bg-blue-400 ml-4 z-10"></div>
                <div className="ml-16">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Research Internship in NLP
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Feb 2023 - Apr 2023</p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    Applied my algorithmic skills to natural language processing research at IIT Kharagpur.
                    Worked on extracting important topics from documents using LDA and converting document multigraphs to directed acyclic graphs.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-0 mt-1.5 h-4 w-4 rounded-full bg-blue-600 dark:bg-blue-400 ml-4 z-10"></div>
                <div className="ml-16">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Achieving Expert Status
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">2023 - 2024</p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    Attained Expert rating on Codeforces and 4-star rating on CodeChef. Secured top positions in multiple contests,
                    including a global rank of 452 in Codeforces Division 3 Round 917 and 87th in CodeChef Division 2 Round 151.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-0 mt-1.5 h-4 w-4 rounded-full bg-blue-600 dark:bg-blue-400 ml-4 z-10"></div>
                <div className="ml-16">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Software Engineering Internship
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">May 2024 - July 2024</p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    Applied my programming skills as a Software Engineer Intern at Xavica Software Solutions Private Limited-QWIPO.
                    Built an SKU product categorization model and designed interactive dashboards for business data visualization.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-0 mt-1.5 h-4 w-4 rounded-full bg-blue-600 dark:bg-blue-400 ml-4 z-10"></div>
                <div className="ml-16">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Advanced Projects & Continuous Learning
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">2024 - Present</p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    Working on advanced projects like Dynamic Vehicle Route Planning and Multi-Agent AI Orchestrator.
                    Continuously expanding my skills in cloud technologies, AI, and algorithm optimization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;