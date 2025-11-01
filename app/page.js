'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Github, Linkedin, Mail, ExternalLink, Download, Menu, X, Twitter, Terminal, Code2, Braces, Cpu, Zap, Rocket, Star, Activity } from 'lucide-react'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [formStatus, setFormStatus] = useState('')
  const [displayText, setDisplayText] = useState('')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const canvasRef = useRef(null)
  const particlesRef = useRef(null)

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

  // Scroll tracking for parallax
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  // Floating particles effect
  useEffect(() => {
    const canvas = particlesRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: Math.random() * 2 - 1,
        vy: Math.random() * 2 - 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 0, ${particle.opacity})`;
        ctx.fill();

        // Connect particles
        particles.forEach((particle2, j) => {
          if (i !== j) {
            const dx = particle.x - particle2.x;
            const dy = particle.y - particle2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(0, 255, 0, ${0.2 * (1 - distance / 100)})`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(particle2.x, particle2.y);
              ctx.stroke();
            }
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();
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

      {/* Floating Particles */}
      <canvas 
        ref={particlesRef} 
        className="fixed inset-0 pointer-events-none z-0 opacity-40"
      />

      {/* Cursor follower with trail */}
      <div 
        className="pointer-events-none fixed w-6 h-6 border-2 border-green-500 rounded-full z-50 mix-blend-difference transition-transform duration-100 animate-spin-slow"
        style={{
          left: `${mousePosition.x - 12}px`,
          top: `${mousePosition.y - 12}px`,
        }}
      >
        <div className="absolute inset-0 border-2 border-green-400 rounded-full animate-ping opacity-50"></div>
      </div>

      {/* Animated corner brackets */}
      <div className="fixed top-0 left-0 w-20 h-20 border-l-4 border-t-4 border-green-500 z-0 animate-pulse-corner opacity-50"></div>
      <div className="fixed top-0 right-0 w-20 h-20 border-r-4 border-t-4 border-green-500 z-0 animate-pulse-corner opacity-50"></div>
      <div className="fixed bottom-0 left-0 w-20 h-20 border-l-4 border-b-4 border-green-500 z-0 animate-pulse-corner opacity-50"></div>
      <div className="fixed bottom-0 right-0 w-20 h-20 border-r-4 border-b-4 border-green-500 z-0 animate-pulse-corner opacity-50"></div>

      {/* Grid overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10 animate-grid-move" style={{
        backgroundImage: 'linear-gradient(rgba(0, 255, 0, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 0, 0.3) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/80 border-b-2 border-green-500/30 shadow-lg shadow-green-500/20 animate-slideDown">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2 group">
              <Terminal className="w-6 h-6 text-green-500 animate-pulse" />
              <h1 className="text-xl font-bold text-green-500 group-hover:animate-glitch">{'<JohnDoe />'}</h1>
              <div className="flex gap-1 ml-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-blink" style={{ animationDelay: '0s' }}></div>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-blink" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-blink" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              {['about', 'skills', 'experience', 'education', 'projects', 'contact'].map((item, idx) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item)} 
                  className="hover:text-green-300 transition-all hover:scale-110 relative group animate-fadeIn"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <span className="text-green-600 group-hover:text-green-400 animate-pulse">$</span> {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300 shadow-glow"></span>
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-green-500 hover:text-green-300 hover:rotate-90 transition-all duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="animate-spin-once" /> : <Menu className="animate-bounce-once" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-black/95 border-t border-green-500/30 animate-slideDown">
              <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                {['about', 'skills', 'experience', 'education', 'projects', 'contact'].map((item, idx) => (
                  <button 
                    key={item}
                    onClick={() => scrollToSection(item)} 
                    className="text-left hover:text-green-300 transition-all hover:translate-x-2 animate-fadeInLeft"
                    style={{ animationDelay: `${idx * 50}ms` }}
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
          {/* Floating icons */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Code2 className="absolute top-20 left-10 w-8 h-8 text-green-500/20 animate-float" style={{ animationDelay: '0s' }} />
            <Terminal className="absolute top-40 right-20 w-10 h-10 text-green-500/20 animate-float" style={{ animationDelay: '1s' }} />
            <Braces className="absolute bottom-40 left-20 w-12 h-12 text-green-500/20 animate-float" style={{ animationDelay: '2s' }} />
            <Zap className="absolute top-60 right-40 w-8 h-8 text-green-500/20 animate-float" style={{ animationDelay: '1.5s' }} />
            <Cpu className="absolute bottom-20 right-10 w-10 h-10 text-green-500/20 animate-float" style={{ animationDelay: '0.5s' }} />
          </div>

          <div className="container mx-auto px-4 text-center" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
            <div className="mb-6 animate-fadeIn">
              <div className="inline-block text-green-600 mb-4 text-sm">
                <span className="animate-blink">{'>'}</span> Initializing portfolio.exe...
                <span className="ml-2 animate-pulse">[OK]</span>
              </div>
            </div>

            <div className="mb-6">
              <div className="inline-flex gap-2 text-green-600 text-sm mb-2 animate-fadeIn">
                {['/', '|', '\\', '-'].map((char, idx) => (
                  <span key={idx} className="animate-spin" style={{ animationDelay: `${idx * 0.2}s`, animationDuration: '2s' }}>{char}</span>
                ))}
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-glitch-heavy relative" data-text="JOHN DOE">
              <span className="text-green-500 drop-shadow-[0_0_20px_rgba(0,255,0,0.8)] animate-neon-pulse">JOHN DOE</span>
              <div className="absolute -top-2 -left-2 text-green-300 opacity-30 animate-glitch-1">JOHN DOE</div>
              <div className="absolute -bottom-2 -right-2 text-green-700 opacity-30 animate-glitch-2">JOHN DOE</div>
            </h1>
            
            <div className="text-2xl md:text-4xl mb-4 h-12 flex items-center justify-center">
              <span className="text-green-400 animate-typing">{displayText}</span>
              <span className="animate-blink text-green-500 ml-1 inline-block w-0.5 h-8 bg-green-500">|</span>
            </div>

            <div className="max-w-2xl mx-auto mb-8 animate-float">
              <div className="border-2 border-green-500/30 p-6 rounded-lg bg-black/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 shadow-lg shadow-green-500/20 hover:shadow-green-500/50 hover:border-green-500 animate-border-pulse">
                <p className="text-green-300 text-sm md:text-base leading-relaxed">
                  <span className="text-green-600">{'// '}</span>
                  <span className="animate-text-glitch">Passionate about crafting elegant solutions to complex problems.</span>
                  <br />
                  <span className="text-green-600">{'// '}</span>
                  <span className="animate-text-glitch" style={{ animationDelay: '0.5s' }}>Turning coffee into code since 2018.</span>
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Button 
                onClick={() => scrollToSection('projects')} 
                className="bg-green-500 hover:bg-green-600 text-black font-bold border-2 border-green-400 shadow-lg shadow-green-500/50 hover:shadow-green-500/80 transition-all animate-pulse-slow hover:scale-110 group"
              >
                <Zap className="w-4 h-4 mr-2 group-hover:animate-spin" />
                View Projects
                <Rocket className="w-4 h-4 ml-2 group-hover:animate-bounce" />
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline" 
                className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-all hover:scale-110 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-green-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                <Terminal className="w-4 h-4 mr-2 relative z-10 group-hover:animate-pulse" />
                <span className="relative z-10">Contact Me</span>
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-all hover:scale-110 group hover:rotate-3"
              >
                <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
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
                  className="p-3 border-2 border-green-500/50 rounded-lg hover:border-green-500 hover:bg-green-500/20 transition-all hover:scale-110 hover:shadow-lg hover:shadow-green-500/50 hover:rotate-12 group animate-fadeInUp"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <Icon className="w-6 h-6 group-hover:animate-spin" />
                  <div className="absolute inset-0 bg-green-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>
              ))}
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="flex flex-col items-center gap-2 text-green-500">
                <Activity className="w-6 h-6 animate-pulse" />
                <div className="text-xs">Scroll Down</div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 relative">
          {/* Section background effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/5 to-transparent pointer-events-none"></div>
          
          <div className="container mx-auto px-4 relative">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-green-500 animate-fadeIn">
              <span className="text-green-600 animate-pulse">{'<'}</span>
              <span className="inline-block hover:animate-glitch">About</span>
              <span className="text-green-600 animate-pulse">{' />'}</span>
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-green-500 to-transparent mx-auto mt-4 animate-pulse"></div>
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="border-2 border-green-500/30 rounded-lg p-8 bg-black/50 backdrop-blur-sm transform hover:border-green-500/60 transition-all duration-300 shadow-xl shadow-green-500/10 hover:shadow-green-500/30 animate-fadeInUp hover:scale-105">
                <div className="space-y-4 text-green-300">
                  {[
                    { num: 1, content: '<span class="text-green-500">const</span> <span class="text-blue-400">developer</span> = {' },
                    { num: 2, content: '  <span class="text-purple-400">name:</span> <span class="text-yellow-300">\'John Doe\'</span>,' },
                    { num: 3, content: '  <span class="text-purple-400">role:</span> <span class="text-yellow-300">\'Full Stack Developer\'</span>,' },
                    { num: 4, content: '  <span class="text-purple-400">experience:</span> <span class="text-yellow-300">\'6+ years\'</span>,' },
                    { num: 5, content: '  <span class="text-purple-400">passion:</span> <span class="text-yellow-300">\'Building innovative web applications\'</span>,' },
                    { num: 6, content: '  <span class="text-purple-400">philosophy:</span> <span class="text-yellow-300">\'Clean code, scalable solutions\'</span>,' },
                    { num: 7, content: '  <span class="text-purple-400">interests:</span> [<span class="text-yellow-300">\'AI/ML\'</span>, <span class="text-yellow-300">\'Cloud Architecture\'</span>, <span class="text-yellow-300">\'Open Source\'</span>],' },
                    { num: 8, content: '};' }
                  ].map((line, idx) => (
                    <div 
                      key={idx} 
                      className="flex gap-2 hover:bg-green-900/20 transition-colors rounded px-2 py-1 animate-fadeInLeft group"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <span className="text-green-600 font-bold select-none group-hover:text-green-400 transition-colors">{line.num}</span>
                      <p className="flex-1" dangerouslySetInnerHTML={{ __html: line.content }} />
                      <Star className="w-4 h-4 text-green-500 opacity-0 group-hover:opacity-100 group-hover:animate-spin" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/5 to-transparent pointer-events-none"></div>
          
          <div className="container mx-auto px-4 relative">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-green-500 animate-fadeIn">
              <span className="text-green-600 animate-pulse">{'<'}</span>
              <span className="inline-block hover:animate-glitch">Skills</span>
              <span className="text-green-600 animate-pulse">{' />'}</span>
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-green-500 to-transparent mx-auto mt-4 animate-pulse"></div>
            </h2>
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, skillList], idx) => (
                <div 
                  key={category}
                  className="border-2 border-green-500/30 rounded-lg p-6 bg-black/50 backdrop-blur-sm hover:border-green-500/60 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/10 hover:shadow-green-500/30 animate-fadeInUp group"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <h3 className="text-2xl font-bold mb-6 text-green-400 flex items-center gap-2">
                    <Terminal className="w-5 h-5 group-hover:animate-spin" />
                    <span className="group-hover:animate-pulse">{category.charAt(0).toUpperCase() + category.slice(1)}</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-green-500 to-transparent"></div>
                  </h3>
                  <div className="space-y-4">
                    {skillList.map((skill, index) => (
                      <div key={index} className="group/skill">
                        <div className="flex justify-between mb-2">
                          <span className="text-green-300 group-hover/skill:text-green-200 transition-colors flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            {skill.name}
                          </span>
                          <span className="text-green-500 font-bold animate-pulse">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-green-900/30 rounded-full overflow-hidden relative">
                          <div 
                            className="h-full bg-gradient-to-r from-green-500 via-emerald-400 to-green-500 rounded-full transition-all duration-1000 shadow-lg shadow-green-500/50 animate-progressBar relative overflow-hidden"
                            style={{ width: `${skill.level}%`, animationDelay: `${index * 100}ms` }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                          </div>
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
        <section id="experience" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/5 to-transparent pointer-events-none"></div>
          
          <div className="container mx-auto px-4 relative">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-green-500 animate-fadeIn">
              <span className="text-green-600 animate-pulse">{'<'}</span>
              <span className="inline-block hover:animate-glitch">Experience</span>
              <span className="text-green-600 animate-pulse">{' />'}</span>
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-green-500 to-transparent mx-auto mt-4 animate-pulse"></div>
            </h2>
            
            {/* Vertical timeline line */}
            <div className="absolute left-1/2 top-32 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-green-500/50 to-transparent hidden md:block"></div>
            
            <div className="max-w-4xl mx-auto space-y-8">
              {experience.map((exp, idx) => (
                <div 
                  key={exp.id}
                  className={`border-2 border-green-500/30 rounded-lg p-6 bg-black/50 backdrop-blur-sm hover:border-green-500/60 transition-all duration-300 transform hover:translate-x-4 shadow-lg shadow-green-500/10 hover:shadow-green-500/30 animate-fadeInLeft group relative ${idx % 2 === 0 ? 'md:mr-auto md:w-11/12' : 'md:ml-auto md:w-11/12'}`}
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute top-8 -right-4 w-4 h-4 bg-green-500 rounded-full border-4 border-black group-hover:scale-150 transition-transform">
                    <div className="absolute inset-0 bg-green-500 rounded-full animate-ping"></div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 border-2 border-green-500 rounded-lg bg-green-500/10 group-hover:bg-green-500/20 group-hover:scale-110 transition-all">
                      <div className="group-hover:animate-spin">
                        {exp.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-bold text-green-400 group-hover:text-green-300 transition-colors">{exp.title}</h3>
                        <Badge variant="outline" className="border-green-500 text-green-400 w-fit group-hover:bg-green-500 group-hover:text-black transition-all">
                          {exp.period}
                        </Badge>
                      </div>
                      <p className="text-lg text-green-500 font-semibold mb-3 group-hover:animate-pulse">{exp.company}</p>
                      <p className="text-green-300/80 mb-4">{exp.description}</p>
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, index) => (
                          <div key={index} className="flex items-start gap-2 text-green-300/70 hover:text-green-300 transition-colors group/achievement">
                            <span className="text-green-500 mt-1 group-hover/achievement:animate-bounce">▹</span>
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
        <section id="education" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/5 to-transparent pointer-events-none"></div>
          
          <div className="container mx-auto px-4 relative">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-green-500 animate-fadeIn">
              <span className="text-green-600 animate-pulse">{'<'}</span>
              <span className="inline-block hover:animate-glitch">Education</span>
              <span className="text-green-600 animate-pulse">{' />'}</span>
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-green-500 to-transparent mx-auto mt-4 animate-pulse"></div>
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {education.map((edu, idx) => (
                <div 
                  key={edu.id}
                  className="border-2 border-green-500/30 rounded-lg p-6 bg-black/50 backdrop-blur-sm hover:border-green-500/60 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/10 hover:shadow-green-500/30 animate-fadeInRight group relative overflow-hidden"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-3xl group-hover:bg-green-500/10 transition-all"></div>
                  
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-green-400 flex items-center gap-2 group-hover:text-green-300 transition-colors">
                      <Star className="w-5 h-5 group-hover:animate-spin" />
                      {edu.degree}
                    </h3>
                    <Badge variant="outline" className="border-green-500 text-green-400 w-fit group-hover:bg-green-500 group-hover:text-black transition-all">
                      {edu.period}
                    </Badge>
                  </div>
                  <p className="text-lg text-green-500 font-semibold mb-3 group-hover:animate-pulse">{edu.institution}</p>
                  <p className="text-green-300/80 mb-2">{edu.description}</p>
                  <p className="text-green-400 font-bold flex items-center gap-2">
                    <span className="text-green-600">{'>'}</span>
                    GPA: {edu.gpa}
                    <Zap className="w-4 h-4 animate-pulse" />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/5 to-transparent pointer-events-none"></div>
          
          <div className="container mx-auto px-4 relative">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-green-500 animate-fadeIn">
              <span className="text-green-600 animate-pulse">{'<'}</span>
              <span className="inline-block hover:animate-glitch">Projects</span>
              <span className="text-green-600 animate-pulse">{' />'}</span>
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-green-500 to-transparent mx-auto mt-4 animate-pulse"></div>
            </h2>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {['all', 'fullstack', 'frontend', 'ai'].map((filter, idx) => (
                <Button 
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`border-2 transition-all group animate-fadeInUp ${
                    activeFilter === filter 
                      ? 'bg-green-500 text-black border-green-500 shadow-lg shadow-green-500/50 scale-110' 
                      : 'bg-transparent text-green-500 border-green-500 hover:bg-green-500/20 hover:scale-105'
                  }`}
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <Rocket className="w-4 h-4 mr-2 group-hover:animate-spin" />
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </Button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {filteredProjects.map((project, idx) => (
                <div 
                  key={project.id}
                  className="border-2 border-green-500/30 rounded-lg overflow-hidden bg-black/50 backdrop-blur-sm hover:border-green-500 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-lg shadow-green-500/10 hover:shadow-green-500/30 group animate-fadeInUp relative"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="absolute top-2 right-2 z-10">
                    <div className="px-2 py-1 bg-black/70 rounded border border-green-500/50 text-xs text-green-400 group-hover:animate-pulse">
                      #{project.id}
                    </div>
                  </div>
                  
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-3 transition-all duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-40 group-hover:opacity-70 transition-opacity`}></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex gap-3">
                        <Button size="sm" className="bg-black/80 text-green-500 border border-green-500 hover:bg-green-500 hover:text-black hover:scale-110 transition-all group/btn">
                          <ExternalLink className="w-4 h-4 group-hover/btn:animate-bounce" />
                        </Button>
                        <Button size="sm" className="bg-black/80 text-green-500 border border-green-500 hover:bg-green-500 hover:text-black hover:scale-110 transition-all group/btn">
                          <Github className="w-4 h-4 group-hover/btn:animate-spin" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <h3 className="text-xl font-bold mb-2 text-green-400 group-hover:text-green-300 transition-colors">{project.title}</h3>
                    <p className="text-green-300/70 text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <Badge 
                          key={index} 
                          variant="outline" 
                          className="border-green-500/50 text-green-400 text-xs hover:bg-green-500 hover:text-black transition-all cursor-pointer"
                        >
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
        <section id="contact" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/5 to-transparent pointer-events-none"></div>
          
          <div className="container mx-auto px-4 relative">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-green-500 animate-fadeIn">
              <span className="text-green-600 animate-pulse">{'<'}</span>
              <span className="inline-block hover:animate-glitch">Contact</span>
              <span className="text-green-600 animate-pulse">{' />'}</span>
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-green-500 to-transparent mx-auto mt-4 animate-pulse"></div>
            </h2>
            <div className="max-w-2xl mx-auto">
              <div className="border-2 border-green-500/30 rounded-lg p-8 bg-black/50 backdrop-blur-sm shadow-xl shadow-green-500/20 hover:shadow-green-500/40 transition-all hover:scale-105 animate-fadeInUp">
                <div className="mb-6">
                  <p className="text-green-400 mb-2 animate-typing">
                    $ send_message --to=john@example.com
                    <span className="animate-blink">_</span>
                  </p>
                  <p className="text-green-300/70 text-sm flex items-center gap-2">
                    <Terminal className="w-4 h-4 animate-pulse" />
                    Have a project in mind? Let's collaborate!
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="group">
                    <label className="text-green-500 text-sm mb-2 block flex items-center gap-2">
                      <span className="animate-pulse">{'> '}</span>
                      Your Name
                      <Activity className="w-3 h-3 group-hover:animate-spin" />
                    </label>
                    <Input 
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-black/50 border-green-500/50 text-green-400 placeholder:text-green-700 focus:border-green-500 focus:shadow-lg focus:shadow-green-500/30 transition-all"
                      required
                    />
                  </div>
                  <div className="group">
                    <label className="text-green-500 text-sm mb-2 block flex items-center gap-2">
                      <span className="animate-pulse">{'> '}</span>
                      Your Email
                      <Activity className="w-3 h-3 group-hover:animate-spin" />
                    </label>
                    <Input 
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-black/50 border-green-500/50 text-green-400 placeholder:text-green-700 focus:border-green-500 focus:shadow-lg focus:shadow-green-500/30 transition-all"
                      required
                    />
                  </div>
                  <div className="group">
                    <label className="text-green-500 text-sm mb-2 block flex items-center gap-2">
                      <span className="animate-pulse">{'> '}</span>
                      Message
                      <Activity className="w-3 h-3 group-hover:animate-spin" />
                    </label>
                    <Textarea 
                      placeholder="Your message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={6}
                      className="bg-black/50 border-green-500/50 text-green-400 placeholder:text-green-700 focus:border-green-500 focus:shadow-lg focus:shadow-green-500/30 transition-all"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-green-500 hover:bg-green-600 text-black font-bold border-2 border-green-400 shadow-lg shadow-green-500/50 hover:shadow-green-500/80 transition-all hover:scale-105 group"
                    disabled={formStatus === 'sending'}
                  >
                    {formStatus === 'sending' ? (
                      <>
                        <Activity className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : formStatus === 'success' ? (
                      <>
                        ✓ Message Sent!
                        <Zap className="w-4 h-4 ml-2 animate-bounce" />
                      </>
                    ) : (
                      <>
                        <Rocket className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                        $ ./send_message.sh
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-8 pt-8 border-t border-green-500/30">
                  <p className="text-green-400 mb-4 text-center flex items-center justify-center gap-2 animate-pulse">
                    <Terminal className="w-4 h-4" />
                    $ ls social_links/
                  </p>
                  <div className="flex gap-4 justify-center">
                    {[
                      { Icon: Github, href: 'https://github.com', label: 'github' },
                      { Icon: Linkedin, href: 'https://linkedin.com', label: 'linkedin' },
                      { Icon: Twitter, href: 'https://twitter.com', label: 'twitter' },
                      { Icon: Mail, href: 'mailto:john@example.com', label: 'email' }
                    ].map(({ Icon, href, label }, idx) => (
                      <a 
                        key={label}
                        href={href} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-3 border-2 border-green-500/50 rounded-lg hover:border-green-500 hover:bg-green-500/20 transition-all hover:scale-125 hover:shadow-lg hover:shadow-green-500/50 group hover:rotate-12 animate-fadeInUp"
                        style={{ animationDelay: `${idx * 100}ms` }}
                      >
                        <Icon className="w-6 h-6 group-hover:animate-spin" />
                        <div className="absolute inset-0 bg-green-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t-2 border-green-500/30 py-8 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-green-900/10 to-transparent pointer-events-none"></div>
          <div className="container mx-auto px-4 text-center text-green-500/70 relative">
            <p className="mb-2 flex items-center justify-center gap-2 animate-fadeIn">
              <Terminal className="w-4 h-4 animate-pulse" />
              $ echo "© 2025 John Doe. All rights reserved."
            </p>
            <p className="text-sm mb-4">
              $ cat stack.txt <span className="text-green-600 animate-pulse">|</span> Built with Next.js & Tailwind CSS
            </p>
            <div className="mt-4 text-xs text-green-700 flex items-center justify-center gap-2">
              <span className="animate-blink">█</span> 
              <span className="animate-typing">System ready. Portfolio loaded successfully.</span>
              <Activity className="w-3 h-3 animate-pulse" />
            </div>
            <div className="flex justify-center gap-1 mt-4">
              {[...Array(10)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-2 h-8 bg-green-500/30 animate-sound-wave"
                  style={{ animationDelay: `${i * 0.1}s` }}
                ></div>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}