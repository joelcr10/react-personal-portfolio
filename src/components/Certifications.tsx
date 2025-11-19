import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

type Certification = {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
};

type ResearchPaper = {
  title: string;
  publication: string;
  year: string;
  link?: string;
};

export default function Certifications() {
  const certifications: Certification[] = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2025",
      credentialId: "GHI789RST"
    },
    {
      title: "Complete Node.js course with Express, socket.io and MongoDB",
      issuer: "Udemy",
      date: "2022",
      credentialId: "9978HJ-13CT"
    }
  ];

  const researchPapers: ResearchPaper[] = [
    {
      title: "Fruit Freshness Detection using IoT and Deep Learning",
      publication: "IEEE Xplore",
      year: "2023",
      link: "https://ieeexplore.ieee.org/document/10244785"
    },
  ];

  const handlePaperClick = (title: string) => {
    console.log(`View paper: ${title}`);
  };

  return (
    <section id="certifications" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center">
          Certifications & Research
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <Card key={cert.title} data-testid={`card-cert-${cert.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <CardHeader className="pb-3">
                    <h4 className="text-lg font-semibold">{cert.title}</h4>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{cert.date}</Badge>
                      {cert.credentialId && (
                        <span className="text-xs font-mono text-muted-foreground">
                          ID: {cert.credentialId}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              Research Papers
            </h3>
            <div className="space-y-4">
              {researchPapers.map((paper) => (
                <Card key={paper.title} className="hover-elevate" data-testid={`card-paper-${paper.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <CardHeader className="pb-3">
                    <h4 className="text-lg font-semibold leading-snug">{paper.title}</h4>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">{paper.publication}</p>
                    <div className="flex items-center justify-between gap-2">
                      <Badge variant="secondary">{paper.year}</Badge>
                      {paper.link && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => window.open('https://ieeexplore.ieee.org/document/10244785')}
                          data-testid={`button-view-paper-${paper.title.toLowerCase().replace(/\s+/g, '-')}`}
                          className="gap-1"
                        >
                          View <ExternalLink className="h-3 w-3" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
