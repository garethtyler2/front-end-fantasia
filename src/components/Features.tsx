
import { Activity, Shield, Zap, Layers, BarChart, Code } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const featureItems = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience unparalleled speed with our optimized infrastructure.",
    className: "border-brand-purple/20 bg-gradient-to-b from-brand-purple/10 to-transparent",
    delay: 0,
  },
  {
    icon: Shield,
    title: "Secure by Design",
    description: "Your data is protected with enterprise-grade security protocols.",
    className: "border-brand-blue/20 bg-gradient-to-b from-brand-blue/10 to-transparent",
    delay: 100,
  },
  {
    icon: Layers,
    title: "Scalable Solution",
    description: "Grow without limitations. Our platform scales with your business.",
    className: "border-brand-indigo/20 bg-gradient-to-b from-brand-indigo/10 to-transparent",
    delay: 200,
  },
  {
    icon: Activity,
    title: "Real-time Analytics",
    description: "Make data-driven decisions with powerful real-time insights.",
    className: "border-brand-pink/20 bg-gradient-to-b from-brand-pink/10 to-transparent",
    delay: 300,
  },
  {
    icon: Code,
    title: "Developer Friendly",
    description: "Built with developers in mind. Extensive APIs and documentation.",
    className: "border-brand-purple/20 bg-gradient-to-b from-brand-purple/10 to-transparent",
    delay: 400,
  },
  {
    icon: BarChart,
    title: "Performance Metrics",
    description: "Comprehensive dashboards to monitor and optimize performance.",
    className: "border-brand-blue/20 bg-gradient-to-b from-brand-blue/10 to-transparent",
    delay: 500,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4 animate-fade-in">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in" style={{ animationDelay: "100ms" }}>
            Our platform is packed with cutting-edge capabilities designed to propel your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureItems.map((feature, index) => (
            <Card 
              key={index} 
              className={cn(
                "border rounded-xl overflow-hidden animate-fade-in", 
                feature.className
              )} 
              style={{ animationDelay: `${feature.delay}ms` }}
            >
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-background flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
