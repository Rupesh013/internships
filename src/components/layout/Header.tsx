import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap } from "lucide-react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navItems = [{
    name: "Home",
    path: "/"
  }, {
    name: "Internships",
    path: "/internships"
  }, {
    name: "Placements",
    path: "/placements"
  }, {
    name: "Resources",
    path: "/resources"
  }, {
    name: "Roadmap",
    path: "/roadmap"
  }];
  const isActive = (path: string) => location.pathname === path;
  return <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-primary rounded-lg shadow-glow-primary transition-all duration-300 group-hover:scale-110">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">Internships &amp; Placements hub</h1>
              
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map(item => <Link key={item.name} to={item.path} className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${isActive(item.path) ? "bg-primary text-primary-foreground shadow-glow-primary" : "text-muted-foreground hover:text-foreground hover:bg-secondary"}`}>
                {item.name}
              </Link>)}
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-2">
              {navItems.map(item => <Link key={item.name} to={item.path} className={`px-4 py-3 rounded-md text-sm font-medium transition-all duration-300 ${isActive(item.path) ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-secondary"}`} onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </Link>)}
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;