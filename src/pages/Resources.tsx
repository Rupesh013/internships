import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Play, Code, Brain, Shield, Palette, Globe, Database, Cpu, Star } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState("dsa");

  const categories = [
    { id: "dsa", name: "DSA", icon: Brain, color: "bg-blue-500" },
    { id: "webdev", name: "Web Development", icon: Globe, color: "bg-green-500" },
    { id: "ml", name: "Machine Learning", icon: Cpu, color: "bg-purple-500" },
    { id: "cybersecurity", name: "Cybersecurity", icon: Shield, color: "bg-red-500" },
    { id: "uiux", name: "UI/UX Design", icon: Palette, color: "bg-pink-500" },
    { id: "datascience", name: "Data Science", icon: Database, color: "bg-orange-500" }
  ];

  const dsaResources = {
    beginner: [
      {
        title: "CS50's Introduction to Computer Science",
        provider: "Harvard University",
        description: "Entry-level course teaching foundational computer science concepts, including data structures and algorithms.",
        link: "https://youtube.com/playlist?list=PLhQjrBD2T381WAHyx1pq-sBfykqMBI7V4",
        type: "Video Course"
      },
      {
        title: "Basics of DSA",
        provider: "Simplilearn", 
        description: "Comprehensive basics of data structures and algorithms with practical examples.",
        link: "https://www.simplilearn.com/free-data-structures-algorithms-course-skillup",
        type: "Course"
      },
      {
        title: "Striver DSA Playlist",
        provider: "TakeUForward",
        description: "Complete DSA learning path from basics to advanced topics.",
        link: "https://youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz",
        type: "Video Series"
      }
    ],
    intermediate: [
      {
        title: "Data Structures and Algorithms Specialization",
        provider: "UC San Diego (Coursera)",
        description: "Delves deeper into algorithmic techniques and complex data structures.",
        link: "https://www.coursera.org/specializations/data-structures-algorithms",
        type: "Specialization"
      },
      {
        title: "MIT Introduction to Algorithms",
        provider: "MIT OpenCourseWare",
        description: "In-depth lectures on algorithms, focusing on design and analysis.",
        link: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/",
        type: "Course"
      }
    ],
    advanced: [
      {
        title: "Algorithms Part 1 & 2",
        provider: "Princeton University",
        description: "Rigorous exploration of algorithms with emphasis on design and analysis.",
        link: "https://www.coursera.org/learn/algorithms-part1",
        type: "Course Series"
      },
      {
        title: "Stanford Algorithms Specialization",
        provider: "Stanford University",
        description: "Advanced algorithmic strategies and complex problem-solving techniques.",
        link: "https://online.stanford.edu/courses/soe-ycsalgorithms1-algorithms-design-and-analysis-part-1",
        type: "Specialization"
      }
    ]
  };

  const webDevResources = {
    beginner: [
      {
        title: "Sigma Web Development Course",
        provider: "Code with Harry",
        description: "Complete web development course covering HTML, CSS, JavaScript, and modern frameworks.",
        link: "https://youtube.com/playlist?list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w",
        type: "Video Course"
      },
      {
        title: "Complete HTML and CSS",
        provider: "SuperSimpleDev",
        description: "Comprehensive guide to HTML and CSS fundamentals with practical projects.",
        link: "https://youtu.be/G3e-cpL7ofc",
        type: "Video Tutorial"
      }
    ],
    intermediate: [
      {
        title: "React Full Course",
        provider: "Codecademy",
        description: "Learn React.js from basics to advanced concepts with hands-on projects.",
        link: "https://www.codecademy.com/learn/paths/build-web-apps-with-react",
        type: "Interactive Course"
      },
      {
        title: "MERN Stack Fundamentals",
        provider: "Great Learning",
        description: "Full-stack development with MongoDB, Express, React, and Node.js.",
        link: "https://www.mygreatlearning.com/academy/learn-for-free/courses/mern-stack-fundamentals",
        type: "Course"
      }
    ],
    advanced: [
      {
        title: "Advanced Web Development",
        provider: "FreeCodeCamp",
        description: "Advanced topics including microservices, deployment, and optimization.",
        link: "https://www.freecodecamp.org/news/learn-web-development-with-this-free-20-hour-course/",
        type: "Course"
      }
    ]
  };

  const mlResources = {
    beginner: [
      {
        title: "Machine Learning Crash Course",
        provider: "Google",
        description: "Gentle introduction to ML concepts with video lectures and practical exercises.",
        link: "https://developers.google.com/machine-learning/crash-course",
        type: "Course"
      },
      {
        title: "100 Days of Machine Learning",
        provider: "CampusX",
        description: "Structured 100-day learning path for machine learning mastery.",
        link: "https://youtube.com/playlist?list=PLKnIA16_Rmvbr7zKYQuBfsVkjoLcJgxHH",
        type: "Video Series"
      }
    ],
    intermediate: [
      {
        title: "Introduction to Machine Learning",
        provider: "NPTEL",
        description: "Academic course offering foundational knowledge in ML principles and algorithms.",
        link: "https://onlinecourses.nptel.ac.in/noc23_cs18/preview",
        type: "Academic Course"
      }
    ],
    advanced: [
      {
        title: "Deep Learning Specialization",
        provider: "Andrew Ng (Coursera)",
        description: "Focus on deep learning techniques, neural networks, and advanced ML concepts.",
        link: "https://www.coursera.org/specializations/deep-learning",
        type: "Specialization"
      }
    ]
  };

  const topYouTubeChannels = [
    {
      name: "Anik Jain",
      focus: "Design & UI/UX",
      link: "https://www.youtube.com/@anikjaindesign",
      subscribers: "500K+"
    },
    {
      name: "NeetCode",
      focus: "DSA & Interview Prep",
      link: "https://www.youtube.com/@NeetCode",
      subscribers: "400K+"
    },
    {
      name: "Tech with Tim",
      focus: "Programming Tutorials",
      link: "https://www.youtube.com/@TechWithTim",
      subscribers: "1M+"
    },
    {
      name: "Dave Gray",
      focus: "Web Development",
      link: "https://www.youtube.com/@DaveGrayTeachesCode",
      subscribers: "300K+"
    },
    {
      name: "SDET-QA",
      focus: "Testing & QA",
      link: "https://www.youtube.com/@sdetpavan",
      subscribers: "200K+"
    },
    {
      name: "OverPowered",
      focus: "AI & Technology",
      link: "https://www.youtube.com/@AI.Overpowered",
      subscribers: "150K+"
    }
  ];

  const getCurrentResources = () => {
    switch (activeCategory) {
      case "dsa": return dsaResources;
      case "webdev": return webDevResources;
      case "ml": return mlResources;
      default: return dsaResources;
    }
  };

  const renderResourceSection = (title: string, resources: any[], level: string) => {
    const getLevelColor = (level: string) => {
      switch (level) {
        case "beginner": return "bg-green-500/20 text-green-400 border-green-500/30";
        case "intermediate": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
        case "advanced": return "bg-red-500/20 text-red-400 border-red-500/30";
        default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
      }
    };

    return (
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h3 className="text-2xl font-bold">{title}</h3>
          <Badge className={getLevelColor(level)}>
            {level.charAt(0).toUpperCase() + level.slice(1)}
          </Badge>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {resources.map((resource, index) => (
            <Card key={index} className="bg-gradient-card border-border hover:shadow-glow-primary transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg flex items-start justify-between">
                  <span>{resource.title}</span>
                  <Badge variant="outline" className="text-xs">
                    {resource.type}
                  </Badge>
                </CardTitle>
                <p className="text-primary font-medium">{resource.provider}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">{resource.description}</p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href={resource.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Access Resource
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 lg:px-6 bg-gradient-secondary">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Learning</span> Resources
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive learning paths and resources to master in-demand tech skills. 
            Structured content from beginner to advanced levels with hands-on projects.
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 px-4 lg:px-6 border-b border-border">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 ${
                  activeCategory === category.id ? "shadow-glow-primary" : ""
                }`}
              >
                <category.icon className="h-4 w-4" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Why Follow This Path */}
      <section className="py-16 px-4 lg:px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">🎯 Why Follow This Learning Path?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Saves Time</h3>
                  <p className="text-sm text-muted-foreground">Curated resources - no need to search</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Structured</h3>
                  <p className="text-sm text-muted-foreground">Step-by-step learning process</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Play className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Hands-on</h3>
                  <p className="text-sm text-muted-foreground">Projects & practical applications</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Industry-Ready</h3>
                  <p className="text-sm text-muted-foreground">Skills companies want in 2025</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Resources by Level */}
      <section className="py-16 px-4 lg:px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {categories.find(c => c.id === activeCategory)?.name} Learning Path
          </h2>
          
          <div className="max-w-6xl mx-auto">
            {getCurrentResources().beginner && renderResourceSection("Beginner Level", getCurrentResources().beginner, "beginner")}
            {getCurrentResources().intermediate && renderResourceSection("Intermediate Level", getCurrentResources().intermediate, "intermediate")}
            {getCurrentResources().advanced && renderResourceSection("Advanced Level", getCurrentResources().advanced, "advanced")}
          </div>
        </div>
      </section>

      {/* YouTube Channels Section */}
      <section className="py-16 px-4 lg:px-6 bg-gradient-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">📺 Best YouTube Channels</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Top YouTube channels for learning new technologies and staying updated with industry trends
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {topYouTubeChannels.map((channel, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-glow-primary transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold">{channel.name}</h3>
                    <Badge variant="outline" className="text-xs">
                      {channel.subscribers}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{channel.focus}</p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href={channel.link} target="_blank" rel="noopener noreferrer">
                      <Play className="h-4 w-4 mr-2" />
                      Visit Channel
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 px-4 lg:px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">🚀 How Will This Help You?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-4 text-primary">For Job Seekers</h3>
                <p className="text-muted-foreground">Get placement-ready by mastering in-demand skills with structured learning paths and practical projects.</p>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-4 text-primary">For Career Switchers</h3>
                <p className="text-muted-foreground">Transition smoothly into tech by learning structured and industry-relevant content from scratch.</p>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-4 text-primary">For Students</h3>
                <p className="text-muted-foreground">Build a strong foundation in coding, machine learning, cybersecurity, and other cutting-edge technologies.</p>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-4 text-primary">For Entrepreneurs</h3>
                <p className="text-muted-foreground">Use tech skills to build your own products, services, or startups with modern development practices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;