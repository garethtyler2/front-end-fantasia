
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-16 md:py-24 relative">
      {/* Gradient background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-[128px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[128px] -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="glass-card p-8 md:p-12 text-center max-w-4xl mx-auto animate-fade-in">
          <h2 className="mb-4">
            Ready to <span className="gradient-text">Get Started</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Join thousands of forward-thinking businesses that are already transforming their digital experience with our platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="hero-button-primary">
              Start Your Free Trial <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="hero-button-secondary">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
