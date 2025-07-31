import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Clock, Target, CheckCircle, Code, BookOpen, Users, Lightbulb, Play } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Helper function to extract YouTube video ID from URL
const getYouTubeVideoId = (url: string): string | null => {
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

// Helper function to get YouTube playlist ID
const getYouTubePlaylistId = (url: string): string | null => {
  const regex = /[?&]list=([^#\&\?]*)/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

// Video Player Component
const VideoPlayer = ({ url, title }: { url: string; title: string }) => {
  const videoId = getYouTubeVideoId(url);
  const playlistId = getYouTubePlaylistId(url);
  
  if (!videoId && !playlistId) {
    return (
      <Button variant="outline" size="sm" asChild>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <ExternalLink className="h-3 w-3 mr-1" />
          View Resource
        </a>
      </Button>
    );
  }

  const embedUrl = playlistId 
    ? `https://www.youtube.com/embed/videoseries?list=${playlistId}`
    : `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="w-full">
      <div className="aspect-video w-full rounded-lg overflow-hidden border border-border">
        <iframe
          src={embedUrl}
          title={title}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

const Roadmap = () => {
  const prerequisites = [
    {
      title: "What is Coding? (Telugu)",
      description: "Foundational knowledge and motivation for absolute beginners",
      type: "Video",
      duration: "30 min",
      link: "https://youtu.be/tN3LdMIBcSo?si=RHEm-rF51V0Iz-Ft",
      isVideo: true
    },
    {
      title: "Coding Basics (English)",
      description: "Introduction to programming concepts and thinking",
      type: "Video", 
      duration: "45 min",
      link: "https://youtu.be/AodISSS8Lho?si=XMqaIKYzVSeAVdzU",
      isVideo: true
    }
  ];

  const programmingLanguages = [
    {
      name: "Python",
      difficulty: "Recommended for Beginners",
      resources: [
        {
          title: "Python Installation & Basics",
          description: "20 lessons covering fundamentals",
          type: "Articles",
          link: "https://www.simplilearn.com/tutorials/python-tutorial"
        },
        {
          title: "Complete Python Video Tutorial (Hindi/Telugu)",
          description: "Comprehensive video series (Highly Recommended)",
          type: "Video Course",
          link: "https://www.youtube.com/watch?v=B25zIPZHU8w&t=8117s",
          isVideo: true
        },
        {
          title: "Optional English Video",
          description: "Alternative English tutorial",
          type: "Video Course",
          link: "https://www.youtube.com/watch?v=XKHEtdqhLK8",
          isVideo: true
        }
      ]
    },
    {
      name: "C++",
      difficulty: "Widely Preferred in Coding",
      resources: [
        {
          title: "C++ Tutorial Articles",
          description: "Read till 'Classes' section",
          type: "Articles",
          link: "https://www.w3schools.com/cpp/"
        },
        {
          title: "Complete C++ Video Tutorial",
          description: "Video-based learning with practical examples",
          type: "Video Course",
          link: "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=2049s",
          isVideo: true
        }
      ]
    },
    {
      name: "Java",
      difficulty: "Industry Heavyweight",
      resources: [
        {
          title: "Java Tutorial Articles",
          description: "Comprehensive Java learning path",
          type: "Articles",
          link: "https://www.w3schools.com/java/default.asp"
        },
        {
          title: "Java Complete Tutorial (Telugu)",
          description: "Complete Java video in Telugu",
          type: "Video Course",
          link: "https://www.youtube.com/watch?v=AzJEnN2pK_I",
          isVideo: true
        },
        {
          title: "Java English Playlist",
          description: "Complete Java playlist in English",
          type: "Video Course",
          link: "https://youtube.com/playlist?list=PLsyeobzWxl7pe_IiTfNyr55kwJPWbgxB5&si=10WANzBXr29Tnjsh",
          isVideo: true
        }
      ]
    }
  ];

  const roadmapPhases = [
    {
      title: "Aptitude & Reasoning",
      duration: "25 Days",
      color: "bg-blue-500",
      sections: [
        {
          name: "Quantitative Aptitude",
          days: "10 Days",
          topics: "Time and Work, Speed & Distance, Permutations, Percentage, Numbers, Averages, Profit & Loss, Ratio, Probability",
          resources: [
            { name: "GeeksForGeeks Aptitude", link: "https://www.geeksforgeeks.org/aptitude-questions-and-answers/" },
            { name: "IndiaBix Practice", link: "https://www.indiabix.com/" },
            { name: "PrepInsta Quantitative", link: "https://prepinsta.com/quantitative-aptitude/" }
          ]
        },
        {
          name: "Logical Reasoning",
          days: "10 Days", 
          topics: "Arrangements, Puzzles, Syllogisms, Number Series, Clocks, Logical Deduction",
          resources: [
            { name: "CareerRide Logical Reasoning", link: "https://www.careerride.com/logical-reasoning.aspx" },
            { name: "FreshersWorld Reasoning", link: "https://www.freshersworld.com/reasoning" }
          ]
        },
        {
          name: "Verbal Ability & Puzzles",
          days: "5 Days",
          topics: "Error spotting, Synonyms/Antonyms, Statement Completion, Reading Comprehension",
          resources: [
            { name: "Verbal Ability Playlist", link: "#" },
            { name: "Aptitude Academy", link: "#" }
          ]
        }
      ]
    },
    {
      title: "DSA Problem-Solving",
      duration: "45 Days",
      color: "bg-green-500",
      sections: [
        {
          name: "Patterns & Striver Sheet",
          days: "15 Days",
          topics: "Coding patterns and structured problem sheets for confidence building",
          resources: [
            { name: "100 Coding Patterns", link: "https://prepinsta.com/" },
            { name: "Striver's A2Z DSA Sheet", link: "https://takeuforward.org/strivers-a2z-dsa-course/" }
          ]
        },
        {
          name: "Core Data Structures",
          days: "15 Days",
          topics: "Arrays, Strings, Linked Lists, Stacks, Queues",
          resources: [
            { name: "LeetCode Problems", link: "https://leetcode.com/problemset/" },
            { name: "GeeksforGeeks DSA", link: "https://www.geeksforgeeks.org/data-structures/" }
          ]
        },
        {
          name: "Advanced Topics",
          days: "15 Days",
          topics: "Greedy, Recursion, Trees, Graphs, Dynamic Programming (easy to medium)",
          resources: [
            { name: "LeetCode Problemset", link: "https://leetcode.com/problemset/" },
            { name: "GFG DSA Tutorials", link: "https://www.geeksforgeeks.org/data-structures/" },
            { name: "Striver A2Z DSA Sheet", link: "https://takeuforward.org/strivers-a2z-dsa-course/" },
            { name: "Fraz DSA Sheet", link: "#" },
            { name: "Love Babbar DSA Sheet", link: "#" }
          ]
        }
      ]
    },
    {
      title: "Core CS Fundamentals",
      duration: "30 Days",
      color: "bg-purple-500",
      sections: [
        {
          name: "OOPS (Highest Priority)",
          days: "8 Days",
          topics: "Object-Oriented Programming concepts, definitions, practical applications",
          resources: [
            { name: "OOPS Crash Course (Telugu)", link: "https://www.youtube.com/watch?v=NxcCJ79lPGI", isVideo: true },
            { name: "OOPS Crash Course (English)", link: "https://youtu.be/SiBw7os-_zI?si=GZlXf6dNBZF57DP1", isVideo: true },
            { name: "GFG OOP Theory & Definitions", link: "https://www.geeksforgeeks.org/object-oriented-programming-in-cpp/" }
          ]
        },
        {
          name: "DBMS",
          days: "8 Days",
          topics: "Database Management Systems, SQL, normalization, transactions",
          resources: [
            { name: "DBMS Beginner Video", link: "https://www.youtube.com/watch?v=nVgLiJOI2U8", isVideo: true },
            { name: "Common DBMS Interview Questions", link: "https://www.geeksforgeeks.org/commonly-asked-dbms-interview-questions/" },
            { name: "DBMS PDF", link: "https://drive.google.com/file/d/113TTrx-L1BDaWIu37rv5w7jf93yNHTwB/view?usp=sharing" }
          ]
        },
        {
          name: "Operating Systems",
          days: "8 Days", 
          topics: "Process management, memory management, file systems, synchronization",
          resources: [
            { name: "Neso Academy OS Tutorial", link: "https://youtube.com/playlist?list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&si=KJTK5YgIQz1aJUo1", isVideo: true },
            { name: "Most Asked OS Questions", link: "https://www.geeksforgeeks.org/operating-systems-interview-questions/" },
            { name: "OS Revision PDF 1", link: "https://drive.google.com/file/d/1gQVbf3Cvm-TPcSOXesnWHAzCJvp4M7o8/view?usp=sharing" },
            { name: "OS Revision PDF 2", link: "https://drive.google.com/file/d/1N7xgk15GF6jFpAnU2ahIbsVAcVNPNBnw/view?usp=sharing" }
          ]
        },
        {
          name: "Computer Networks",
          days: "6 Days",
          topics: "OSI model, TCP/IP, routing, network protocols",
          resources: [
            { name: "Neso Academy Networks", link: "https://youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&si=Jb6upFZiP_JRJANQ", isVideo: true },
            { name: "GFG Networking Questions", link: "https://www.geeksforgeeks.org/networking-interview-questions/" },
            { name: "InterviewBit Networks", link: "https://www.interviewbit.com/networking-interview-questions/" },
            { name: "Networks Textbook", link: "https://drive.google.com/file/d/1lvyFOWzep2JlZJVLvM4WBfJq4u0eDFT8/view?usp=sharing" },
            { name: "Networks PDF", link: "https://drive.google.com/file/d/1Rx36jAk7jpu8gcQ232f0nalf19CMAiou/view?usp=sharing" }
          ]
        }
      ]
    }
  ];

  const tips = [
    {
      icon: Target,
      title: "Focus on Fundamentals",
      description: "Master basics thoroughly before moving to advanced topics"
    },
    {
      icon: Clock,
      title: "Consistent Practice",
      description: "Study 4-6 hours daily and maintain regular coding practice"
    },
    {
      icon: Users,
      title: "Peer Learning",
      description: "Join study groups and discuss problems with fellow learners"
    },
    {
      icon: Lightbulb,
      title: "Smart Preparation",
      description: "Focus on company-specific patterns and frequently asked questions"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 lg:px-6 bg-gradient-secondary">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">100-Day</span> Roadmap
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Structured roadmap for tech internships and placements. Follow this comprehensive 
            100-day plan to prepare systematically for your dream opportunities.
          </p>
          <div className="mt-8 p-4 bg-card rounded-lg border border-border max-w-2xl mx-auto">
            <p className="text-sm text-muted-foreground">
              <CheckCircle className="inline h-4 w-4 text-success mr-1" />
              <strong>Success Rate:</strong> Students following this roadmap have 3x higher placement success rate
            </p>
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="py-16 px-4 lg:px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">🚀 Step 1: Prerequisites</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-border mb-8">
              <CardHeader>
                <CardTitle>For Absolute Beginners</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {prerequisites.map((item, index) => (
                    <div key={index} className="p-4 bg-secondary rounded-lg space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                        <Badge variant="outline" className="text-xs">
                          {item.type} • {item.duration}
                        </Badge>
                      </div>
                      {item.isVideo ? (
                        <VideoPlayer url={item.link} title={item.title} />
                      ) : (
                        <Button variant="outline" size="sm" asChild>
                          <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            View Resource
                          </a>
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programming Languages */}
      <section className="py-16 px-4 lg:px-6 bg-gradient-secondary">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">💻 Step 2: Choose a Programming Language</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-6">
              {programmingLanguages.map((lang, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardHeader>
                    <CardTitle>{lang.name}</CardTitle>
                    <Badge className={`w-fit ${index === 0 ? 'bg-green-500/20 text-green-400' : index === 1 ? 'bg-blue-500/20 text-blue-400' : 'bg-purple-500/20 text-purple-400'}`}>
                      {lang.difficulty}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {lang.resources.map((resource, rIndex) => (
                        <div key={rIndex} className="p-3 bg-secondary rounded-lg space-y-3">
                          <div>
                            <h4 className="font-medium text-sm">{resource.title}</h4>
                            <p className="text-xs text-muted-foreground mb-2">{resource.description}</p>
                            <Badge variant="outline" className="text-xs">
                              {resource.type}
                            </Badge>
                          </div>
                          {resource.isVideo ? (
                            <VideoPlayer url={resource.link} title={resource.title} />
                          ) : (
                            <Button variant="outline" size="sm" asChild>
                              <a href={resource.link} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-3 w-3 mr-1" />
                                View Resource
                              </a>
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 100-Day Roadmap */}
      <section className="py-16 px-4 lg:px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">📅 Step 3: The 100-Day Journey</h2>
          <div className="max-w-6xl mx-auto space-y-8">
            {roadmapPhases.map((phase, index) => (
              <Card key={index} className="bg-gradient-card border-border">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">{phase.title}</CardTitle>
                    <Badge className={`${phase.color} text-white`}>
                      {phase.duration}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {phase.sections.map((section, sIndex) => (
                      <div key={sIndex} className="border-l-4 border-primary pl-6">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-semibold">{section.name}</h3>
                          <Badge variant="outline">{section.days}</Badge>
                        </div>
                        <p className="text-muted-foreground mb-4">{section.topics}</p>
                          <div className="space-y-4">
                            <h4 className="font-medium text-sm">Resources:</h4>
                            <div className="space-y-4">
                              {section.resources.map((resource, rIndex) => (
                                <div key={rIndex} className="space-y-2">
                                  {resource.isVideo ? (
                                    <div>
                                      <h5 className="text-sm font-medium mb-2">{resource.name}</h5>
                                      <VideoPlayer url={resource.link} title={resource.name} />
                                    </div>
                                  ) : (
                                    <Button variant="outline" size="sm" asChild>
                                      <a href={resource.link} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="h-3 w-3 mr-1" />
                                        {resource.name}
                                      </a>
                                    </Button>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Tips */}
      <section className="py-16 px-4 lg:px-6 bg-gradient-secondary">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">💡 Success Tips</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {tips.map((tip, index) => (
              <Card key={index} className="bg-card border-border text-center">
                <CardContent className="p-6">
                  <tip.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-3">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="py-16 px-4 lg:px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">🎯 Key Principles</h2>
            <Card className="bg-gradient-card border-border">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-success mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Quality over Quantity</h3>
                      <p className="text-muted-foreground">Better to master 15 questions per topic than attempt everything superficially</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-success mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Company-Specific Focus</h3>
                      <p className="text-muted-foreground">Prioritize patterns and questions frequently asked by your target companies</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-success mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Structured Learning</h3>
                      <p className="text-muted-foreground">Choose ONE structured sheet (Striver A2Z, Fraz, or Love Babbar) and complete it thoroughly</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-success mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Time Management</h3>
                      <p className="text-muted-foreground">Dedicate 4-6 hours daily and maintain consistency throughout the 100 days</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Roadmap;