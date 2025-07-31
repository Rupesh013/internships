import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, Users, Target, Building2, Zap } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Placements = () => {
  const placementDrives = [
    {
      company: "TCS",
      program: "TCS CodeVita",
      description: "Global programming contest that serves as a recruitment platform for TCS",
      eligibility: "All engineering students",
      process: "Online coding contest → Technical interview → HR interview",
      website: "https://prepinsta.com/tcs-codevita/registration-process/",
      timeline: "Year-round",
      package: "₹3.5-7 LPA"
    },
    {
      company: "Infosys",
      program: "InfyTQ & HackWithInfy",
      description: "Technology quotient certification and hackathon for placement",
      eligibility: "Engineering students (all branches)",
      process: "InfyTQ certification → HackWithInfy → Technical rounds",
      website: "https://www.infosys.com/careers/hackwithinfy.html",
      timeline: "Sep-Dec",
      package: "₹4-9 LPA"
    },
    {
      company: "Myntra",
      program: "HackerRamp WeForShe",
      description: "Diversity hiring program specifically for women in tech",
      eligibility: "Female engineering students",
      process: "Online hackathon → Technical interview → Final round",
      website: "https://unstop.com/hackathons/myntra-hackerramp-weforshe-2024-myntra-1025692",
      timeline: "Mar-Apr",
      package: "₹8-15 LPA"
    },
    {
      company: "Optum",
      program: "Optum Stratethon",
      description: "Strategic thinking and innovation challenge for healthcare technology",
      eligibility: "Engineering/MBA students",
      process: "Problem solving round → Presentation → Interview",
      website: "https://unstop.com/competitions/optum-stratethon-e-track-optum-stratethon-season-4-optum-409946",
      timeline: "Oct-Dec",
      package: "₹6-12 LPA"
    },
    {
      company: "Flipkart",
      program: "Flipkart Grid 6.0",
      description: "Software development track for innovative solutions",
      eligibility: "2nd/3rd year engineering students",
      process: "Online challenge → Prototype building → Final presentation",
      website: "https://unstop.com/hackathons/flipkart-grid-60-software-development-track-flipkart-grid-60-flipkart-1024247",
      timeline: "Jul-Aug",
      package: "₹12-20 LPA"
    },
    {
      company: "Goldman Sachs",
      program: "Engineering Campus Hiring",
      description: "Global investment banking and technology roles",
      eligibility: "Computer Science/Engineering final year",
      process: "Online assessment → Technical rounds → Final interview",
      website: "https://www.goldmansachs.com/careers/students/programs-and-internships",
      timeline: "Aug-Oct",
      package: "₹15-25 LPA"
    },
    {
      company: "JP Morgan",
      program: "Code for Good",
      description: "24-hour hackathon solving real-world problems for nonprofits",
      eligibility: "Engineering students (all years)",
      process: "Hackathon → Technical interview → HR round",
      website: "https://careers.jpmorgan.com/",
      timeline: "Feb-Mar",
      package: "₹12-18 LPA"
    },
    {
      company: "Google",
      program: "Campus Hiring",
      description: "Software engineer roles across various Google products",
      eligibility: "Computer Science/related fields",
      process: "Online assessment → Multiple technical rounds → Googleyness interview",
      website: "https://careers.google.com/",
      timeline: "Sep-Nov",
      package: "₹20-35 LPA"
    },
    {
      company: "Uber",
      program: "HackTag 2.0",
      description: "Innovation challenge for transportation and delivery solutions",
      eligibility: "Engineering students",
      process: "Hackathon → Technical assessment → Final interview",
      website: "https://www.uber.com/careers/",
      timeline: "Feb-Mar",
      package: "₹15-25 LPA"
    },
    {
      company: "Amazon",
      program: "Campus Recruitment",
      description: "Software development engineer roles across Amazon services",
      eligibility: "Computer Science/Engineering",
      process: "Online assessment → Technical rounds → Bar raiser interview",
      website: "https://www.amazon.jobs/",
      timeline: "Aug-Dec",
      package: "₹18-28 LPA"
    },
    {
      company: "Microsoft",
      program: "Campus Hiring",
      description: "Software engineer positions across Microsoft products",
      eligibility: "Computer Science/Engineering",
      process: "Online coding test → Technical interviews → AA interview",
      website: "https://careers.microsoft.com/",
      timeline: "Sep-Nov",
      package: "₹20-30 LPA"
    }
  ];

  const tips = [
    {
      icon: Target,
      title: "Target Preparation",
      description: "Focus on DSA, system design, and company-specific patterns. Practice coding daily.",
      color: "text-blue-500"
    },
    {
      icon: Calendar,
      title: "Timeline Management", 
      description: "Start preparation 6 months early. Track application deadlines and test dates.",
      color: "text-green-500"
    },
    {
      icon: Users,
      title: "Mock Interviews",
      description: "Practice with peers, use platforms like Pramp, and get feedback on your approach.",
      color: "text-purple-500"
    },
    {
      icon: Building2,
      title: "Company Research",
      description: "Understand company culture, recent news, and products before applying.",
      color: "text-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 lg:px-6 bg-gradient-secondary">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Off-Campus</span> Placements
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive guide to off-campus placement drives and hiring processes. 
            Most companies hire year-round through specific selection processes.
          </p>
          <div className="mt-8 p-4 bg-card rounded-lg border border-border max-w-2xl mx-auto">
            <p className="text-sm text-muted-foreground">
              <Zap className="inline h-4 w-4 text-accent mr-1" />
              <strong>Pro Tip:</strong> While top 5% get hired through referrals/walk-ins, 
              these structured drives are perfect for the remaining 95% to showcase their skills!
            </p>
          </div>
        </div>
      </section>

      {/* Placement Drives Grid */}
      <section className="py-16 px-4 lg:px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Placement Drives</h2>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {placementDrives.map((drive, index) => (
              <Card key={index} className="bg-gradient-card border-border hover:shadow-glow-primary transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-1">{drive.company}</CardTitle>
                      <p className="text-primary font-semibold">{drive.program}</p>
                    </div>
                    <Badge className="bg-success/20 text-success border-success/30">
                      {drive.package}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{drive.description}</p>
                  
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm font-medium">Eligibility: </span>
                      <span className="text-sm text-muted-foreground">{drive.eligibility}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium">Timeline: </span>
                      <span className="text-sm text-muted-foreground">{drive.timeline}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium">Process: </span>
                      <span className="text-sm text-muted-foreground">{drive.process}</span>
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href={drive.website} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Learn More & Apply
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Tips */}
      <section className="py-16 px-4 lg:px-6 bg-gradient-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">🎯 Placement Success Tips</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key strategies to maximize your chances in off-campus placement drives
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip, index) => (
              <Card key={index} className="bg-card border-border text-center">
                <CardContent className="p-6">
                  <tip.icon className={`h-8 w-8 mx-auto mb-4 ${tip.color}`} />
                  <h3 className="font-semibold mb-3">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 px-4 lg:px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">📚 Additional Resources</h2>
            
            <Card className="bg-gradient-card border-border">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Comprehensive Placement Guide</h3>
                    <p className="text-muted-foreground mb-4">
                      For detailed information about off-campus placements, selection processes, 
                      and company-specific preparation strategies:
                    </p>
                    <Button variant="outline" asChild>
                      <a 
                        href="https://takeuforward.org/interviews/sde-off-campus-placement-calendar-freshers/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Complete SDE Off-Campus Guide
                      </a>
                    </Button>
                  </div>
                  
                  <div className="border-t border-border pt-6">
                    <h3 className="text-xl font-semibold mb-3">Key Preparation Areas</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-4 bg-secondary rounded-lg">
                        <h4 className="font-medium mb-2">Technical Skills</h4>
                        <p className="text-sm text-muted-foreground">DSA, System Design, Programming Languages</p>
                      </div>
                      <div className="p-4 bg-secondary rounded-lg">
                        <h4 className="font-medium mb-2">Soft Skills</h4>
                        <p className="text-sm text-muted-foreground">Communication, Problem-solving, Leadership</p>
                      </div>
                      <div className="p-4 bg-secondary rounded-lg">
                        <h4 className="font-medium mb-2">Projects</h4>
                        <p className="text-sm text-muted-foreground">Full-stack applications, Open source contributions</p>
                      </div>
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

export default Placements;