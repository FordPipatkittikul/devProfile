"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";

export default function BackendDeveloperRoadmap() {
  const [expandedSection, setExpandedSection] = useState(null);
  
  const learningPath = [
    {
      id: 'fundamentals',
      title: 'Programming Fundamentals',
      description: 'Master the basics of programming logic and structures',
      steps: [
        'Learn a language (JavaScript, Python, Java, etc.)',
        'Understand data structures and algorithms',
        'Practice problem-solving skills',
        'Learn object-oriented programming concepts',
        'Version control with Git'
      ],
      resources: [
        'freeCodeCamp.org - Programming fundamentals',
        'Codecademy - Python, JavaScript, or Java course',
        'LeetCode - Algorithm practice',
        'GitHub crash course on youtube'
      ]
    },
    {
      id: 'web-basics',
      title: 'Web Development Basics',
      description: 'Understand how the web works and server fundamentals',
      steps: [
        'HTTP/HTTPS protocols',
        'Client-server architecture',
        'Web security fundamentals',
        'Basic terminal/command line skills',
        'RESTful API concepts'
      ],
      resources: [
        'Mozilla Developer Network (MDN) - HTTP documentation',
        'REST API Tutorial on youtube',
        'Command Line Crash Course on youtube'
      ]
    },
    {
      id: 'node',
      title: 'Node.js Fundamentals',
      description: 'Learn server-side JavaScript with Node.js',
      steps: [
        'Asynchronous programming (Promises, async/await)',
        'Node.js runtime environment',
        'NPM ecosystem',
        'Express.js framework',
        'Building RESTful APIs'
      ],
      resources: [
        'Node.js Documentation',
        'Express.js Tutorial on youtube',
        'Udemy - Node.js Developer Course'
      ]
    },
    {
      id: 'databases',
      title: 'Database Management',
      description: 'Master data storage and retrieval techniques',
      steps: [
        'SQL fundamentals',
        'NoSQL concepts',
        'PostgreSQL or MySQL',
        'MongoDB',
        'Database design and optimization',
        'ORM/ODM (Sequelize, Mongoose)'
      ],
      resources: [
        'SQL Tutorial by W3Schools',
        'MongoDB University',
        'Database Design for Mere Mortals (book)'
      ]
    },
    {
      id: 'api',
      title: 'API Development',
      description: 'Build robust and scalable APIs',
      steps: [
        'RESTful API design principles',
        'GraphQL',
        'API authentication (JWT, OAuth)',
        'Rate limiting and caching',
        'API documentation (Swagger/OpenAPI)'
      ],
      resources: [
        'REST API Design Rulebook',
        'Apollo GraphQL Tutorial on youtube',
        'JWT.io'
      ]
    },
    {
      id: 'testing',
      title: 'Testing & Debugging',
      description: 'Ensure your code works as expected',
      steps: [
        'Unit testing',
        'Integration testing',
        'End-to-end testing',
        'Test-driven development (TDD)',
        'Debugging techniques',
        'Test frameworks (Jest, Mocha)'
      ],
      resources: [
        'Jest Documentation',
        'Test-Driven Development by Example (book)',
        'Debugging Node.js Applications'
      ]
    },
    {
      id: 'devops',
      title: 'DevOps & Deployment',
      description: 'Learn to deploy and manage your applications',
      steps: [
        'Docker containerization',
        'CI/CD pipelines',
        'Cloud platforms (AWS, Azure, GCP)',
        'Serverless architecture',
        'Monitoring and logging'
      ],
      resources: [
        'Docker Documentation',
        'GitHub Actions Tutorial on youtube',
        'AWS Free Tier Tutorials'
      ]
    },
    {
      id: 'security',
      title: 'Security Best Practices',
      description: 'Protect your applications from vulnerabilities',
      steps: [
        'OWASP top 10 vulnerabilities',
        'Input validation and sanitization',
        'Authentication & authorization',
        'HTTPS implementation',
        'Security headers and best practices'
      ],
      resources: [
        'OWASP Web Security Testing Guide',
        'Web Security Academy by PortSwigger',
        'Security in Node.js Applications'
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced Topics',
      description: 'Take your skills to the next level',
      steps: [
        'Microservices architecture',
        'Message queues (RabbitMQ, Kafka)',
        'WebSockets for real-time applications',
        'Performance optimization',
        'Scaling strategies'
      ],
      resources: [
        'Microservices Pattern (book)',
        'RabbitMQ Tutorials',
        'Socket.io Documentation'
      ]
    }
  ];

  const toggleSection = (id) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <div>
        <Navbar/>
        <div className="min-h-screen bg-gray-100 py-12 px-4">
        
        <div className="max-w-4xl mx-auto">
            <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center text-gray-800 mb-2"
            >
            Backend Developer Learning Path
            </motion.h1>
            
            <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.2 } }}
            className="text-center text-gray-600 mb-12"
            >
            A comprehensive roadmap to guide your journey into backend development
            </motion.p>

            <div className="space-y-6">
            {learningPath.map((section, index) => (
                <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                <motion.button
                    onClick={() => toggleSection(section.id)}
                    className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
                    whileHover={{ backgroundColor: "rgba(0,0,0,0.03)" }}
                >
                    <div>
                    <h2 className="text-xl font-semibold text-gray-800">{index + 1}. {section.title}</h2>
                    <p className="text-gray-600">{section.description}</p>
                    </div>
                    <motion.div
                    animate={{ rotate: expandedSection === section.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                    </motion.div>
                </motion.button>

                <AnimatePresence>
                    {expandedSection === section.id && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-4 overflow-hidden"
                    >
                        <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                        <div>
                            <h3 className="font-medium text-gray-800 mb-2">Learning Steps:</h3>
                            <ul className="space-y-2">
                            {section.steps.map((step, i) => (
                                <motion.li 
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start"
                                >
                                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 mr-2 flex-shrink-0 text-sm">
                                    {i + 1}
                                </span>
                                <span className="text-gray-700">{step}</span>
                                </motion.li>
                            ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-medium text-gray-800 mb-2">Recommended Resources:</h3>
                            <ul className="space-y-2">
                            {section.resources.map((resource, i) => (
                                <motion.li 
                                key={i}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center"
                                >
                                <span className="mr-2 text-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                </span>
                                <span className="text-gray-700">{resource}</span>
                                </motion.li>
                            ))}
                            </ul>
                        </div>
                        </div>
                    </motion.div>
                    )}
                </AnimatePresence>
                </motion.div>
            ))}
            </div>

            <div className="mt-16 text-center">
            <p className="text-gray-600">Important! Lastly use your knowledge and apply it. Do a project, get a freelance job. Just do it</p>
            <p className="text-gray-600 mt-2">Happy coding!</p>
            </div>
        </div>
        
        </div>
        <Footer/>
    </div>
  );
}