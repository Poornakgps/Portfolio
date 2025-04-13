import React, { useState, useEffect } from 'react';
import { ChevronRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  
  const textArray = [
    'Competitive Programmer',
    'Problem Solver',
    'Algorithm Enthusiast',
    'Backend Developer'
  ];

  useEffect(() => {
    const text = textArray[currentTextIndex];
    const typeText = () => {
      if (isDeleting) {
        // Deleting text
        setTypedText(text.substring(0, typedText.length - 1));
        setTypingSpeed(50); // Delete faster

        if (typedText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % textArray.length);
          setTypingSpeed(200); // Pause before typing next word
        }
      } else {
        // Typing text
        setTypedText(text.substring(0, typedText.length + 1));
        setTypingSpeed(100);

        if (typedText === text) {
          // Pause at the end
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      }
    };

    const timer = setTimeout(typeText, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentTextIndex, typingSpeed, textArray]);

  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-900">
      {/* Decorative elements - algorithm pattern background */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          {/* Binary code effect */}
          <text x="5%" y="10%" className="text-xs fill-current" opacity="0.7">01001110</text>
          <text x="15%" y="25%" className="text-xs fill-current" opacity="0.7">10011100</text>
          <text x="85%" y="15%" className="text-xs fill-current" opacity="0.7">01100110</text>
          <text x="75%" y="80%" className="text-xs fill-current" opacity="0.7">11001001</text>
          <text x="35%" y="95%" className="text-xs fill-current" opacity="0.7">01011010</text>
          {/* Algorithm names */}
          <text x="25%" y="40%" className="text-xs fill-current" opacity="0.7">BFS</text>
          <text x="65%" y="35%" className="text-xs fill-current" opacity="0.7">DFS</text>
          <text x="45%" y="60%" className="text-xs fill-current" opacity="0.7">Dijkstra</text>
          <text x="10%" y="75%" className="text-xs fill-current" opacity="0.7">DP</text>
          <text x="85%" y="55%" className="text-xs fill-current" opacity="0.7">Binary Search</text>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="relative z-10 text-center sm:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            <span className="block">Hi, I'm Poornachandra Doddi</span>
            <span className="block mt-2 text-blue-600 dark:text-blue-400 h-16">
              I'm a <span className="inline-block min-w-0">{typedText}</span>
              <span className="animate-blink">|</span>
            </span>
          </h1>
          
          <p className="mt-6 max-w-lg mx-auto sm:mx-0 text-xl text-gray-600 dark:text-gray-300 sm:max-w-xl">
            Chemical Engineering Student at IIT Kharagpur with strong algorithmic problem-solving skills.
            Expert on Codeforces, 4-star on CodeChef, and passionate about building efficient solutions.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <a 
              href="/resume.pdf"
              download
              className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Download Resume <Download size={18} className="ml-2" />
            </a>
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm text-base font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              View Projects <ChevronRight size={18} className="ml-2" />
            </Link>
          </div>
          
          {/* Code snippet decoration */}
          <div className="hidden lg:block absolute top-0 right-0 mt-16 mr-8 max-w-xs">
            <div className="bg-gray-900 dark:bg-gray-800 rounded-lg shadow-xl p-4 text-green-400 font-mono text-sm">
              <div className="flex items-center mb-3">
                <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-gray-400 text-xs">optimal_solution.cpp</span>
              </div>
              <pre className="text-xs leading-relaxed">
                <code>{`#include <bits/stdc++.h>
using namespace std;
#define ll long long

ll binpow(ll a, ll b, ll m = 1e18) {
    ll res = 1;
    while (b > 0) {
        if (b & 1)
            res = res * a % m;
        a = a * a % m; b >> = 1;
    }
    return res;
}
int main() {
  ll a, b; cin >> a >> b;
  cout << binpow(a,b)<<endl;
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;