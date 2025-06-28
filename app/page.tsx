'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code2, 
  Server, 
  Layers, 
  Github, 
  Linkedin, 
  Star, 
  Users, 
  BookOpen, 
  Trophy,
  ArrowRight,
  Menu,
  X,
  Globe,
  Zap,
  Target,
  Play,
  Clock,
  Award,
  MessageCircle,
  ChevronDown
} from 'lucide-react';
import Link from 'next/link';

// Icon mapping for serializable icon names
const iconMap = {
  Code2,
  Server,
  Layers
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const courses = [
    {
      id: 'frontend-development',
      title: 'Frontend Development',
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
      modules: 8
    },
    {
      id: 'backend-development',
      title: 'Backend Development',
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
      modules: 10
    },
    {
      id: 'fullstack-development',
      title: 'Full Stack Development',
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
      modules: 15
    },
    {
      id: 'python-programming',
      title: 'Python Programming',
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
      modules: 6
    }
  ];

  const instructors = [
    {
      name: 'Samir Rain',
      title: 'Senior Full Stack Developer & Frontend Specialist',
      bio: 'Expert in modern web technologies with 8+ years of experience building scalable applications. Passionate about teaching clean code, React ecosystem, and modern development practices.',
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400',
      github: 'codewithsamir',
      linkedin: 'samir-rain',
      specialties: ['React.js', 'Next.js', 'JavaScript', 'Frontend Architecture'],
      experience: '8+ years',
      students: '500+'
    },
    {
      name: 'MD Nawaj Sarif Rain',
      title: 'BroklyMaster Founder & Lead Instructor',
      bio: 'Seasoned full-stack developer and educator with extensive experience in modern web development. Founder of BroklyMaster with a mission to create world-class developers through practical learning.',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400',
      github: 'https://github.com/Nawaj2417/',
      linkedin: 'nawajsarifrain',
      specialties: ['Full Stack', 'Python/Django', 'DevOps', 'System Design'],
      experience: '10+ years',
      students: '750+'
    }
  ];

  const stats = [
    { icon: Users, value: '1000+', label: 'Students Enrolled' },
    { icon: BookOpen, value: '25+', label: 'Courses Available' },
    { icon: Trophy, value: '95%', label: 'Job Placement Rate' },
    { icon: Star, value: '4.9/5', label: 'Average Rating' }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Project-Based Learning',
      description: 'Build 15+ real-world projects that you can showcase in your portfolio and impress employers'
    },
    {
      icon: Target,
      title: 'Industry-Relevant Curriculum',
      description: 'Learn the latest technologies and frameworks used by top companies like Google, Netflix, and Airbnb'
    },
    {
      icon: Users,
      title: 'Personal Mentorship',
      description: 'Get one-on-one guidance from experienced industry professionals and career counseling'
    },
    {
      icon: Globe,
      title: 'Global Community',
      description: 'Join a network of 1000+ developers from around the world and collaborate on projects'
    }
  ];

  const faqs = [
    {
      question: 'How do I enroll in a course?',
      answer: 'Simply click on any course card, review the details, and click "Enroll Now". You can pay securely with credit card or PayPal.'
    },
    {
      question: 'What do I get when I enroll?',
      answer: 'You get lifetime access to course materials, 1-on-1 mentorship, project reviews, career guidance, and access to our exclusive Discord community.'
    },
    {
      question: 'Is there ongoing support?',
      answer: 'Yes! You get direct access to instructors via Discord, weekly live Q&A sessions, and personalized code reviews for all your projects.'
    },
    {
      question: 'Can I get a job after completing the course?',
      answer: 'We have a 95% job placement rate! We provide career counseling, resume reviews, interview preparation, and connect you with our hiring partners.'
    },
    {
      question: 'Are there any prerequisites?',
      answer: 'Most courses start from basics, but having basic computer skills is helpful. Each course page lists specific prerequisites if any.'
    }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Enrollment Banner */}
      {showBanner && (
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 text-center relative">
          <p className="text-sm font-medium">
            🚀 New batch starts January 15th! Early bird discount: 30% OFF - Limited seats available
          </p>
          <button 
            onClick={() => setShowBanner(false)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      } ${showBanner ? 'mt-12' : ''}`}>
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
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/courses" className="text-gray-700 hover:text-blue-600 transition-colors">Courses</Link>
              <a href="#instructors" className="text-gray-700 hover:text-blue-600 transition-colors">Instructors</a>
              <a href="#community" className="text-gray-700 hover:text-blue-600 transition-colors">Community</a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors">FAQ</a>
              <Link href="/auth/signup">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Enroll Now
                </Button>
              </Link>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/courses" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Courses</Link>
              <a href="#instructors" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Instructors</a>
              <a href="#community" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Community</a>
              <a href="#faq" className="block px-3 py-2 text-gray-700 hover:text-blue-600">FAQ</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${showBanner ? 'pt-44' : 'pt-32'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              🎓 Your Gateway to Practical, Modern Coding Skills
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Master <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Full-Stack Development
              </span>
              <br />from Scratch
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Build real-world projects with React, Next.js, Django, Python, and more. 
              Join 1000+ students who transformed their careers with hands-on learning and expert mentorship.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/courses">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3">
                  <Play className="mr-2 w-5 h-5" />
                  View Courses
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                  Enroll Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            {/* Demo Video Section */}
            <div className="mb-16">
              <div className="relative max-w-4xl mx-auto">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center border-2 border-white shadow-2xl">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                      <Play className="w-8 h-8 text-blue-600 ml-1" />
                    </div>
                    <p className="text-gray-700 font-medium">Watch: How BroklyMaster Students Land Their Dream Jobs</p>
                    <p className="text-sm text-gray-500 mt-1">3 min demo video</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg mb-3">
                    <stat.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose BroklyMaster?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide more than just courses - we offer a complete learning experience designed for your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800">Our Courses</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Learning Path
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From frontend to full-stack, we have comprehensive courses designed to take you from beginner to professional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {courses.map((course, index) => {
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
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {course.students}
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
                            {course.skills.slice(0, 4).map((skill, skillIndex) => (
                              <Badge key={skillIndex} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                            {course.skills.length > 4 && (
                              <Badge variant="secondary" className="text-xs">
                                +{course.skills.length - 4} more
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

          <div className="text-center mt-12">
            <Link href="/courses">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                View All Courses
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section id="instructors" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800">Meet Your Instructors</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Learn from Industry Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our instructors bring years of real-world experience and are passionate about helping you succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {instructors.map((instructor, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow border-0 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="pt-8">
                  <div className="relative mb-6">
                    <img
                      src={instructor.image}
                      alt={instructor.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                        Expert Instructor
                      </Badge>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{instructor.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{instructor.title}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{instructor.bio}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{instructor.experience}</div>
                      <div className="text-sm text-gray-500">Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{instructor.students}</div>
                      <div className="text-sm text-gray-500">Students Taught</div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-sm font-medium text-gray-900 mb-2">Specialties:</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {instructor.specialties.map((specialty, specialtyIndex) => (
                        <Badge key={specialtyIndex} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-center space-x-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={instructor.github.startsWith('http') ? instructor.github : `https://github.com/${instructor.github}`} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={`https://linkedin.com/in/${instructor.linkedin}`} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white text-blue-600">Join Our Community</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Connect with 1000+ Developers
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join our exclusive Discord community where students collaborate on projects, 
            share knowledge, get help from instructors, and network with fellow developers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
              <MessageCircle className="mr-2 w-5 h-5" />
              Join Discord Community
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3">
              <Users className="mr-2 w-5 h-5" />
              WhatsApp Study Groups
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-100 text-yellow-800">Frequently Asked Questions</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Got Questions? We've Got Answers
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our courses and learning experience.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardContent className="p-0">
                  <button
                    className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                      <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${
                        openFaq === index ? 'transform rotate-180' : ''
                      }`} />
                    </div>
                    {openFaq === index && (
                      <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
                    )}
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Join thousands of students who have landed their dream jobs with BroklyMaster. 
            Start your journey today with our proven curriculum and expert mentorship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-3">
                <Award className="mr-2 w-5 h-5" />
                Enroll Now - 30% OFF
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-600 text-lg px-8 py-3">
              Schedule Free Consultation
            </Button>
          </div>
          <p className="text-sm text-green-100 mt-4">
            💰 30-day money-back guarantee • 🎓 Lifetime access • 👨‍💻 1-on-1 mentorship included
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">BroklyMaster</span>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering the next generation of developers with world-class education and mentorship.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/Nawaj2417/" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/nawajsarifrain" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com/codewithsamir" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-white transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Courses</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/courses/frontend-development" className="hover:text-white transition-colors">Frontend Development</Link></li>
                <li><Link href="/courses/backend-development" className="hover:text-white transition-colors">Backend Development</Link></li>
                <li><Link href="/courses/fullstack-development" className="hover:text-white transition-colors">Full Stack Development</Link></li>
                <li><Link href="/courses/python-programming" className="hover:text-white transition-colors">Python Programming</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#instructors" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#instructors" className="hover:text-white transition-colors">Instructors</a></li>
                <li><a href="#community" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#faq" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#community" className="hover:text-white transition-colors">Discord Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 BroklyMaster. All rights reserved. Built with ❤️ for aspiring developers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}