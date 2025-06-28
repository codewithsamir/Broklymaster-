'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Code2, 
  Server, 
  Layers, 
  Star, 
  Users, 
  BookOpen, 
  Clock,
  ArrowRight,
  Search,
  Filter,
  SlidersHorizontal
} from 'lucide-react';
import Link from 'next/link';

// Icon mapping for serializable icon names
const iconMap = {
  Code2,
  Server,
  Layers
};

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const courses = [
    {
      id: 'frontend-development',
      title: 'Frontend Development Mastery',
      description: 'Master modern frontend technologies with hands-on projects and real-world applications.',
      thumbnail: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: 'Code2',
      duration: '12 weeks',
      level: 'Beginner to Advanced',
      students: 245,
      rating: 4.9,
      skills: ['HTML5', 'CSS3', 'JavaScript ES6+', 'React.js', 'Next.js', 'Tailwind CSS'],
      color: 'from-blue-500 to-cyan-500',
      price: '$299',
      originalPrice: '$399',
      modules: 8,
      category: 'Frontend'
    },
    {
      id: 'backend-development',
      title: 'Backend Development Mastery',
      description: 'Build robust server-side applications with modern backend technologies and best practices.',
      thumbnail: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: 'Server',
      duration: '14 weeks',
      level: 'Intermediate to Advanced',
      students: 189,
      rating: 4.8,
      skills: ['Node.js', 'Express.js', 'Django', 'PostgreSQL', 'REST APIs', 'Authentication'],
      color: 'from-purple-500 to-pink-500',
      price: '$349',
      originalPrice: '$449',
      modules: 10,
      category: 'Backend'
    },
    {
      id: 'fullstack-development',
      title: 'Full Stack Development Bootcamp',
      description: 'Complete end-to-end development combining frontend and backend with deployment strategies.',
      thumbnail: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: 'Layers',
      duration: '20 weeks',
      level: 'All Levels',
      students: 312,
      rating: 4.9,
      skills: ['MERN Stack', 'Next.js + Django', 'PostgreSQL', 'Docker', 'AWS/Vercel', 'DevOps'],
      color: 'from-green-500 to-emerald-500',
      price: '$499',
      originalPrice: '$699',
      modules: 15,
      category: 'Full Stack'
    },
    {
      id: 'python-programming',
      title: 'Python Programming Fundamentals',
      description: 'Learn Python from basics to advanced concepts with practical projects and applications.',
      thumbnail: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: 'Code2',
      duration: '10 weeks',
      level: 'Beginner to Intermediate',
      students: 156,
      rating: 4.7,
      skills: ['Python Basics', 'OOP', 'Data Structures', 'Web Scraping', 'APIs', 'Django Basics'],
      color: 'from-yellow-500 to-orange-500',
      price: '$249',
      originalPrice: '$349',
      modules: 6,
      category: 'Programming'
    }
  ];

  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced', 'All Levels'];
  const categories = ['All', 'Frontend', 'Backend', 'Full Stack', 'Programming'];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesLevel = selectedLevel === 'All' || course.level.includes(selectedLevel);
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    
    return matchesSearch && matchesLevel && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                BroklyMaster
              </span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <Link href="/auth/login">
                <Button variant="outline" size="sm">
                  Sign In
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              All Courses
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive collection of courses designed to take you from beginner to professional developer.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Search courses, skills, or technologies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-12 text-base"
                  />
                </div>
              </div>

              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="min-w-[150px]">
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="w-full h-12 px-3 border border-gray-300 rounded-md bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {levels.map(level => (
                      <option key={level} value={level}>{level} Level</option>
                    ))}
                  </select>
                </div>
                
                <div className="min-w-[150px]">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full h-12 px-3 border border-gray-300 rounded-md bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category === 'All' ? 'All Categories' : category}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Results count */}
            <div className="mt-4 text-sm text-gray-600">
              Showing {filteredCourses.length} of {courses.length} courses
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCourses.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No courses found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedLevel('All');
                  setSelectedCategory('All');
                }}
                variant="outline"
              >
                Clear filters
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course, index) => {
                const IconComponent = iconMap[course.icon as keyof typeof iconMap] || Code2;
                
                return (
                  <Link key={index} href={`/courses/${course.id}`}>
                    <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm cursor-pointer h-full">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img 
                          src={course.thumbnail} 
                          alt={course.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className={`bg-gradient-to-r ${course.color} text-white`}>
                            {course.level}
                          </Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-white text-gray-900 font-bold">
                            {course.price}
                          </Badge>
                        </div>
                        <div className="absolute bottom-4 right-4">
                          <Badge variant="secondary" className="bg-white/90 text-gray-700">
                            {course.category}
                          </Badge>
                        </div>
                      </div>
                      
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r ${course.color}`}>
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {course.duration}
                            </div>
                          </div>
                        </div>
                        <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                        <CardDescription className="text-gray-600">
                          {course.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                              <span className="text-sm font-medium">{course.rating}</span>
                              <span className="text-sm text-gray-500 ml-1">({course.students} students)</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                              <BookOpen className="w-4 h-4 mr-1" />
                              {course.modules} modules
                            </div>
                          </div>
                          
                          <div>
                            <p className="text-sm font-medium text-gray-900 mb-2">You'll Learn:</p>
                            <div className="flex flex-wrap gap-2">
                              {course.skills.slice(0, 3).map((skill, skillIndex) => (
                                <Badge key={skillIndex} variant="secondary" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                              {course.skills.length > 3 && (
                                <Badge variant="secondary" className="text-xs">
                                  +{course.skills.length - 3} more
                                </Badge>
                              )}
                            </div>
                          </div>
                          
                          <Button className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                            View Course Details
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of students who have transformed their careers with BroklyMaster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
                Get Started Today
              </Button>
            </Link>
            <Link href="/auth/login">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/" className="inline-flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">BroklyMaster</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Empowering the next generation of developers with world-class education.
            </p>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 BroklyMaster. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}