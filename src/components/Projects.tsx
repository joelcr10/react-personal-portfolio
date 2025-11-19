import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import ProjectModal from "./ProjectModal";
import ilpexImg from "@assets/generated_images/ilpex.png";
import imdbImg from "@assets/generated_images/imdb.png";
import learnchessImg from "@assets/generated_images/lco.png";
import propTechImg from "@assets/generated_images/propTech.png";
import childcareImg from "@assets/generated_images/childcare.png";
import inshortsImg from "@assets/generated_images/inshorts.png";
import fruitsImg from "@assets/generated_images/fruits.png"
import swiftAidImg from "@assets/generated_images/swiftaid.png";

type ProjectDetails = {
  title: string;
  description: string;
  image: string;
  background?: string;
  techStack: string[];
  longDescription: string;
  features: string[];
  role: string;
  duration: string;
  teamSize: string;
  githubUrl?: string;
  liveUrl?: string;
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const projects: ProjectDetails[] = [
    {
      title: "PropTech + FinTech Web App",
      description: "Rentd is a property rental and fintech platform that allows users to find rental properties, Digital payments and wallet transfers.",
      image: propTechImg,
      background: 'bg-gradient-to-r from-[#9db9b9] via-white-400 to-green-200',
      techStack: ["React", "React-Native", "Typescript", "Node.js"],
      longDescription: `A modern property rental and fintech platform that simplifies the entire rental experience — from discovering properties to managing rent payments. It enables users to search and rent properties, pay rent securely through the app, and manage digital wallets for instant transactions. Users can transfer money to other users, track their payment history, and earn reward points on every transaction, which can be redeemed for exclusive vouchers and offers.

The platform seamlessly integrates financial services and property management, offering a unified and user-friendly experience for both tenants and landlords.`,
      features: [
        "Integrated Plaid API for bank verification and ACH transfers, automating tenant payment authorization and reducing manual verification time by 80%.",
        "Developed the Wallet-to-Wallet transaction module, enabling seamless transfers between 10,000+ Rentd user accounts with real-time balance updates and validation.",
        "Implemented a mailing feature that allows users to easily book free demo classes through the website.Built and optimized finance APIs for handling rent payments, refunds, and transaction history, ensuring secure and ACID-compliant operations.",
        "Implemented verification flows for password and passcode recovery with 15-minute expiry tokens, enhancing account security and preventing misuse.",
        "Developed and configured webhooks to handle real-time transaction updates from payment gateways and bank partners.",
        "Improved backend response times by ~40% through query optimization and asynchronous request handling."
      ],
      role: "Backend Developer",
      duration: "4 months",
      teamSize: "15 developers",
      githubUrl: "",
      liveUrl: ""
    },
    {
      title: "All-in-One Childcare Management",
      description: "A simplified childcare management platform that combines communication, learning tools, and administration into one platform.",
      image: childcareImg,
      background: 'bg-gradient-to-r from-purple-400 via-white-400 to-blue-400',
      techStack: ["Node.js", "Angular", "Javascript", "Kotlin", "Swift"],
      longDescription: "A simplified childcare management platform that combines communication, learning tools, and administration into one platform. It saves time, reduces costs, and enhances parent-teacher collaboration, making it the ideal solution for daycare and preschool centers. The platform helps administrators and educators focus on what matters most child development and education. With its mobile-first approach, Bounce makes it easier for teachers, parents, and center management to collaborate, improving efficiency and enhancing the learning experience for children globally.",
      features: [
        "Developed Program and Subscription modules, allowing admins to create programs, manage subscriptions, and automate invoice generation for enrolled students.",
        "Implemented a CRON-based invoice scheduler that generates and dispatches monthly invoices for 500+ students, reducing manual workload by 90%.",
        "Built a system to generate employee attendance sessions from check-in/check-out logs for accurate reporting.",
        "Optimized attendance reporting APIs using Sequelize and dynamic SQL, achieving 3× faster response times with advanced filtering, sorting, and pagination support.",
        "Implemented bulk student tag upload and developed reporting/export APIs for CSV and PDF formats.",
        "Enhanced multiple legacy APIs with better filtering, sorting, and performance optimizations.",
        "Implemented white-labeling, allowing centers to use their own branding, domain, and sender identity, improving customer trust and engagement."
      ],
      role: "Backend Developer",
      duration: "11 months",
      teamSize: "12 developers",
      githubUrl: "",
      liveUrl: ""
    },
    {
      title: "E-Learning Tracking Tool",
      description: "A React-Native mobile application that is used by L&D team to track the performance and progress of trainees in the E-Learning phase.",
      image: ilpexImg,
      background: 'bg-gradient-to-r from-purple-400 via-white-400 to-blue-500',
      techStack: ["React-Native", "Node.js", "Typescript", "MySQL", "AWS"],
      longDescription: `During my trainee phase at Experion, I led a team and developed a tracking tool for the Learning & Development (L&D) team to monitor progress of newly onboarded trainees. The tool tracks and analyzes individual performance via the Percipio platform and allows trainees to follow their daily learning materials.           
      It also enables L&D to manage multiple trainee batches, each with customized learning playlists. Initially developed as a POC, the tool is still actively used, saving countless hours of manual tracking previously done in Excel.`,
      features: [
        "Integrated with the Percipio learning platform (third-party) via API to track trainee learning activities and course completions automatically.",
        "Implemented automated notification and reminder systems to boost trainee engagement, assessment completion, and overall learning outcomes.",
        "Set up a monolithic Node.js architecture and standardized the folder structure to maintain code uniformity and streamline team collaboration.",
        "Deployed the application on AWS using SSH-based deployment and configured environment variables for secure access and scalability.",
        "Configured CRON jobs to sync trainee progress and update reports regularly from Percipio.",
        "Developed an in-app assessment module allowing trainees to attempt quizzes, receive grades, and track their performance within the platform.",
        "Built an interactive admin dashboard to visualize trainee performance, both individually and batch-wise, using progress metrics and assessment results.",
        "Implemented dynamic course list management, enabling admins to assign customized course lists per batch for tailored learning paths."
      ],
      role: "Team Lead / Full Stack Developer",
      duration: "3 months",
      teamSize: "7 developers",
      githubUrl: "https://github.com/joelcr10/ILPex",
      liveUrl: "#"
    },
    {
      title: "Movie Index Website",
      description: "A comprehensive film and TV discovery platform built on the TMDB API, featuring title details, cast information, reviews, and trending content.",
      image: imdbImg,
      background: 'bg-gradient-to-r from-orange-400 via-white-400 to-red-500',
      techStack: ["Javascript", "HTML", "CSS", "TypeScript", "Firebase"],
      longDescription: "Developed an IMDb clone website as part of a team project during the trainee phase, where I led a team of five members. Our goal was to recreate the IMDb experience both visually and functionally, and we successfully replicated nearly 90% of its core features and interface. The platform was built using the TMDB API to deliver real-time data on movies, TV shows, cast information, ratings, and trending content. The final product was a fully responsive and feature-rich movie database platform that closely resembled IMDb’s user experience. This project strengthened my leadership skills, enhanced my full-stack development abilities, and provided hands-on experience building a large-scale, real-world application using modern technologies.",
      features: [
        "Developed the Home Page, Movie Detail Page, and TV Series Page, creating an almost exact visual and functional replica of IMDb’s original design.",
        "Integrated the TMDB API to fetch accurate, real-time movie and TV series data, including ratings, cast, trailers, and trending content.",
        "Built an interactive and responsive carousel on the Home Page to highlight trending and featured titles.",
        "Developed a feature for sending and receiving friend requests, enabling users to connect with other MovieIndex users and view each other's watchlists.",
        "Designed and built a dedicated Profile Page, allowing users to view their personalized watchlist and profile details.",
        "Added core features such as watchlist management, user ratings, global search, and improved content navigation.",
        "Implemented a section to display currently running movies along with their box office collections."
      ],
      role: "Team Lead / Full Stack Developer",
      duration: "1 months",
      teamSize: "5 developers",
      githubUrl: "https://github.com/joelcr10/imdb",
      liveUrl: "#"
    },
    {
      title: "learnchess.online",
      description: "A Website developed for an Indian startup that teaches chess to 500+ children across 10+ countries.",
      image: learnchessImg,
      background: 'bg-gradient-to-r from-green-400 via-white-400 to-yellow-500',
      techStack: ["HTML", "CSS", "Javascript", "PHP"],
      longDescription: "During my third year of college, I took on a paid freelance project for a startup that provides online chess training to students across 10+ countries with over 500 active learners. Along with a teammate, I designed and developed their website from scratch, conducting weekly requirement meetings to ensure the product aligned with the client’s vision. The project was successfully delivered and deployed, earning positive feedback and full payment upon completion for our professionalism and quality of work.",
      features: [
        "Designed the complete website layout in Figma from scratch, ensuring a modern and user-friendly interface that was later approved by the client.",
        "Conducted weekly requirement discussions and demo sessions to stay aligned with the client’s goals and incorporate feedback effectively.",
        "Implemented a mailing feature that allows users to easily book free demo classes through the website.",
        "Developed a fully responsive website with smooth animations for an engaging user experience across all devices.",
        "Deployed the website on the client’s domain, ensuring a seamless launch and stable performance post-deployment.",
      ],
      role: "Web Developer",
      duration: "4 months",
      teamSize: "2 developers",
      githubUrl: "https://github.com/joelcr10/learn-chess.online",
      liveUrl: "https://learnchess.online/"
    },
    {
      title: "News Aggregator App",
      description: "A mobile application that aggregates news articles from various sources and presents them in a user-friendly interface.",
      image: inshortsImg,
      background: 'bg-gradient-to-r from-red-600 via-white-400 to-orange-700',
      techStack: ["React Native", "TypeScript", "MongoDB", "PostgreSQL", "Node.js"],
      longDescription: "An intelligent news aggregator app that collects news articles from multiple sources and summarizes them into concise, easy-to-read updates so users can stay informed quickly. Each summary includes a headline, image, short description, and a link to the full article for detailed reading.",
      features: [
        "Implemented content summarization logic to generate short, digestible versions of long news articles.",
        "Developed user authentication system with Google SSO integration and JWT-based login, ensuring secure access.",
        "Built a bookmark feature that allows users to save important news for later reading.",
        "Integrated lazy loading to improve performance and reduce initial page load time.",
        "Designed responsive UI components for a smooth, mobile-friendly user experience.",
      ],
      role: "Full Stack Developer",
      duration: "1 months",
      teamSize: "1 developer",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "E-Rot Detector WebApp",
      description: "A web application that uses image processing, machine learning, and gas sensor data to detect and analyze fruit ripeness.",
      image: fruitsImg,
      background: 'bg-gradient-to-r from-green-500 via-white-400 to-blue-400',
      techStack: ["Flutter", "React", "Firebase", "Python", "Raspberry PI", "Machine Learning", "Image Processing"],
      longDescription: "A web and IoT-based application developed as part of the final year B.Tech project, designed to detect and analyze the degree of fruit rottenness using image processing, machine learning, and gas sensor data. The system helps supermarkets and warehouses identify decaying fruits early, preventing spoilage of surrounding produce caused by gases like ethylene released during the rotting process.",
      features: [
        "Learned and implemented IoT by integrating Raspberry Pi with gas sensors (MQ series) to detect emitted gases from fruits.",
        "Established communication between Raspberry Pi and sensors using an ADC module to convert analog signals into digital data.",
        "Developed Python scripts to retrieve, clean, and store sensor readings in the database for classification.",
        "Trained a machine learning model to classify fruit freshness levels using combined image and gas data.",
        "Built a Flutter mobile application to display real-time gas levels and freshness indicators for each fruit basket.",
      ],
      role: "Full Stack Developer",
      duration: "3 months",
      teamSize: "2 developers",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "SwiftAid : 'Quick Emergency Response'",
      description: "A web application that uses image processing, machine learning, and gas sensor data to detect and analyze fruit ripeness.",
      image: swiftAidImg,
      background: 'bg-gradient-to-r from-pink-300 via-white-400 to-red-400',
      techStack: ["Flutter", "React", "Firebase", "Python", "Raspberry PI", "Machine Learning", "Image Processing"],
      longDescription: "A web and IoT-based application developed as part of the final year B.Tech project, designed to detect and analyze the degree of fruit rottenness using image processing, machine learning, and gas sensor data. The system helps supermarkets and warehouses identify decaying fruits early, preventing spoilage of surrounding produce caused by gases like ethylene released during the rotting process.",
      features: [
        "Learned and implemented IoT by integrating Raspberry Pi with gas sensors (MQ series) to detect emitted gases from fruits.",
        "Established communication between Raspberry Pi and sensors using an ADC module to convert analog signals into digital data.",
        "Developed Python scripts to retrieve, clean, and store sensor readings in the database for classification.",
        "Trained a machine learning model to classify fruit freshness levels using combined image and gas data.",
        "Built a Flutter mobile application to display real-time gas levels and freshness indicators for each fruit basket.",
      ],
      role: "Full Stack Developer",
      duration: "3 months",
      teamSize: "2 developers",
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  const visibleProjects = showAll ? projects : projects.slice(0,4);

  const handleProjectClick = (project: ProjectDetails) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {visibleProjects.map((project) => (
            <Card key={project.title} className="overflow-hidden hover-elevate" data-testid={`card-project-${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
              <CardHeader className= {`p-2 ${project.background}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-video object-contain"
                />
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="font-mono text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button
                  variant="outline"
                  onClick={() => handleProjectClick(project)}
                  data-testid={`button-view-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="gap-2"
                >
                  View Details <ExternalLink className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
         <Button variant={showAll? "outline" : "default"} size="lg" className="mt-10" onClick={() => setShowAll(!showAll)}>{showAll ? 'Show Less': 'View All Projects'}</Button>
      </div>

      <ProjectModal
        project={selectedProject}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </section>
  );
}
