
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { 
  Activity, 
  Timer, 
  Users, 
  Award, 
} from "lucide-react";

const metrics = [
  {
    value: "92%",
    label: "Recovery Rate",
    className: "from-brand-blue/10 to-transparent border-brand-blue/20",
    countTo: 92,
    symbol: "%",
    delay: 0,
    icon: Activity,
    description: "of patients achieve their recovery goals"
  },
  {
    value: "3.5",
    label: "Weeks Average Recovery",
    className: "from-brand-purple/10 to-transparent border-brand-purple/20",
    countTo: 3.5,
    symbol: "",
    delay: 100,
    icon: Timer,
    description: "weeks average treatment duration"
  },
  {
    value: "5K+",
    label: "Patients Treated",
    className: "from-brand-indigo/10 to-transparent border-brand-indigo/20",
    countTo: 5,
    symbol: "K+",
    delay: 200,
    icon: Users,
    description: "annually across all our facilities"
  },
  {
    value: "97%",
    label: "Patient Satisfaction",
    className: "from-brand-pink/10 to-transparent border-brand-pink/20",
    countTo: 97,
    symbol: "%",
    delay: 300,
    icon: Award,
    description: "based on post-treatment surveys"
  },
];

const CounterAnimation = ({ countTo, symbol, delay }: { countTo: number, symbol: string, delay: number }) => {
  const [count, setCount] = useState(0);
  const duration = 2000; // ms
  const framesPerSecond = 60;
  const totalFrames = (duration / 1000) * framesPerSecond;
  
  useEffect(() => {
    // Delayed start for the counter
    const startTimeout = setTimeout(() => {
      let currentFrame = 0;
      
      const counter = setInterval(() => {
        const progress = currentFrame / totalFrames;
        const incrementValue = countTo * progress;
        
        setCount(incrementValue);
        currentFrame++;
        
        if (currentFrame > totalFrames) {
          clearInterval(counter);
          setCount(countTo);
        }
      }, 1000 / framesPerSecond);
      
      return () => clearInterval(counter);
    }, delay);
    
    return () => clearTimeout(startTimeout);
  }, [countTo, totalFrames, delay]);

  return (
    <div className="text-4xl font-bold">
      {count.toFixed(countTo % 1 === 0 ? 0 : 1)}
      {symbol}
    </div>
  );
};

const Metrics = () => {
  return (
    <section id="metrics" className="py-16 md:py-24 bg-slate-50/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4 animate-fade-in">
            Rehabilitation <span className="gradient-text">Outcomes</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in" style={{ animationDelay: "100ms" }}>
            Our physiotherapy approach delivers measurable results for patients of all ages and conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <Card 
              key={index} 
              className={cn(
                "border rounded-xl overflow-hidden bg-gradient-to-b animate-fade-in", 
                metric.className
              )}
              style={{ animationDelay: `${metric.delay}ms` }}
            >
              <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                <metric.icon className="h-8 w-8 mb-4 opacity-75" />
                <CounterAnimation 
                  countTo={metric.countTo} 
                  symbol={metric.symbol} 
                  delay={metric.delay} 
                />
                <div className="font-medium mt-2">{metric.label}</div>
                <div className="text-sm text-muted-foreground mt-1">{metric.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
