import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ResponsiveTable, Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table-responsive";
import { ExternalLink, Briefcase, DollarSign, Calendar, Users, Building, Code, Calculator, GraduationCap, FlaskConical, Palette, Heart, Download, Info } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Internships = () => {
  const [activeCategory, setActiveCategory] = useState("tech");

  const categories = [
    { id: "tech", name: "Tech & Software", icon: Code, color: "bg-blue-500" },
    { id: "finance", name: "Finance & Consulting", icon: Calculator, color: "bg-green-500" },
    { id: "government", name: "Government & PSU", icon: Building, color: "bg-purple-500" },
    { id: "engineering", name: "Engineering & Core", icon: Briefcase, color: "bg-orange-500" },
    { id: "research", name: "Research & Academic", icon: FlaskConical, color: "bg-indigo-500" },
    { id: "media", name: "Media & Design", icon: Palette, color: "bg-pink-500" },
    { id: "social", name: "Education & Social", icon: Heart, color: "bg-red-500" }
  ];

  const techInternships = [
    {
      company: "Google India",
      eligibility: "STEP: 1st/2nd yr Bachelors (women); SWE: Pursuing CS/related",
      period: "Aug–Dec",
      stipend: "₹70,000–2,00,000 (avg 1.25L)",
      website: "https://careers.google.com/"
    },
    {
      company: "Microsoft India",
      eligibility: "Bachelors/Masters in CS/Engg, 1 sem. left post-intern",
      period: "Sept–Dec",
      stipend: "₹80,000–1,00,000 (avg 99,000)",
      website: "https://careers.microsoft.com/"
    },
    {
      company: "Amazon India",
      eligibility: "Bachelors/Masters (CS, Data, Engg.), programming",
      period: "Oct–Dec",
      stipend: "₹50,000–1,50,000 (avg 1L for tech roles)",
      website: "https://www.amazon.jobs/"
    },
    {
      company: "Meta (Facebook)",
      eligibility: "Bachelor's/Master's: CS, Data, Engg.",
      period: "Aug–Oct",
      stipend: "₹55,000–2,00,000 (avg: ~90,000/yr reported)",
      website: "https://www.metacareers.com/"
    },
    {
      company: "Adobe India",
      eligibility: "India female, full-time B.E./B.Tech/MTech/MS",
      period: "Nov–Jan",
      stipend: "₹80,000–1,00,000 (avg intern ~1L)",
      website: "https://adobe.com/careers"
    },
    {
      company: "Flipkart",
      eligibility: "Women, 2nd yr undergrad/3rd yr dual-degree, engg",
      period: "Dec–Feb",
      stipend: "₹22,000–1,00,000 (tech: up to 1L, non-tech: 22k)",
      website: "https://www.flipkartcareers.com/"
    }
  ];

  const financeInternships = [
    {
      company: "Goldman Sachs",
      eligibility: "Pre-final yr UG/PG",
      period: "Sept–Dec",
      stipend: "₹80,000–1,50,000",
      website: "https://www.goldmansachs.com/careers/"
    },
    {
      company: "JP Morgan Chase",
      eligibility: "Bachelor's/Master's/MBA",
      period: "Aug–Dec",
      stipend: "₹60,000–1,00,000",
      website: "https://careers.jpmorgan.com/"
    },
    {
      company: "Morgan Stanley",
      eligibility: "Pre-final yr UG/PG",
      period: "Sept–Dec",
      stipend: "₹60,000–1,00,000",
      website: "https://www.morganstanley.com/careers"
    },
    {
      company: "McKinsey",
      eligibility: "Women UG/PG",
      period: "Dec–Feb",
      stipend: "₹80,000–1,50,000",
      website: "https://www.mckinsey.com/careers"
    }
  ];

  const governmentInternships = [
    {
      company: "NITI Aayog",
      eligibility: "UG/PG/PhD students, Indian",
      period: "Monthly",
      stipend: "None/Unpaid (certificate provided)",
      website: "https://www.niti.gov.in/"
    },
    {
      company: "RBI",
      eligibility: "PG in Econ/Finance/Law",
      period: "Oct–Jan",
      stipend: "₹20,000–35,000",
      website: "https://www.rbi.org.in/"
    },
    {
      company: "SEBI",
      eligibility: "PG in Econ/Fin/Law/Mgmt",
      period: "Nov–Feb",
      stipend: "₹15,000–30,000",
      website: "https://www.sebi.gov.in/"
    }
  ];

  const popularInternships = [
    {
      company: "Goldman Sachs",
      program: "Summer Analyst Program",
      eligibility: "3rd-year students",
      period: "July",
      stipend: "₹1,00,000/month",
      details: "Summer Analyst Program for 3rd-year students with exceptional academic performance.",
      website: "https://www.goldmansachs.com/careers/"
    },
    {
      company: "JP Morgan",
      program: "Code for Good",
      eligibility: "2nd-year students",
      period: "February–March 2025",
      stipend: "₹80,000–₹90,000/month",
      details: "Technology-focused internship program for engineering students.",
      website: "https://careers.jpmorgan.com/"
    },
    {
      company: "Flipkart",
      program: "Flipkart Grid & Runway",
      eligibility: "2nd and 3rd-year students",
      period: "July–August (Grid), February–March (Runway)",
      stipend: "₹1,00,000/month",
      details: "Grid for all students, Runway specifically for female students.",
      website: "https://www.flipkartcareers.com/"
    },
    {
      company: "Myntra",
      program: "HackerRamp",
      eligibility: "2nd and 3rd-year students",
      period: "October (Normal), March–April (Diversity)",
      stipend: "₹80,000–₹90,000/month",
      details: "HackerRamp program with both normal and diversity hiring tracks.",
      website: "https://careers.myntra.com/"
    },
    {
      company: "Amazon",
      program: "Amazon WoW & Regular Hiring",
      eligibility: "1st to 3rd-year students",
      period: "Nov–Dec (WoW), Sept–Dec (Regular)",
      stipend: "₹1,00,000–₹1,25,000/month",
      details: "WoW for girls (1st-3rd year), Regular hiring for 2nd-3rd year students.",
      website: "https://amazon.jobs/"
    },
    {
      company: "Cisco",
      program: "Ideathon",
      eligibility: "2nd and 3rd-year students",
      period: "March–June",
      stipend: "₹70,000/month",
      details: "Innovation-focused internship program with ideathon challenges.",
      website: "https://www.cisco.com/c/en/us/about/careers.html"
    },
    {
      company: "Intuit",
      program: "Software Engineering Internship",
      eligibility: "3rd-year students",
      period: "November–December",
      stipend: "₹1,00,000/month",
      details: "Software engineering focused internship for final year students.",
      website: "https://careers.intuit.com/"
    },
    {
      company: "Uber",
      program: "HackTag",
      eligibility: "3rd-year students",
      period: "February–March",
      stipend: "₹1,50,000/month",
      details: "One of the highest-paying internship programs in the industry.",
      website: "https://www.uber.com/us/en/careers/"
    },
    {
      company: "Juspay",
      program: "Juspay Hiring Challenge",
      eligibility: "3rd-year students",
      period: "March",
      stipend: "₹50,000/month",
      details: "Challenge-based hiring for software engineering roles.",
      website: "https://juspay.in/careers"
    },
    {
      company: "DE Shaw",
      program: "Ascend (Diversity Hiring)",
      eligibility: "2nd and 3rd-year girls",
      period: "July–August",
      stipend: "₹50,000/month",
      details: "Diversity-focused hiring program for women in technology.",
      website: "https://www.deshaw.com/careers"
    },
    {
      company: "Walmart",
      program: "CodeHers (Only for Girls)",
      eligibility: "3rd-year girls",
      period: "March",
      stipend: "₹90,000/month",
      details: "Exclusive program for women pursuing technology careers.",
      website: "https://careers.walmart.com/"
    },
    {
      company: "IITs",
      program: "Research Internships",
      eligibility: "2nd and 3rd-year students",
      period: "April–June 2025",
      stipend: "Variable",
      details: "Research-focused internships across various IIT campuses.",
      website: "https://www.iit.ac.in/"
    },
    {
      company: "RBI",
      program: "Research Internship",
      eligibility: "PG in Economics, Finance, Statistics, B.E./B.Tech (CS), MBA (Finance)",
      period: "January 1, 2025 onwards",
      stipend: "₹45,000/month",
      details: "Research-focused internship at Reserve Bank of India.",
      website: "https://www.rbi.org.in/"
    }
  ];

  const getCurrentInternships = () => {
    switch (activeCategory) {
      case "tech": return techInternships;
      case "finance": return financeInternships;
      case "government": return governmentInternships;
      default: return techInternships;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 lg:px-6 bg-gradient-secondary">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Internship</span> Opportunities
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover curated internship opportunities from top companies across various domains. 
            Filter by category and find the perfect match for your career goals.
          </p>
          
          {/* Highlighted Calendar Download Button */}
          <div className="bg-gradient-primary/10 border-2 border-primary/30 rounded-xl p-6 max-w-md mx-auto">
            <h3 className="text-lg font-semibold mb-3 text-primary">📅 Internship Calendar 2025</h3>
            <p className="text-sm text-muted-foreground mb-4">Download the complete internship timeline calendar</p>
            <Button 
              className="w-full bg-primary hover:bg-primary/90 shadow-glow-primary" 
              size="lg"
              asChild
            >
              <a 
                href="https://drive.google.com/file/d/1reZHpvIYHmbP2H12-K6krUwvBT5DqfsQ/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Calendar
              </a>
            </Button>
          </div>
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

      {/* Popular Internships Section */}
      <section className="py-16 px-4 lg:px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">🔥 Most Popular Internships</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularInternships.map((internship, index) => (
              <Card key={index} className="bg-gradient-card border-border hover:shadow-glow-primary transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-lg">{internship.company}</span>
                    <Badge className="bg-accent/20 text-accent border-accent/30">
                      {internship.stipend}
                    </Badge>
                  </CardTitle>
                  <p className="text-primary font-semibold">{internship.program}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{internship.eligibility}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{internship.period}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{internship.details}</p>
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline" asChild className="flex-1">
                        <a href={internship.website} target="_blank" rel="noopener noreferrer">
                          <Info className="h-4 w-4 mr-1" />
                          More Details
                        </a>
                      </Button>
                      <Button size="sm" asChild className="flex-1">
                        <a href={internship.website} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Apply
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Internships Table */}
      <section className="py-16 px-4 lg:px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {categories.find(c => c.id === activeCategory)?.name} Companies
          </h2>
          
          <Card className="bg-gradient-card border-border">
            <ResponsiveTable>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Company</TableHead>
                    <TableHead>Eligibility</TableHead>
                    <TableHead>Application Period</TableHead>
                    <TableHead>Monthly Stipend</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {getCurrentInternships().map((internship, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{internship.company}</TableCell>
                      <TableCell className="max-w-xs">{internship.eligibility}</TableCell>
                      <TableCell>{internship.period}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="border-success text-success">
                          {internship.stipend}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button size="sm" variant="outline" asChild>
                          <a href={internship.website} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Apply
                          </a>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ResponsiveTable>
          </Card>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 px-4 lg:px-6 bg-gradient-secondary">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">💡 Application Tips</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center">
                  <Calendar className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Plan Ahead</h3>
                  <p className="text-sm text-muted-foreground">Start preparing 3-6 months before application deadlines</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center">
                  <GraduationCap className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Build Skills</h3>
                  <p className="text-sm text-muted-foreground">Focus on technical skills and practical projects</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Network</h3>
                  <p className="text-sm text-muted-foreground">Connect with alumni and industry professionals</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Internships;