'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Github, Linkedin, Mail, ExternalLink, Download, Menu, X, Twitter, Terminal, Code2, Braces, Cpu, Zap } from 'lucide-react'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [formStatus, setFormStatus] = useState('')
  const [displayText, setDisplayText] = useState('')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const canvasRef = useRef(null)

  const fullText = "< Full Stack Developer />";

  // Typing effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  // Matrix rain effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*(){}[]<>/~';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0f0';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
      category: 'fullstack',
      tags: ['Next.js', 'MongoDB', 'Stripe', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      link: '#',
      github: '#',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 2,
      title: 'AI Content Generator',
      description: 'AI-powered content creation tool using OpenAI GPT-4 for generating blog posts, social media content.',
      category: 'ai',
      tags: ['React', 'OpenAI', 'Node.js', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      link: '#',
      github: '#',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Real-Time Chat Application',
      description: 'WebSocket-based chat app with rooms, private messaging, and file sharing capabilities.',
      category: 'fullstack',
      tags: ['Socket.io', 'React', 'Express', 'Redis'],
      image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&q=80',
      link: '#',
      github: '#',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 4,
      title: 'Portfolio Dashboard',
      description: 'Interactive dashboard for tracking cryptocurrency portfolio with real-time price updates.',
      category: 'frontend',
      tags: ['Vue.js', 'Chart.js', 'REST API', 'TailwindCSS'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      link: '#',
      github: '#',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 5,
      title: 'Task Management System',
      description: 'Collaborative project management tool with kanban boards, time tracking, and team collaboration.',
      category: 'fullstack',
      tags: ['React', 'Node.js', 'MongoDB', 'WebSocket'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      link: '#',
      github: '#',
      color: 'from-red-500 to-rose-500'
    },
    {
      id: 6,
      title: 'Weather Forecast App',
      description: 'Beautiful weather application with 7-day forecasts, interactive maps, and location-based alerts.',
      category: 'frontend',
      tags: ['React', 'OpenWeather API', 'Leaflet', 'CSS'],
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80',
      link: '#',
      github: '#',
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  const experience = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud services. Mentoring junior developers and architecting solutions for enterprise clients.',
      achievements: [
        'Reduced application load time by 60% through optimization',
        'Led team of 5 developers on major product launch',
        'Implemented CI/CD pipeline reducing deployment time by 80%'
      ],
      icon: <Cpu className="w-6 h-6" />
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with design and product teams to deliver high-quality solutions.',
      achievements: [
        'Built 15+ client projects from scratch',
        'Improved code quality by implementing testing practices',
        'Reduced bug reports by 45% through better QA processes'
      ],
      icon: <Code2 className="w-6 h-6" />
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: 'StartUp Studios',
      period: '2018 - 2020',
      description: 'Created responsive and interactive user interfaces for various web applications. Worked closely with UX designers to implement pixel-perfect designs.',
      achievements: [
        'Developed reusable component library used across 10+ projects',
        'Improved mobile responsiveness across all products',
        'Contributed to open-source projects and internal tools'
      ],
      icon: <Braces className="w-6 h-6" />
    }
  ]

  const education = [
    {
      id: 1,
      degree: 'Master of Computer Science',
      institution: 'University of Technology',
      period: '2016 - 2018',
      description: 'Specialized in Software Engineering and Web Technologies. Thesis on scalable microservices architecture.',
      gpa: '3.9/4.0'
    },
    {
      id: 2,
      degree: 'Bachelor of Computer Science',
      institution: 'State University',
      period: '2012 - 2016',
      description: 'Core computer science fundamentals with focus on algorithms, data structures, and software development.',
      gpa: '3.7/4.0'
    }
  ]

  const skills = {
    frontend: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Vue.js', level: 85 }
    ],
    backend: [
      { name: 'Node.js', level: 93 },
      { name: 'Python', level: 87 },
      { name: 'GraphQL', level: 82 },
      { name: 'REST API', level: 95 },
      { name: 'Microservices', level: 80 }
    ],
    database: [
      { name: 'MongoDB', level: 90 },
      { name: 'PostgreSQL', level: 88 },
      { name: 'Redis', level: 85 },
      { name: 'MySQL', level: 82 }
    ],
    tools: [
      { name: 'Git', level: 95 },
      { name: 'Docker', level: 88 },
      { name: 'AWS', level: 85 },
      { name: 'CI/CD', level: 90 }
    ]
  }

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('sending')
    
    setTimeout(() => {
      setFormStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setFormStatus(''), 3000)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden">
      {/* Matrix Background */}
      <canvas 
        ref={canvasRef} 
        className="fixed inset-0 pointer-events-none z-0 opacity-30"
      />

      {/* Cursor follower */}
      <div 
        className="pointer-events-none fixed w-6 h-6 border-2 border-green-500 rounded-full z-50 mix-blend-difference transition-transform duration-100"
        style={{
          left: `${mousePosition.x - 12}px`,
          top: `${mousePosition.y - 12}px`,
        }}
      />

      {/* Grid overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(0, 255, 0, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 0, 0.3) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/80 border-b-2 border-green-500/30 shadow-lg shadow-green-500/20">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2 animate-pulse">
              <Terminal className="w-6 h-6 text-green-500" />
              <h1 className="text-xl font-bold text-green-500">{'<JohnDoe />'}</h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              {['about', 'skills', 'experience', 'education', 'projects', 'contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item)} 
                  className="hover:text-green-300 transition-all hover:scale-110 relative group"
                >
                  <span className="text-green-600 group-hover:text-green-400">$</span> {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-green-500 hover:text-green-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-black/95 border-t border-green-500/30 animate-slideDown">
              <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                {['about', 'skills', 'experience', 'education', 'projects', 'contact'].map((item) => (
                  <button 
                    key={item}
                    onClick={() => scrollToSection(item)} 
                    className="text-left hover:text-green-300 transition-colors"
                  >
                    <span className="text-green-600">$</span> {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-20">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-6 animate-fadeIn">
              <div className="inline-block text-green-600 mb-4 text-sm">
                <span className="animate-blink">{'>'}</span> Initializing portfolio.exe...
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-glitch" data-text="JOHN DOE">
              <span className="text-green-500 drop-shadow-[0_0_10px_rgba(0,255,0,0.5)]">JOHN DOE</span>
            </h1>
            
            <div className="text-2xl md:text-4xl mb-4 h-12 flex items-center justify-center">
              <span className="text-green-400">{displayText}</span>
              <span className="animate-blink text-green-500 ml-1">|</span>
            </div>

            <div className="max-w-2xl mx-auto mb-8">
              <div className="border-2 border-green-500/30 p-6 rounded-lg bg-black/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 shadow-lg shadow-green-500/20">
                <p className="text-green-300 text-sm md:text-base leading-relaxed">
                  <span className="text-green-600">{'// '}</span>
                  Passionate about crafting elegant solutions to complex problems.
                  <br />
                  <span className="text-green-600">{'// '}</span>
                  Turning coffee into code since 2018.
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Button 
                onClick={() => scrollToSection('projects')} 
                className="bg-green-500 hover:bg-green-600 text-black font-bold border-2 border-green-400 shadow-lg shadow-green-500/50 hover:shadow-green-500/80 transition-all animate-pulse-slow"
              >
                <Zap className="w-4 h-4 mr-2" />
                View Projects
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline" 
                className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-all"
              >
                <Terminal className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-all"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>

            <div className="flex gap-4 justify-center">
              {[
                { Icon: Github, href: 'https://github.com' },
                { Icon: Linkedin, href: 'https://linkedin.com' },
                { Icon: Twitter, href: 'https://twitter.com' },
                { Icon: Mail, href: 'mailto:john@example.com' }
              ].map(({ Icon, href }, idx) => (
                <a 
                  key={idx}
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 border-2 border-green-500/50 rounded-lg hover:border-green-500 hover:bg-green-500/20 transition-all hover:scale-110 hover:shadow-lg hover:shadow-green-500/50"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-green-500">
              <span className="text-green-600">{'<'}</span>
              About
              <span className="text-green-600">{' />'}</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="border-2 border-green-500/30 rounded-lg p-8 bg-black/50 backdrop-blur-sm transform hover:border-green-500/60 transition-all duration-300 shadow-xl shadow-green-500/10">
                <div className="space-y-4 text-green-300">
                  <div className="flex gap-2">
                    <span className="text-green-600 font-bold">1</span>
                    <p className="flex-1">
                      <span className="text-green-500">const</span> <span className="text-blue-400">developer</span> = {'{'}
                    </p>
                  </div>
                  <div className="flex gap-2 pl-8">
                    <span className="text-green-600 font-bold">2</span>
                    <p className="flex-1">
                      <span className="text-purple-400">name:</span> <span className="text-yellow-300">'John Doe'</span>,
                    </p>
                  </div>
                  <div className="flex gap-2 pl-8">
                    <span className="text-green-600 font-bold">3</span>
                    <p className="flex-1">
                      <span className="text-purple-400">role:</span> <span className="text-yellow-300">'Full Stack Developer'</span>,
                    </p>
                  </div>
                  <div className="flex gap-2 pl-8">
                    <span className="text-green-600 font-bold">4</span>
                    <p className="flex-1">
                      <span className="text-purple-400">experience:</span> <span className="text-yellow-300">'6+ years'</span>,
                    </p>
                  </div>
                  <div className="flex gap-2 pl-8">
                    <span className="text-green-600 font-bold">5</span>
                    <p className="flex-1">
                      <span className="text-purple-400">passion:</span> <span className="text-yellow-300">'Building innovative web applications'</span>,
                    </p>
                  </div>
                  <div className="flex gap-2 pl-8">
                    <span className="text-green-600 font-bold">6</span>
                    <p className="flex-1">
                      <span className="text-purple-400">philosophy:</span> <span className="text-yellow-300">'Clean code, scalable solutions'</span>,
                    </p>
                  </div>
                  <div className="flex gap-2 pl-8">
                    <span className="text-green-600 font-bold">7</span>
                    <p className="flex-1">
                      <span className="text-purple-400">interests:</span> [<span className="text-yellow-300">'AI/ML'</span>, <span className="text-yellow-300">'Cloud Architecture'</span>, <span className="text-yellow-300">'Open Source'</span>],
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-green-600 font-bold">8</span>
                    <p className="flex-1">{'};'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-green-500">
              <span className="text-green-600">{'<'}</span>
              Skills
              <span className="text-green-600">{' />'}</span>
            </h2>
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, skillList], idx) => (
                <div 
                  key={category}
                  className="border-2 border-green-500/30 rounded-lg p-6 bg-black/50 backdrop-blur-sm hover:border-green-500/60 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/10 animate-fadeInUp"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <h3 className="text-2xl font-bold mb-6 text-green-400 flex items-center gap-2">
                    <Terminal className="w-5 h-5" />
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </h3>
                  <div className="space-y-4">
                    {skillList.map((skill, index) => (
                      <div key={index} className="group">
                        <div className="flex justify-between mb-2">
                          <span className="text-green-300 group-hover:text-green-200 transition-colors">{skill.name}</span>
                          <span className="text-green-500 font-bold">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-green-900/30 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full transition-all duration-1000 shadow-lg shadow-green-500/50 animate-progressBar"
                            style={{ width: `${skill.level}%`, animationDelay: `${index * 100}ms` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-green-500">
              <span className="text-green-600">{'<'}</span>
              Experience
              <span className="text-green-600">{' />'}</span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {experience.map((exp, idx) => (
                <div 
                  key={exp.id}
                  className="border-2 border-green-500/30 rounded-lg p-6 bg-black/50 backdrop-blur-sm hover:border-green-500/60 transition-all duration-300 transform hover:translate-x-4 shadow-lg shadow-green-500/10 animate-fadeInLeft"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 border-2 border-green-500 rounded-lg bg-green-500/10">
                      {exp.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-bold text-green-400">{exp.title}</h3>
                        <Badge variant="outline" className="border-green-500 text-green-400 w-fit">
                          {exp.period}
                        </Badge>
                      </div>
                      <p className="text-lg text-green-500 font-semibold mb-3">{exp.company}</p>
                      <p className="text-green-300/80 mb-4">{exp.description}</p>
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, index) => (
                          <div key={index} className="flex items-start gap-2 text-green-300/70">
                            <span className="text-green-500 mt-1">▹</span>
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-green-500">
              <span className="text-green-600">{'<'}</span>
              Education
              <span className="text-green-600">{' />'}</span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {education.map((edu, idx) => (
                <div 
                  key={edu.id}
                  className="border-2 border-green-500/30 rounded-lg p-6 bg-black/50 backdrop-blur-sm hover:border-green-500/60 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/10 animate-fadeInRight"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-green-400">{edu.degree}</h3>
                    <Badge variant="outline" className="border-green-500 text-green-400 w-fit">
                      {edu.period}
                    </Badge>
                  </div>
                  <p className="text-lg text-green-500 font-semibold mb-3">{edu.institution}</p>
                  <p className="text-green-300/80 mb-2">{edu.description}</p>
                  <p className="text-green-400 font-bold">GPA: {edu.gpa}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-green-500">
              <span className="text-green-600">{'<'}</span>
              Projects
              <span className="text-green-600">{' />'}</span>
            </h2>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {['all', 'fullstack', 'frontend', 'ai'].map((filter) => (
                <Button 
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`border-2 transition-all ${
                    activeFilter === filter 
                      ? 'bg-green-500 text-black border-green-500 shadow-lg shadow-green-500/50' 
                      : 'bg-transparent text-green-500 border-green-500 hover:bg-green-500/20'
                  }`}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </Button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {filteredProjects.map((project, idx) => (
                <div 
                  key={project.id}
                  className="border-2 border-green-500/30 rounded-lg overflow-hidden bg-black/50 backdrop-blur-sm hover:border-green-500 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-lg shadow-green-500/10 group animate-fadeInUp"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-40 group-hover:opacity-60 transition-opacity`}></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex gap-3">
                        <Button size="sm" className="bg-black/80 text-green-500 border border-green-500 hover:bg-green-500 hover:text-black">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                        <Button size="sm" className="bg-black/80 text-green-500 border border-green-500 hover:bg-green-500 hover:text-black">
                          <Github className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-green-400">{project.title}</h3>
                    <p className="text-green-300/70 text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="border-green-500/50 text-green-400 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-green-500">
              <span className="text-green-600">{'<'}</span>
              Contact
              <span className="text-green-600">{' />'}</span>
            </h2>
            <div className="max-w-2xl mx-auto">
              <div className="border-2 border-green-500/30 rounded-lg p-8 bg-black/50 backdrop-blur-sm shadow-xl shadow-green-500/20">
                <div className="mb-6">
                  <p className="text-green-400 mb-2">$ send_message --to=john@example.com</p>
                  <p className="text-green-300/70 text-sm">Have a project in mind? Let's collaborate!</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-green-500 text-sm mb-2 block">{'> '} Your Name</label>
                    <Input 
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-black/50 border-green-500/50 text-green-400 placeholder:text-green-700 focus:border-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-green-500 text-sm mb-2 block">{'> '} Your Email</label>
                    <Input 
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-black/50 border-green-500/50 text-green-400 placeholder:text-green-700 focus:border-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-green-500 text-sm mb-2 block">{'> '} Message</label>
                    <Textarea 
                      placeholder="Your message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={6}
                      className="bg-black/50 border-green-500/50 text-green-400 placeholder:text-green-700 focus:border-green-500"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-green-500 hover:bg-green-600 text-black font-bold border-2 border-green-400 shadow-lg shadow-green-500/50 hover:shadow-green-500/80 transition-all"
                    disabled={formStatus === 'sending'}
                  >
                    {formStatus === 'sending' ? 'Sending...' : formStatus === 'success' ? '✓ Message Sent!' : '$ ./send_message.sh'}
                  </Button>
                </form>

                <div className="mt-8 pt-8 border-t border-green-500/30">
                  <p className="text-green-400 mb-4 text-center">$ ls social_links/</p>
                  <div className="flex gap-4 justify-center">
                    {[
                      { Icon: Github, href: 'https://github.com', label: 'github' },
                      { Icon: Linkedin, href: 'https://linkedin.com', label: 'linkedin' },
                      { Icon: Twitter, href: 'https://twitter.com', label: 'twitter' },
                      { Icon: Mail, href: 'mailto:john@example.com', label: 'email' }
                    ].map(({ Icon, href, label }) => (
                      <a 
                        key={label}
                        href={href} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-3 border-2 border-green-500/50 rounded-lg hover:border-green-500 hover:bg-green-500/20 transition-all hover:scale-110 hover:shadow-lg hover:shadow-green-500/50 group"
                      >
                        <Icon className="w-6 h-6 group-hover:animate-bounce" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t-2 border-green-500/30 py-8">
          <div className="container mx-auto px-4 text-center text-green-500/70">
            <p className="mb-2">$ echo "© 2025 John Doe. All rights reserved."</p>
            <p className="text-sm">$ cat stack.txt <span className="text-green-600">|</span> Built with Next.js & Tailwind CSS</p>
            <div className="mt-4 text-xs text-green-700">
              <span className="animate-blink">█</span> System ready. Portfolio loaded successfully.
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}