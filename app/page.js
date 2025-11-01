'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Github, Linkedin, Mail, ExternalLink, Download, Menu, X, Twitter } from 'lucide-react'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [formStatus, setFormStatus] = useState('')

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
      category: 'fullstack',
      tags: ['Next.js', 'MongoDB', 'Stripe', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'AI Content Generator',
      description: 'AI-powered content creation tool using OpenAI GPT-4 for generating blog posts, social media content.',
      category: 'ai',
      tags: ['React', 'OpenAI', 'Node.js', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Real-Time Chat Application',
      description: 'WebSocket-based chat app with rooms, private messaging, and file sharing capabilities.',
      category: 'fullstack',
      tags: ['Socket.io', 'React', 'Express', 'Redis'],
      image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&q=80',
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Portfolio Dashboard',
      description: 'Interactive dashboard for tracking cryptocurrency portfolio with real-time price updates.',
      category: 'frontend',
      tags: ['Vue.js', 'Chart.js', 'REST API', 'TailwindCSS'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      link: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'Task Management System',
      description: 'Collaborative project management tool with kanban boards, time tracking, and team collaboration.',
      category: 'fullstack',
      tags: ['React', 'Node.js', 'MongoDB', 'WebSocket'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      link: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'Weather Forecast App',
      description: 'Beautiful weather application with 7-day forecasts, interactive maps, and location-based alerts.',
      category: 'frontend',
      tags: ['React', 'OpenWeather API', 'Leaflet', 'CSS'],
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80',
      link: '#',
      github: '#'
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
      ]
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
      ]
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
      ]
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
    frontend: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS', 'Redux'],
    backend: ['Node.js', 'Express', 'Python', 'Django', 'REST API', 'GraphQL', 'Microservices'],
    database: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'],
    tools: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Webpack', 'Figma']
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
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setFormStatus(''), 3000)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Portfolio
          </h1>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('about')} className="hover:text-purple-500 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-purple-500 transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-purple-500 transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection('education')} className="hover:text-purple-500 transition-colors">
              Education
            </button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-purple-500 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-purple-500 transition-colors">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <button onClick={() => scrollToSection('about')} className="text-left hover:text-purple-500 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-left hover:text-purple-500 transition-colors">
                Skills
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-left hover:text-purple-500 transition-colors">
                Experience
              </button>
              <button onClick={() => scrollToSection('education')} className="text-left hover:text-purple-500 transition-colors">
                Education
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-left hover:text-purple-500 transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:text-purple-500 transition-colors">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            Hi, I'm John Doe
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Full Stack Developer & UI/UX Enthusiast
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            I build exceptional digital experiences that make a difference. Passionate about creating scalable, user-friendly applications with modern technologies.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button onClick={() => scrollToSection('projects')} size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              View My Work
            </Button>
            <Button onClick={() => scrollToSection('contact')} size="lg" variant="outline">
              Get In Touch
            </Button>
            <Button size="lg" variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>

          <div className="flex gap-4 justify-center">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="mailto:john@example.com" className="hover:text-purple-500 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto">
            <Card className="bg-card/50 backdrop-blur border-border">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground mb-6">
                  I'm a passionate Full Stack Developer with over 6 years of experience in building web applications. 
                  I specialize in React, Node.js, and modern web technologies, with a strong focus on creating 
                  intuitive user experiences and scalable backend systems.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Throughout my career, I've worked with startups and established companies, helping them bring their 
                  ideas to life through clean code and innovative solutions. I'm constantly learning and adapting to 
                  new technologies to stay at the forefront of web development.
                </p>
                <p className="text-lg text-muted-foreground">
                  When I'm not coding, you can find me contributing to open-source projects, writing technical blog posts, 
                  or exploring new frameworks and tools to enhance my skill set.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="bg-card/50 backdrop-blur border-border hover:border-purple-500 transition-all">
              <CardHeader>
                <CardTitle className="text-purple-500">Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill, index) => (
                    <Badge key={index} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border hover:border-pink-500 transition-all">
              <CardHeader>
                <CardTitle className="text-pink-500">Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill, index) => (
                    <Badge key={index} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border hover:border-blue-500 transition-all">
              <CardHeader>
                <CardTitle className="text-blue-500">Database</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.database.map((skill, index) => (
                    <Badge key={index} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border hover:border-green-500 transition-all">
              <CardHeader>
                <CardTitle className="text-green-500">Tools & DevOps</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill, index) => (
                    <Badge key={index} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {experience.map((exp) => (
              <Card key={exp.id} className="bg-card/50 backdrop-blur border-border hover:border-purple-500 transition-all">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <Badge variant="outline" className="md:ml-4 w-fit">{exp.period}</Badge>
                  </div>
                  <CardDescription className="text-lg font-semibold text-purple-500">
                    {exp.company}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {exp.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {education.map((edu) => (
              <Card key={edu.id} className="bg-card/50 backdrop-blur border-border hover:border-pink-500 transition-all">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                    <Badge variant="outline" className="md:ml-4 w-fit">{edu.period}</Badge>
                  </div>
                  <CardDescription className="text-lg font-semibold text-pink-500">
                    {edu.institution}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">{edu.description}</p>
                  <p className="text-sm text-muted-foreground"><strong>GPA:</strong> {edu.gpa}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <Button 
              variant={activeFilter === 'all' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('all')}
              className={activeFilter === 'all' ? 'bg-gradient-to-r from-purple-500 to-pink-500' : ''}
            >
              All Projects
            </Button>
            <Button 
              variant={activeFilter === 'fullstack' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('fullstack')}
              className={activeFilter === 'fullstack' ? 'bg-gradient-to-r from-purple-500 to-pink-500' : ''}
            >
              Full Stack
            </Button>
            <Button 
              variant={activeFilter === 'frontend' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('frontend')}
              className={activeFilter === 'frontend' ? 'bg-gradient-to-r from-purple-500 to-pink-500' : ''}
            >
              Frontend
            </Button>
            <Button 
              variant={activeFilter === 'ai' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('ai')}
              className={activeFilter === 'ai' ? 'bg-gradient-to-r from-purple-500 to-pink-500' : ''}
            >
              AI/ML
            </Button>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="bg-card/50 backdrop-blur border-border hover:border-purple-500 transition-all overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-card/50 backdrop-blur border-border">
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>
                  Have a project in mind or want to collaborate? Feel free to reach out!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={6}
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    disabled={formStatus === 'sending'}
                  >
                    {formStatus === 'sending' ? 'Sending...' : formStatus === 'success' ? 'Message Sent!' : 'Send Message'}
                  </Button>
                </form>

                <div className="mt-8 pt-8 border-t border-border">
                  <h3 className="font-semibold mb-4 text-center">Connect With Me</h3>
                  <div className="flex gap-4 justify-center">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors">
                      <Github className="w-6 h-6" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors">
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors">
                      <Twitter className="w-6 h-6" />
                    </a>
                    <a href="mailto:john@example.com" className="hover:text-purple-500 transition-colors">
                      <Mail className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 John Doe. All rights reserved.</p>
          <p className="mt-2">Built with Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}