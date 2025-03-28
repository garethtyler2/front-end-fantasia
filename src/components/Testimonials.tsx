
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    content: "This platform has transformed our business operations. The speed and reliability are unmatched in the industry.",
    author: "Alexandra Chen",
    role: "CTO, TechVision",
    avatar: "AC",
    delay: 0,
  },
  {
    content: "The security features give us peace of mind, and the intuitive interface has reduced our training time by 50%.",
    author: "Marcus Johnson",
    role: "Director of Operations, Elevate Inc",
    avatar: "MJ",
    delay: 100,
  },
  {
    content: "After switching to Quantum, our development team's productivity increased by 40%. The API documentation is exceptional.",
    author: "Sophia Rodriguez",
    role: "Lead Developer, InnovateTech",
    avatar: "SR",
    delay: 200,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 relative">
      {/* Gradient background effect */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-[128px] -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4 animate-fade-in">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in" style={{ animationDelay: "100ms" }}>
            Discover why innovative companies choose our platform to power their digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border border-white/10 animate-fade-in"
              style={{ animationDelay: `${testimonial.delay}ms` }}
            >
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-brand-purple opacity-50 mb-4" />
                <p className="mb-6 text-sm md:text-base">{testimonial.content}</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-4">
                    <AvatarImage src="" alt={testimonial.author} />
                    <AvatarFallback className="bg-brand-purple/20 text-brand-purple">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
