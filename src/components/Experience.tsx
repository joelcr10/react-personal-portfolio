import { Badge } from "@/components/ui/badge";

type Job = {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
};

export default function Experience() {
  const jobs: Job[] = [
    {
      title: "Software Engineer",
      company: "Experion Technologies",
      period: "May 2024 - Present",
      responsibilities: [
        "Building and maintaining end-to-end web applications using modern technologies including React, React-Native, Node.js, TypeScript, SQL, and AWS.",
        "Developed scalable front-end interfaces using React and TypeScript, delivering responsive UI components, optimized workflows, and seamless API integrations.",
        "Designed and optimized database queries using SQL and Sequelize, enabling efficient filtering, sorting, joins, and pagination for high-performance data retrieval.",
        "Integrated AWS services such as SNS, SES, S3 (signed URLs), and Lambda to enable automated notifications, secure file storage, and event-driven processing.",
        "Implemented external platform integrations, including identity verification, payment solutions, and loyalty/rewards systems to expand product functionality.",
        "Refactored and improved legacy APIs, enhancing system performance, reducing latency, and increasing overall reliability in production environments.",
        "Collaborated with cross-functional teams and took ownership of feature delivery, ensuring high-quality code, smooth releases, and continuous product improvements."
      ],
      technologies: []
    },
    {
      title: "Trainee",
      company: "Experion Technologies",
      period: "Nov 2023 - April 2024",
      responsibilities: [
        "Recognized as one of the top-performing trainees, achieving the highest overall rating across both technical and non-technical evaluations.",
        "Appointed as Team Lead for a group of 5 trainees, responsible for guiding, mentoring, and managing the development of the initial project.",
        "Developed an internal tool for the Learning & Development (L&D) team, which automated key workflows, reduced manual effort by nearly 80%, and continues to be used actively within the organization.",
        "Participated in multiple soft-skills, communication, and corporate management training sessions, enhancing collaboration, leadership, and workplace professionalism."
      ],
      technologies: []
    }
  ];

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center">
          Work Experience
        </h2>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-12">
            {jobs.map((job, index) => (
              <div key={index} className="relative md:pl-8" data-testid={`experience-${index}`}>
                <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-primary border-4 border-background hidden md:block" />

                <div className="mb-4">
                  <h3 className="text-2xl font-semibold mb-1">{job.title}</h3>
                  <p className="text-lg text-foreground mb-1">{job.company}</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">
                    {job.period}
                  </p>
                </div>

                <ul className="space-y-2 mb-4">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-base text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="font-mono text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
