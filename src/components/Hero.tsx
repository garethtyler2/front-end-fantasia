
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-32 overflow-hidden">
      {/* Gradient background effects */}
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-brand-purple/30 rounded-full blur-[128px] -z-10" />
      <div className="absolute -bottom-24 -left-64 w-96 h-96 bg-brand-blue/20 rounded-full blur-[128px] -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <span className="text-brand-purple">✨ Introducing Quantum</span>
            <span className="mx-2">—</span>
            <span>The future is here</span>
          </div>
          
          <h1 className="animate-fade-in" style={{ animationDelay: "400ms" }}>
            <span className="block">Transform Your Digital</span>
            <span className="gradient-text">Experience</span>
          </h1>
          
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl animate-fade-in" style={{ animationDelay: "600ms" }}>
            Elevate your online presence with our cutting-edge platform. Designed for visionaries who demand excellence and innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-10 animate-fade-in" style={{ animationDelay: "800ms" }}>
            <Button className="hero-button-primary">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="hero-button-secondary">
              Learn More
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl animate-fade-in" style={{ animationDelay: "1000ms" }}>
            {features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-brand-purple mr-2" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const features = [
  "Lightning Fast",
  "Highly Secure",
  "Fully Customizable",
];

export default Hero;
