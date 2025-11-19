import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSocialClick = (url: string) => {
    // console.log(`${platform} clicked`);
    window.open(url, "_blank")
  };

  return (
    <footer className="py-12 px-6 border-t">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <p className="text-sm text-muted-foreground">
              © 2025 Joel C Raju. All rights reserved.
            </p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleSocialClick("https://github.com/joelcr10")}
              data-testid="link-github"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleSocialClick("https://www.linkedin.com/in/jcr2000/")}
              data-testid="link-linkedin"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleSocialClick("gmail:joelcraju@gmail.com")}
              data-testid="link-email"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex justify-end">
            <Button
              variant="outline"
              onClick={scrollToTop}
              data-testid="button-back-to-top"
              className="gap-2"
            >
              Back to Top <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
