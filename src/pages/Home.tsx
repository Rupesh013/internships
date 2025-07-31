import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Target, BookOpen, TrendingUp, Users, Calendar, Star } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
const Home = () => {
  const features = [{
    icon: Target,
    title: "Internship Opportunities",
    description: "Curated list of top internships from tech giants like Google, Microsoft, Amazon, and more.",
    link: "/internships"
  }, {
    icon: TrendingUp,
    title: "Placement Drives",
    description: "Off-campus placement opportunities and company-specific hiring processes.",
    link: "/placements"
  }, {
    icon: BookOpen,
    title: "Learning Resources",
    description: "Comprehensive learning paths for DSA, Web Dev, ML, and other tech skills.",
    link: "/resources"
  }, {
    icon: Calendar,
    title: "100-Day Roadmap",
    description: "Structured roadmap to prepare for tech internships and placements in 100 days.",
    link: "/roadmap"
  }];
  const stats = [{
    number: "500+",
    label: "Internship Opportunities"
  }, {
    number: "50+",
    label: "Top Companies"
  }, {
    number: "100+",
    label: "Learning Resources"
  }, {
    number: "10K+",
    label: "Students Helped"
  }];
  const topCompanies = ["Google", "Microsoft", "Amazon", "Meta", "Adobe", "Goldman Sachs", "JP Morgan", "Flipkart", "Myntra", "Uber", "Netflix", "Apple"];
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 lg:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
              🚀 Your Career Journey Starts Here
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Internships
              </span>
              <br />
              <span className="text-foreground">& Placements</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Comprehensive platform for students to find internships, placement drives, 
              learning resources, and structured roadmaps for career success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-glow-primary text-lg px-8">
                <Link to="/internships" className="flex items-center">
                  Explore Internships <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-secondary text-lg px-8">
                <Link to="/roadmap" className="flex items-center">
                  100-Day Roadmap <Calendar className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 lg:px-6 bg-gradient-secondary">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => <div key={index} className="text-center">
                
                <div className="text-muted-foreground">{stat.label}</div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 lg:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything You Need for Success</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From internship opportunities to learning resources, we've got your complete career journey covered.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => <Card key={index} className="bg-gradient-card border-border hover:shadow-glow-primary transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{feature.description}</p>
                  <Link to={feature.link} className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Top Companies Section */}
      <section className="py-16 px-4 lg:px-6 bg-gradient-secondary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Featured Companies</h2>
          <p className="text-muted-foreground mb-8">Internship opportunities from world's leading companies</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {topCompanies.map((company, index) => <div key={index} className="p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
                <div className="text-sm font-medium text-center">{company}</div>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 lg:px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <Star className="h-12 w-12 text-accent mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of students who have successfully landed internships and placements 
              using our comprehensive platform and resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-glow-primary">
                <Link to="/internships">Browse Internships</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-secondary">
                <Link to="/resources">Explore Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Home;