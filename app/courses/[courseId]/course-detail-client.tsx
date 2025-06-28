'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  ArrowLeft, 
  Clock, 
  Users, 
  Star, 
  Play, 
  CheckCircle, 
  BookOpen, 
  Award,
  Download,
  MessageCircle,
  Github,
  Linkedin,
  Code2,
  Server,
  Layers,
  Target,
  Zap,
  Globe
} from 'lucide-react';
import Link from 'next/link';

// Icon mapping for serializable icon names
const iconMap = {
  Code2,
  Server,
  Layers
};

interface CourseDetailClientProps {
  course: any;
  courseId: string;
}

export default function CourseDetailClient({ course, courseId }: CourseDetailClientProps) {
  const [activeTab, setActiveTab] = useState('overview');

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <Link href="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'syllabus', label: 'Syllabus' },
    { id: 'instructor', label: 'Instructor' },
    { id: 'reviews', label: 'Reviews' }
  ];

  // Get the icon component from the mapping
  const IconComponent = iconMap[course.icon as keyof typeof iconMap] || Code2;

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
              <Link href="/">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Courses
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Enroll Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Course Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <Badge className={`mb-4 bg-gradient-to-r ${course.color} text-white`}>
                  {course.level}
                </Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {course.title}
                </h1>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  {course.description}
                </p>
                
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    {course.students} students
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-2 text-yellow-400 fill-current" />
                    {course.rating} ({course.reviews} reviews)
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-2" />
                    {course.lessons} lessons
                  </div>
                  <div className="flex items-center">
                    <Award className="w-4 h-4 mr-2" />
                    {course.projects} projects
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">What you'll learn:</h3>
                  <div className="flex flex-wrap gap-2">
                    {course.skills.map((skill: string, index: number) => (
                      <Badge key={index} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Course Video/Image */}
              <div className="relative mb-8">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl overflow-hidden">
                  <img 
                    src={course.thumbnail} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform">
                      <Play className="w-8 h-8 text-blue-600 ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enrollment Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8 border-0 shadow-xl">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-3xl font-bold text-gray-900">{course.price}</span>
                      <span className="text-lg text-gray-500 line-through">{course.originalPrice}</span>
                    </div>
                    <Badge className="bg-red-100 text-red-800">30% OFF - Limited Time</Badge>
                  </div>

                  <Link href="/auth/signup">
                    <Button className="w-full mb-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-3">
                      Enroll Now
                    </Button>
                  </Link>
                  
                  <Button variant="outline" className="w-full mb-6">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Free Consultation
                  </Button>

                  <div className="space-y-4 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Duration</span>
                      <span className="font-medium">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Modules</span>
                      <span className="font-medium">{course.modules}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Lessons</span>
                      <span className="font-medium">{course.lessons}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Projects</span>
                      <span className="font-medium">{course.projects}</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <h4 className="font-semibold text-gray-900 mb-3">This course includes:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Lifetime access to course materials
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        1-on-1 mentorship sessions
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Project code reviews
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Certificate of completion
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Discord community access
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        30-day money-back guarantee
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content Tabs */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex space-x-8 border-b mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Course Overview</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {course.description}
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                      <Target className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                      <h4 className="font-semibold text-gray-900 mb-2">Practical Learning</h4>
                      <p className="text-sm text-gray-600">Build {course.projects} real-world projects</p>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                      <Zap className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                      <h4 className="font-semibold text-gray-900 mb-2">Expert Mentorship</h4>
                      <p className="text-sm text-gray-600">1-on-1 guidance from industry experts</p>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                      <Globe className="w-8 h-8 text-green-600 mx-auto mb-3" />
                      <h4 className="font-semibold text-gray-900 mb-2">Career Support</h4>
                      <p className="text-sm text-gray-600">Job placement assistance included</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Projects You'll Build</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {course.projects.map((project: string, index: number) => (
                      <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{project}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'syllabus' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Course Syllabus</h3>
                <div className="space-y-4">
                  {course.syllabus.map((module: any, index: number) => (
                    <Card key={index} className="border-0 shadow-sm">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-lg font-semibold text-gray-900">{module.module}</h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>{module.lessons} lessons</span>
                            <span>{module.duration}</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {module.topics.map((topic: string, topicIndex: number) => (
                            <Badge key={topicIndex} variant="outline" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'instructor' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Meet Your Instructor</h3>
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                      <img
                        src={course.instructor.image}
                        alt={course.instructor.name}
                        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                      <div className="flex-1 text-center md:text-left">
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">{course.instructor.name}</h4>
                        <p className="text-blue-600 font-medium mb-4">{course.instructor.title}</p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600">{course.instructor.experience}</div>
                            <div className="text-sm text-gray-500">Experience</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-purple-600">{course.instructor.students}</div>
                            <div className="text-sm text-gray-500">Students Taught</div>
                          </div>
                        </div>
                        
                        <div className="flex justify-center md:justify-start space-x-4">
                          <Button variant="outline" size="sm" asChild>
                            <a href={course.instructor.github.startsWith('http') ? course.instructor.github : `https://github.com/${course.instructor.github}`} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              GitHub
                            </a>
                          </Button>
                          <Button variant="outline" size="sm" asChild>
                            <a href={`https://linkedin.com/in/${course.instructor.linkedin}`} target="_blank" rel="noopener noreferrer">
                              <Linkedin className="w-4 h-4 mr-2" />
                              LinkedIn
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Student Reviews</h3>
                <div className="space-y-6">
                  {course.testimonials.map((testimonial: any, index: number) => (
                    <Card key={index} className="border-0 shadow-sm">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="flex items-center">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                          <span className="ml-2 text-sm text-gray-500">({testimonial.rating}/5)</span>
                        </div>
                        <p className="text-gray-700 mb-4 leading-relaxed">"{testimonial.content}"</p>
                        <div>
                          <p className="font-semibold text-gray-900">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join {course.students}+ students who are already mastering {course.title.toLowerCase()}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
                Enroll Now - {course.price}
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3">
              <MessageCircle className="mr-2 w-5 h-5" />
              Free Consultation
            </Button>
          </div>
          <p className="text-sm text-blue-100 mt-4">
            💰 30-day money-back guarantee • 🎓 Lifetime access • 👨‍💻 1-on-1 mentorship
          </p>
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
            <div className="flex justify-center space-x-4">
              <a href="https://github.com/Nawaj2417/" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/nawajsarifrain" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 BroklyMaster. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}