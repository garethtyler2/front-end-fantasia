
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const metrics = [
  {
    value: "99.9%",
    label: "Uptime",
    className: "from-brand-purple/10 to-transparent border-brand-purple/20",
    countTo: 99.9,
    symbol: "%",
    delay: 0,
  },
  {
    value: "24/7",
    label: "Support",
    className: "from-brand-blue/10 to-transparent border-brand-blue/20",
    countTo: 24,
    symbol: "/7",
    delay: 100,
  },
  {
    value: "100K+",
    label: "Active Users",
    className: "from-brand-indigo/10 to-transparent border-brand-indigo/20",
    countTo: 100,
    symbol: "K+",
    delay: 200,
  },
  {
    value: "50+",
    label: "Countries",
    className: "from-brand-pink/10 to-transparent border-brand-pink/20",
    countTo: 50,
    symbol: "+",
    delay: 300,
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
    <section id="metrics" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4 animate-fade-in">
            By The <span className="gradient-text">Numbers</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in" style={{ animationDelay: "100ms" }}>
            Our platform is trusted by businesses around the world. Here's why.
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
                <CounterAnimation 
                  countTo={metric.countTo} 
                  symbol={metric.symbol} 
                  delay={metric.delay} 
                />
                <div className="text-muted-foreground mt-2">{metric.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
