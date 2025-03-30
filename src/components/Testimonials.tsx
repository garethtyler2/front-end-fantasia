
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    content: "Knee pain diagnosed quickly, better than my doctor!",
    author: "Ethan",
    role: "Recovered Patient",
    avatar: "ET",
    avatarSrc: "https://i.pravatar.cc/150?u=ethan",
    delay: 0,
  },
  {
    content: "Tennis elbow spotted instantly. Saved me a trip to the NHS.",
    author: "Lucy",
    role: "Tennis Player",
    avatar: "LU",
    avatarSrc: "https://i.pravatar.cc/150?u=lucy",
    delay: 100,
  },
  {
    content: "Sciatica + herniated disc handled. Got effective exercises.",
    author: "Daniel",
    role: "Office Worker",
    avatar: "DA",
    avatarSrc: "https://i.pravatar.cc/150?u=daniel",
    delay: 200,
  },
  {
    content: "Progress tracking tools kept me motivated weekly.",
    author: "John",
    role: "Fitness Enthusiast",
    avatar: "JO",
    avatarSrc: "https://i.pravatar.cc/150?u=john",
    delay: 300,
  },
  {
    content: "Tailored ACL recovery plan got me back fast.",
    author: "Sarah",
    role: "Athlete",
    avatar: "SA",
    avatarSrc: "https://i.pravatar.cc/150?u=sarah",
    delay: 400,
  },
  {
    content: "Lost 10 pounds in a month with AI-Rehab training!",
    author: "Jane",
    role: "Weight Loss Journey",
    avatar: "JA",
    avatarSrc: "https://i.pravatar.cc/150?u=jane",
    delay: 500,
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 relative">
      {/* Gradient background effect */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-[128px] -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4 animate-fade-in">
            Real <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in" style={{ animationDelay: "100ms" }}>
            Discover how AI-Rehab has helped people recover, prevent injuries, and achieve their fitness goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    <AvatarImage src={testimonial.avatarSrc} alt={testimonial.author} />
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
