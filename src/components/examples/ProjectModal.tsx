import { useState } from "react";
import ProjectModal from "../ProjectModal";
import { Button } from "@/components/ui/button";
import ecommerceImg from "@assets/generated_images/E-commerce_website_project_screenshot_6bb37839.png";

export default function ProjectModalExample() {
  const [open, setOpen] = useState(false);

  const sampleProject = {
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with cart management, payment integration, and admin dashboard.",
    image: ecommerceImg,
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe"],
    longDescription: "Developed a comprehensive e-commerce solution from the ground up, featuring a modern storefront, secure payment processing, and a powerful admin panel.",
    features: [
      "Secure payment processing with Stripe integration",
      "Real-time inventory management and stock tracking",
      "Advanced product search and filtering",
      "Customer review and rating system"
    ],
    role: "Lead Full Stack Developer",
    duration: "6 months",
    teamSize: "4 developers",
    githubUrl: "#",
    liveUrl: "#"
  };

  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Project Modal</Button>
      <ProjectModal
        project={sampleProject}
        open={open}
        onOpenChange={setOpen}
      />
    </div>
  );
}
