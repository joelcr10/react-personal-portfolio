import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Cloud, Settings, Layout, Server } from "lucide-react";

type SkillCategory = {
  title: string;
  icon: typeof Code2;
  skills: string[];
};

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      icon: Layout,
      skills: [
        "React",
        "React Native",
        // "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "Redux",
        // "Vue.js"
      ]
    },
    {
      title: "Backend",
      icon: Server,
      skills: [
        "Node.js",
        "Express",
        "Python",
        "Typescript",
        "RESTful APIs",
         "JWT",
        "Microservices",
        "Modular-Monolithic",
        "Swagger"
      ]
    },
    {
      title: "Database",
      icon: Database,
      skills: [
        "PostgreSQL",
        "MongoDB",
        "MySQL",
        "Firebase",
        "Redis",
        "Prisma",
        // "Drizzle ORM",
        "Sequelize",
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        "AWS",
        "Docker",
        // "Kubernetes",
        "CI/CD",
        "GitHub Actions",
        // "Terraform",
        "AWS S3",
        "Cloudfront",
        "ECS",
        "Linux"
      ]
    },
    // {
    //   title: "Programming Languages",
    //   icon: Code2,
    //   skills: [
    //     "JavaScript",
    //     "TypeScript",
    //     "Python",
    //     "Java",
    //     "Go",
    //     "C++",
    //     "SQL"
    //   ]
    // },
    {
      title: "Tools & Others",
      icon: Settings,
      skills: [
        "Git",
        "VS Code",
        "Postman",
        // "Jest",
        "Github",
        "Photoshop",
        "Figma",
        "Jira",
        "Confluence",
        "pgAdmin",
        "MySQL Workbench"
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Skills
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing products
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-stretch">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title} 
                className="hover-elevate"
                data-testid={`card-skills-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center">
                      <IconComponent className="h-4 w-4 text-primary" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="font-mono text-xs"
                        data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
