import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";
const Footer = () => {
  return <footer className="bg-gradient-secondary border-t border-border">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-primary rounded-lg shadow-glow-primary">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Career Hub
                </h3>
                <p className="text-sm text-muted-foreground">Internships & Scholarships</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Your comprehensive guide to internships, placements, and career resources. 
              Empowering students with structured learning paths and opportunities.
            </p>
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>voiceofbharat.help@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                
                <span>
              </span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/internships" className="text-muted-foreground hover:text-primary transition-colors">
                  Tech Internships
                </Link>
              </li>
              <li>
                <Link to="/internships" className="text-muted-foreground hover:text-primary transition-colors">
                  Finance Internships
                </Link>
              </li>
              <li>
                <Link to="/placements" className="text-muted-foreground hover:text-primary transition-colors">
                  Off-Campus Placements
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-muted-foreground hover:text-primary transition-colors">
                  Learning Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/roadmap" className="text-muted-foreground hover:text-primary transition-colors">
                  100-Day Roadmap
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-muted-foreground hover:text-primary transition-colors">
                  DSA Learning Path
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-muted-foreground hover:text-primary transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-muted-foreground hover:text-primary transition-colors">
                  Machine Learning
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Career Hub. All rights reserved. Empowering your career journey.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;