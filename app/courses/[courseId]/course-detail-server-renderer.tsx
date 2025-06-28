import CourseDetailClient from './course-detail-client';

// Course data - in a real app, this would come from an API
const courseData: { [key: string]: any } = {
  'frontend-development': {
    title: 'Frontend Development Mastery',
    description: 'Master modern frontend technologies with hands-on projects and real-world applications. Build responsive, interactive web applications using the latest tools and frameworks.',
    thumbnail: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: 'Code2',
    duration: '12 weeks',
    level: 'Beginner to Advanced',
    students: 245,
    rating: 4.9,
    reviews: 89,
    price: '$299',
    originalPrice: '$399',
    modules: 8,
    lessons: 45,
    projects_no: 6,
    color: 'from-blue-500 to-cyan-500',
    skills: ['HTML5', 'CSS3', 'JavaScript ES6+', 'React.js', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Git & GitHub'],
    instructor: {
      name: 'Samir Rain',
      title: 'Senior Frontend Developer',
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: '8+ years',
      students: '500+',
      github: 'codewithsamir',
      linkedin: 'samir-rain'
    },
    syllabus: [
      { module: 'Module 1: HTML & CSS Fundamentals', lessons: 6, duration: '1 week', topics: ['HTML5 Semantic Elements', 'CSS Grid & Flexbox', 'Responsive Design', 'CSS Animations', 'Accessibility Basics'] },
      { module: 'Module 2: JavaScript Essentials', lessons: 8, duration: '2 weeks', topics: ['ES6+ Features', 'DOM Manipulation', 'Event Handling', 'Async/Await', 'API Integration', 'Error Handling'] },
      { module: 'Module 3: React.js Fundamentals', lessons: 10, duration: '2.5 weeks', topics: ['Components & JSX', 'State & Props', 'Event Handling', 'Conditional Rendering', 'Lists & Keys', 'Forms'] },
      { module: 'Module 4: Advanced React', lessons: 8, duration: '2 weeks', topics: ['Hooks (useState, useEffect, useContext)', 'Custom Hooks', 'Context API', 'Performance Optimization'] },
      { module: 'Module 5: Next.js & TypeScript', lessons: 7, duration: '2 weeks', topics: ['Next.js Setup', 'Routing', 'API Routes', 'TypeScript Integration', 'Static Generation'] },
      { module: 'Module 6: Styling & UI Libraries', lessons: 4, duration: '1 week', topics: ['Tailwind CSS', 'Styled Components', 'UI Component Libraries', 'Design Systems'] },
      { module: 'Module 7: Testing & Deployment', lessons: 3, duration: '1 week', topics: ['Unit Testing', 'Integration Testing', 'Deployment Strategies', 'CI/CD Basics'] },
      { module: 'Module 8: Capstone Project', lessons: 1, duration: '0.5 weeks', topics: ['Full-Stack Application', 'Code Review', 'Portfolio Preparation'] }
    ],
    projects: [
      'Personal Portfolio Website',
      'Todo App with Local Storage',
      'Weather Dashboard with API',
      'E-commerce Product Catalog',
      'Social Media Dashboard',
      'Full-Stack Blog Application'
    ],
    testimonials: [
      { name: 'Sarah Johnson', role: 'Frontend Developer at Google', content: 'This course transformed my career! The hands-on projects and Samir\'s mentorship helped me land my dream job.', rating: 5 },
      { name: 'Mike Chen', role: 'Full Stack Developer', content: 'Best investment I\'ve made. The curriculum is up-to-date and the community support is amazing.', rating: 5 }
    ]
  },

  'backend-development': {
    title: 'Backend Development Mastery',
    description: 'Build robust server-side applications with modern backend technologies and best practices. Master databases, APIs, authentication, and deployment.',
    thumbnail: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: 'Server',
    duration: '14 weeks',
    level: 'Intermediate to Advanced',
    students: 189,
    rating: 4.8,
    reviews: 67,
    price: '$349',
    originalPrice: '$449',
    modules: 10,
    lessons: 58,
    projects_no: 8,
    color: 'from-purple-500 to-pink-500',
    skills: ['Node.js', 'Express.js', 'Django', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL', 'Authentication', 'Docker'],
    instructor: {
      name: 'MD Nawaj Sarif Rain',
      title: 'BroklyMaster Founder & Lead Instructor',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: '10+ years',
      students: '750+',
      github: 'https://github.com/Nawaj2417/',
      linkedin: 'nawajsarifrain'
    },
    syllabus: [
      { module: 'Module 1: Backend Fundamentals', lessons: 5, duration: '1 week', topics: ['Server Architecture', 'HTTP Protocol', 'RESTful Design', 'API Design Principles'] },
      { module: 'Module 2: Node.js & Express', lessons: 8, duration: '2 weeks', topics: ['Node.js Basics', 'Express Setup', 'Middleware', 'Routing', 'Error Handling'] },
      { module: 'Module 3: Database Design', lessons: 7, duration: '1.5 weeks', topics: ['SQL vs NoSQL', 'PostgreSQL', 'MongoDB', 'Database Modeling', 'Migrations'] },
      { module: 'Module 4: Authentication & Security', lessons: 6, duration: '1.5 weeks', topics: ['JWT Tokens', 'Password Hashing', 'OAuth', 'Security Best Practices'] },
      { module: 'Module 5: Advanced APIs', lessons: 8, duration: '2 weeks', topics: ['GraphQL', 'API Documentation', 'Rate Limiting', 'Caching Strategies'] },
      { module: 'Module 6: Python & Django', lessons: 10, duration: '2.5 weeks', topics: ['Python Basics', 'Django Framework', 'Django REST Framework', 'Admin Panel'] },
      { module: 'Module 7: Testing & Monitoring', lessons: 6, duration: '1.5 weeks', topics: ['Unit Testing', 'Integration Testing', 'API Testing', 'Monitoring & Logging'] },
      { module: 'Module 8: DevOps & Deployment', lessons: 5, duration: '1 week', topics: ['Docker Basics', 'CI/CD Pipelines', 'Cloud Deployment', 'Environment Management'] },
      { module: 'Module 9: Performance & Scaling', lessons: 4, duration: '1 week', topics: ['Database Optimization', 'Caching', 'Load Balancing', 'Microservices Intro'] },
      { module: 'Module 10: Capstone Project', lessons: 1, duration: '1 week', topics: ['Full Backend System', 'Code Review', 'Deployment'] }
    ],
    projects: [
      'RESTful API with Authentication',
      'Blog API with CRUD Operations',
      'E-commerce Backend System',
      'Real-time Chat Application',
      'File Upload & Processing Service',
      'Social Media API',
      'Payment Integration System',
      'Microservices Architecture Project'
    ],
    testimonials: [
      { name: 'David Rodriguez', role: 'Backend Engineer at Netflix', content: 'Nawaj\'s teaching style is exceptional. The course covers everything from basics to advanced concepts.', rating: 5 },
      { name: 'Emily Zhang', role: 'DevOps Engineer', content: 'The deployment and DevOps modules were game-changers for my career progression.', rating: 5 }
    ]
  },

  'fullstack-development': {
    title: 'Full Stack Development Bootcamp',
    description: 'Complete end-to-end development combining frontend and backend with modern deployment strategies. Build production-ready applications from scratch.',
    thumbnail: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: 'Layers',
    duration: '20 weeks',
    level: 'All Levels',
    students: 312,
    rating: 4.9,
    reviews: 124,
    modules: 15,
    lessons: 85,
    projects_no: 12,
    color: 'from-green-500 to-emerald-500',
    skills: ['MERN Stack', 'Next.js', 'Django', 'PostgreSQL', 'Docker', 'AWS', 'DevOps', 'System Design'],
    instructor: {
      name: 'Both Instructors',
      title: 'Team Teaching Approach',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: '18+ years combined',
      students: '1250+',
      github: 'BroklyMaster',
      linkedin: 'broklymaster'
    },
    syllabus: [
      { module: 'Module 1-4: Frontend Mastery', lessons: 25, duration: '6 weeks', topics: ['HTML/CSS/JS', 'React.js', 'Next.js', 'TypeScript', 'State Management'] },
      { module: 'Module 5-8: Backend Mastery', lessons: 30, duration: '7 weeks', topics: ['Node.js/Express', 'Python/Django', 'Databases', 'APIs', 'Authentication'] },
      { module: 'Module 9-12: Integration & Advanced Topics', lessons: 20, duration: '5 weeks', topics: ['Full Stack Integration', 'Real-time Features', 'Testing', 'Performance'] },
      { module: 'Module 13-15: DevOps & Deployment', lessons: 10, duration: '2 weeks', topics: ['Docker', 'CI/CD', 'Cloud Deployment', 'Monitoring', 'System Design'] }
    ],
    projects: [
      'Personal Portfolio',
      'Todo Application',
      'Blog Platform',
      'E-commerce Store',
      'Social Media App',
      'Real-time Chat',
      'Project Management Tool',
      'Video Streaming Platform',
      'Job Board Application',
      'Learning Management System',
      'Fintech Dashboard',
      'Capstone: Your Own Startup Idea'
    ],
    testimonials: [
      { name: 'Alex Thompson', role: 'Full Stack Developer at Airbnb', content: 'This bootcamp is comprehensive and practical. I went from zero to landing a job at Airbnb!', rating: 5 },
      { name: 'Maria Garcia', role: 'Tech Lead at Startup', content: 'The system design and architecture modules prepared me for senior-level responsibilities.', rating: 5 }
    ]
  },

  'python-programming': {
    title: 'Python Programming Fundamentals',
    description: 'Learn Python from basics to advanced concepts with practical projects and applications. Perfect foundation for web development, data science, and automation.',
    thumbnail: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: 'Code2',
    duration: '10 weeks',
    level: 'Beginner to Intermediate',
    students: 156,
    rating: 4.7,
    reviews: 45,
    modules: 6,
    lessons: 35,
    projects_no: 5,
    color: 'from-yellow-500 to-orange-500',
    skills: ['Python Basics', 'OOP', 'Data Structures', 'Web Scraping', 'APIs', 'Django Basics', 'Testing'],
    instructor: {
      name: 'MD Nawaj Sarif Rain',
      title: 'Python Expert & Django Specialist',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: '10+ years',
      students: '750+',
      github: 'https://github.com/Nawaj2417/',
      linkedin: 'nawajsarifrain'
    },
    syllabus: [
      { module: 'Module 1: Python Fundamentals', lessons: 8, duration: '2 weeks', topics: ['Variables & Data Types', 'Control Structures', 'Functions', 'Error Handling'] },
      { module: 'Module 2: Data Structures', lessons: 6, duration: '1.5 weeks', topics: ['Lists & Tuples', 'Dictionaries & Sets', 'List Comprehensions', 'Iterators'] },
      { module: 'Module 3: Object-Oriented Programming', lessons: 7, duration: '2 weeks', topics: ['Classes & Objects', 'Inheritance', 'Polymorphism', 'Encapsulation'] },
      { module: 'Module 4: File Handling & APIs', lessons: 6, duration: '1.5 weeks', topics: ['File Operations', 'JSON Handling', 'HTTP Requests', 'API Integration'] },
      { module: 'Module 5: Web Development Basics', lessons: 6, duration: '2 weeks', topics: ['Django Introduction', 'Models & Views', 'Templates', 'Forms'] },
      { module: 'Module 6: Projects & Testing', lessons: 2, duration: '1 week', topics: ['Unit Testing', 'Project Development', 'Code Review'] }
    ],
    projects: [
      'Calculator Application',
      'Web Scraper Tool',
      'Personal Finance Tracker',
      'Weather API Integration',
      'Simple Django Blog'
    ],
    testimonials: [
      { name: 'John Smith', role: 'Data Analyst', content: 'Perfect introduction to Python. The projects helped me understand real-world applications.', rating: 5 },
      { name: 'Lisa Wang', role: 'Backend Developer', content: 'Great foundation course. Prepared me well for advanced backend development.', rating: 4 }
    ]
  }
};


interface CourseDetailServerRendererProps {
  courseId: string;
}

export default function CourseDetailServerRenderer({ courseId }: CourseDetailServerRendererProps) {
  const course = courseData[courseId];

  return <CourseDetailClient course={course} courseId={courseId} />;
}