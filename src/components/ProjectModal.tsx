import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Users } from "lucide-react";

type ProjectDetails = {
  title: string;
  description: string;
  image: string;
  background: string;
  techStack: string[];
  longDescription: string;
  features: string[];
  role: string;
  duration: string;
  teamSize: string;
  githubUrl?: string;
  liveUrl?: string;
};

type ProjectModalProps = {
  project: ProjectDetails | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function ProjectModal({ project, open, onOpenChange }: ProjectModalProps) {
  if (!project) return null;

  const handleLinkClick = (url: string, type: string) => {
    console.log(`Opening ${type}: ${url}`);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto scrollbar-none">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold">{project.title}</DialogTitle>
          <DialogDescription className="text-base whitespace-pre-line">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Project Image */}
          <div className={`rounded-md overflow-hidden ${project.background}`}>
            <img
              src={project.image}
              alt={project.title}
              className="w-full aspect-video object-contain"
            />
          </div>

          {/* Project Details Grid */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <Users className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  Role
                </div>
                <div className="text-base">{project.role}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  Duration
                </div>
                <div className="text-base">{project.duration}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  Team Size
                </div>
                <div className="text-base">{project.teamSize}</div>
              </div>
            </div>
          </div>

          {/* Long Description */}
          <div>
            <h3 className="text-xl font-semibold mb-3">About the Project</h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-xl font-semibold mb-3">My Contributions</h3>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex gap-2 text-base text-muted-foreground">
                  <span className="text-primary mt-1.5">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="font-mono text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-4 border-t">
            {project.liveUrl && (
              <Button
                onClick={() => window.open(project.liveUrl!, "_blank")}
                data-testid="button-view-live"
                className="gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                View Live Site
              </Button>
            )}
            {project.githubUrl && (
              <Button
                variant="outline"
                onClick={() => window.open(project.githubUrl!, "_blank")}
                data-testid="button-view-github"
                className="gap-2"
              >
                <Github className="h-4 w-4" />
                View on GitHub
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
