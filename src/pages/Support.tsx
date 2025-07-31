import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, HelpCircle, Phone, ExternalLink } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Support = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 lg:px-6 bg-gradient-secondary">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Support</span> Center
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Need help? We're here to assist you with any questions about internships, placements, or our platform.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 lg:px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Primary Contact */}
              <Card className="bg-gradient-card border-border hover:shadow-glow-primary transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Mail className="h-6 w-6 text-primary" />
                    Email Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Get personalized help with your queries. We typically respond within 24 hours.
                  </p>
                  <Button asChild className="w-full">
                    <a href="mailto:voiceofbharat.help@gmail.com" className="flex items-center justify-center">
                      <Mail className="h-4 w-4 mr-2" />
                      voiceofbharat.help@gmail.com
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card className="bg-gradient-card border-border hover:shadow-glow-primary transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <HelpCircle className="h-6 w-6 text-primary" />
                    Quick Help
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Browse our common questions and answers for instant help.
                  </p>
                  <div className="space-y-2">
                    <div className="p-3 bg-secondary/50 rounded-lg">
                      <p className="font-medium text-sm">How to apply for internships?</p>
                      <p className="text-xs text-muted-foreground">Click on company links provided in our internship listings.</p>
                    </div>
                    <div className="p-3 bg-secondary/50 rounded-lg">
                      <p className="font-medium text-sm">When do companies usually hire?</p>
                      <p className="text-xs text-muted-foreground">Check our internship calendar for detailed timelines.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Additional Resources */}
            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold mb-6">Other Ways to Get Help</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-card border-border">
                  <CardContent className="p-6 text-center">
                    <MessageCircle className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Community Support</h3>
                    <p className="text-sm text-muted-foreground">Join our community discussions and help each other.</p>
                  </CardContent>
                </Card>
                <Card className="bg-card border-border">
                  <CardContent className="p-6 text-center">
                    <HelpCircle className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Video Guides</h3>
                    <p className="text-sm text-muted-foreground">Watch our step-by-step tutorial videos.</p>
                  </CardContent>
                </Card>
                <Card className="bg-card border-border">
                  <CardContent className="p-6 text-center">
                    <ExternalLink className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">External Resources</h3>
                    <p className="text-sm text-muted-foreground">Access additional learning materials and guides.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Support;