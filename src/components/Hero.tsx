import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowDown, Download, Code2, Sparkles, Rocket, Zap, MapPin } from "lucide-react";
import profileImage from "@assets/generated_images/profile.jpg";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownload = () => {
    window.open('https://drive.google.com/file/d/1K4q2mtCPk0JF3OvNsm0reHMupHD5kHEb/view?usp=sharing', '_blank');
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Enhanced gradient background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-tl from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      {/* Animated floating elements */}
      <div 
        className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none"
        style={{
          animation: 'float 8s ease-in-out infinite'
        }}
      />
      <div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"
        style={{
          animation: 'float 10s ease-in-out infinite',
          animationDelay: '2s'
        }}
      />
      <div 
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/3 rounded-full blur-3xl pointer-events-none"
        style={{
          animation: 'float 12s ease-in-out infinite',
          animationDelay: '4s'
        }}
      />
      
      {/* Animated grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          animation: 'gridMove 20s linear infinite'
        }} 
      />

      {/* Floating icons */}
      <div className="absolute top-32 left-20 opacity-10" style={{ animation: 'floatSlow 6s ease-in-out infinite' }}>
        <Code2 className="h-12 w-12 text-primary" />
      </div>
      <div className="absolute bottom-40 right-32 opacity-10" style={{ animation: 'floatSlow 7s ease-in-out infinite', animationDelay: '1s' }}>
        <Rocket className="h-10 w-10 text-accent" />
      </div>
      <div className="absolute top-1/3 right-20 opacity-10" style={{ animation: 'floatSlow 8s ease-in-out infinite', animationDelay: '2s' }}>
        <Zap className="h-8 w-8 text-primary" />
      </div>
      
      <div className={`max-w-5xl mx-auto text-center relative z-10 py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Profile image with enhanced styling and animation */}
        <div className="relative inline-block mb-8" style={{ animation: 'scaleIn 0.8s ease-out' }}>
          <div 
            className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl"
            style={{ animation: 'pulse 3s ease-in-out infinite' }}
          />
          {/* <Avatar className="w-50 h-40 mx-auto border-4 border-background shadow-xl relative hover:scale-105 transition-transform duration-300">
            <AvatarImage src={profileImage} alt="Profile" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar> */}
          <div 
            className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full p-2"
            style={{ animation: 'bounce 2s ease-in-out infinite' }}
          >
            <MapPin className="h-5 w-5" />
          </div>
        </div>

        {/* Greeting text with animation */}
        <div 
          className="mb-4 flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground uppercase tracking-wider"
          style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}
        >
          {/* <Code2 className="h-4 w-4" /> */}
          {/* <span>Welcome to my portfolio</span> */}
        </div>

        {/* Main heading with enhanced typography and animation */}
        <h1 
          className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          style={{ animation: 'fadeInUp 0.6s ease-out 0.3s both' }}
        >
          <span className="inline-block bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-gradient" style={{ backgroundSize: '200% auto' }}>
            Joel C Raju
          </span>
        </h1>

        {/* Subtitle with accent and animation */}
        <div className="mb-6" style={{ animation: 'fadeInUp 0.6s ease-out 0.4s both' }}>
          <p className="text-2xl md:text-3xl font-semibold mb-2">
            <span className="inline-block bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent animate-gradient" style={{ backgroundSize: '200% auto' }}>
              Software Engineer | Full Stack Developer
            </span>
          </p>
        </div>

        {/* Description with better spacing and animation */}
        <p 
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed px-4"
          style={{ animation: 'fadeInUp 0.6s ease-out 0.5s both' }}
        >
          I’m a developer who loves solving problems through code, from backend logic to frontend flow. With a knack for optimizing systems and building impactful tools, I aim to create products that truly help people.  
        </p>

        {/* CTA buttons with improved styling and animation */}
        <div 
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
          style={{ animation: 'fadeInUp 0.6s ease-out 0.6s both' }}
        >
          <Button
            size="lg"
            onClick={scrollToProjects}
            data-testid="button-view-projects"
            className="gap-2 text-base px-8 hover:scale-105 transition-transform duration-200"
          >
            View Projects <ArrowDown className="h-4 w-4 animate-bounce" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={handleDownload}
            data-testid="button-download-resume"
            className="gap-2 text-base px-8 bg-background/50 backdrop-blur-sm hover:scale-105 transition-transform duration-200"
          >
            <Download className="h-4 w-4" /> Download Resume
          </Button>
          {/* <a
            href="../../../attached_assets/generated_images/JOEL-C-RAJU.pdf"
            target="_blank"
            download
          >
             Download Resume
          </a> */}
        </div>

        {/* Stats or highlights with animation */}
        <div 
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-border/50"
          style={{ animation: 'fadeInUp 0.6s ease-out 0.7s both' }}
        >
          <div className="hover:scale-110 transition-transform duration-300">
            <div className="text-3xl font-bold text-primary mb-1" style={{ animation: 'countUp 2s ease-out 0.8s both' }}>2+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="hover:scale-110 transition-transform duration-300">
            <div className="text-3xl font-bold text-primary mb-1" style={{ animation: 'countUp 2s ease-out 1.2s both' }}>1000+</div>
            <div className="text-sm text-muted-foreground">Users Impacted</div>
          </div>
          <div className="hover:scale-110 transition-transform duration-300">
            <div className="text-3xl font-bold text-primary mb-1" style={{ animation: 'countUp 2s ease-out 1s both' }}>9+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(30px, -30px); }
          66% { transform: translate(-20px, 20px); }
        }

        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes countUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }

        .animate-gradient {
          animation: gradientShift 3s ease infinite;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% center; }
          50% { background-position: 100% center; }
        }
      `}</style>
    </section>
  );
}
