
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import { toast } from "@/hooks/use-toast";

const PrehabilityPage = () => {
  const handleSearch = (query: string) => {
    toast({
      title: "Search initiated",
      description: `Searching for prehab exercises: "${query}"`,
    });
    console.log("Searching for prehab exercises:", query);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero search section */}
      <section className="pt-32 pb-16 relative">
        {/* Gradient background effects */}
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-brand-purple/10 rounded-full blur-[100px] -z-10" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-brand-blue/10 rounded-full blur-[100px] -z-10" />
        
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h1 className="mb-6 animate-fade-in">
              Find Your Perfect <span className="gradient-text">Prehab</span> Program
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "100ms" }}>
              Search for exercises, routines, and guidance tailored to your specific needs
            </p>
          </div>
          
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: "200ms" }}>
            <SearchBar 
              placeholder="Search for exercises, conditions, or body parts..." 
              onSearch={handleSearch} 
              className="w-full max-w-2xl"
            />
          </div>
        </div>
      </section>
      
      {/* Content section */}
      <main className="container mx-auto px-4 py-10">
        {/* SEO-Optimized Introduction Section */}
        <section className="mb-12 max-w-4xl mx-auto">
          <h1 className="mb-6 text-3xl md:text-4xl">What Is Prehab? A Complete Guide to Prehabilitation</h1>
          <p className="mb-4 text-lg">
            <strong>Prehab</strong> (short for "prehabilitation") is a proactive approach in physical therapy and fitness designed to 
            prevent injuries, optimize recovery, and enhance performance. Whether you're preparing for surgery, managing a chronic condition, 
            or improving athletic performance, prehab helps build resilience and strengthens your body before injuries happen.
          </p>
          <p className="text-lg">
            In this guide, we'll explore the <strong>goals of prehab</strong>, who benefits the most, and why it's a game-changer in health, 
            fitness, and rehabilitation.
          </p>
        </section>

        {/* SEO-Optimized Goals Section */}
        <section className="mb-12 max-w-4xl mx-auto">
          <h2 className="mb-4 text-2xl md:text-3xl">Key Goals of Prehab</h2>
          <p className="mb-4 text-lg">
            The primary objectives of prehab focus on creating a stronger, more resilient body while improving movement and reducing 
            risks of injury. Here are the main goals:
          </p>
          <ul className="space-y-4 list-disc pl-6 text-lg">
            <li>
              <strong>Injury Prevention:</strong> Strengthen muscles, joints, and ligaments to enhance resilience against stress 
              or trauma. Improve movement mechanics to minimize strain on vulnerable areas and avoid common injuries like 
              sprains, strains, or overuse conditions.
            </li>
            <li>
              <strong>Surgical Preparation:</strong> Prehab exercises prepare your body for surgery by building strength, 
              stability, and mobility around the affected area. Stronger, more mobile patients experience faster and more 
              complete recovery post-surgery.
            </li>
            <li>
              <strong>Performance Enhancement:</strong> Athletes benefit by addressing weak points or imbalances that limit 
              performance. Prehab improves flexibility, strength, and coordination to prevent injuries during intense physical activity.
            </li>
            <li>
              <strong>Chronic Condition Management:</strong> Manage or delay the progression of conditions like arthritis, 
              osteoporosis, or lower back pain. Prehab maintains joint stability, mobility, and overall quality of life.
            </li>
          </ul>
        </section>

        {/* SEO-Optimized Target Audience Section */}
        <section className="mb-12 py-12 px-6 glass-card max-w-4xl mx-auto bg-gradient-to-r from-accent/40 to-card/40">
          <h2 className="mb-4 text-2xl md:text-3xl">Who Can Benefit from Prehab?</h2>
          <p className="mb-4 text-lg">
            Prehab is suitable for everyone, from professional athletes to everyday individuals. Here's how different groups 
            can benefit from incorporating prehabilitation into their routines:
          </p>
          <ul className="space-y-4 list-disc pl-6 text-lg">
            <li>
              <strong>Athletes:</strong> Reduce the risk of sports-related injuries, recover safely from existing ones, and 
              improve performance in competitive sports like running, cycling, or weightlifting.
            </li>
            <li>
              <strong>Surgical Patients:</strong> Prepare for surgeries such as ACL reconstruction, joint replacements, or 
              rotator cuff repairs. A stronger, more prepared body enhances post-operative outcomes and recovery speed.
            </li>
            <li>
              <strong>Everyday Individuals:</strong> Prevent injuries caused by repetitive movements, poor posture, or workplace 
              strain. Prehab exercises help maintain physical health and avoid common musculoskeletal issues.
            </li>
          </ul>
        </section>

        {/* Call-to-Action */}
        <section className="mb-12 max-w-4xl mx-auto text-center">
          <h2 className="mb-4 text-2xl md:text-3xl">Why Start Prehab Today?</h2>
          <p className="mb-6 text-lg">
            Prehab isn't just about preventing injuries—it's about creating a stronger, healthier body for life. Whether you're 
            preparing for surgery, managing a chronic condition, or striving for peak athletic performance, prehab offers 
            personalized solutions to meet your goals.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hero-button-primary">
              Search Prehab Exercises
            </button>
            <button className="hero-button-secondary">
              Learn More
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrehabilityPage;
