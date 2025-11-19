import { Badge } from "@/components/ui/badge";
import profileImage from "@assets/generated_images/aboutImage.png";

export default function About() {
  const skills = [
    // "React", "TypeScript", "Node.js", "Python", "AWS",
    // "Docker", "PostgreSQL", "GraphQL", "TailwindCSS", "Next.js",
    // "Express", "MongoDB", "Redis", "Kubernetes", "CI/CD"
    "Football", "Movies", "Track & Field", "Badminton", "Reading", "Bike Rides", "Drawing", "Gym" 
  ];

  return (
    <section id="about" className="pt-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold mb- text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex bg-red aspect-square object-cover">
            <img
              src={profileImage}
              alt="Profile"
              // className="rounded-md w-full max-w-md aspect-square"
            />
          </div>

          <div>
            <p className="text-lg leading-relaxed text-foreground mb-6">
              I’m a Full-Stack Developer with 2+ years of experience building scalable web applications using React.js, Node.js, and AWS. I focus on creating efficient, reliable systems that deliver great user experiences and solve real business challenges.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
             Always focusing on efficiency, reliability, and clean architecture. I enjoy transforming ideas into production-ready features that enhance user experience and simplify business processes.
            
            My approach blends strong technical expertise with practical problem-solving, ensuring that every project I contribute to is efficient, maintainable, and built to scale. I’m always eager to explore new technologies and continue evolving as a developer who bridges functionality and innovation.
            </p>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-4">
                 Other Interest
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" data-testid={`badge-skill-${skill.toLowerCase()}`}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
