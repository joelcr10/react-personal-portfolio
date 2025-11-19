import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

type EducationItem = {
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  achievements?: string[];
  coursework?: string[];
};

export default function Education() {
  const education: EducationItem[] = [
    {
      institution: "APJ Abdul Kalam Technological University",
      degree: "B. Tech",
      field: "Computer Science & Engineering",
      location: "Kottayam, KL",
      startDate: "2019",
      endDate: "2023",
      gpa: "8.21",
      achievements: [
        "Consistently achieved academic excellence, earning Dean’s List distinction for six semesters.",
        "Elected to the Student Council for demonstrating leadership and initiative, facilitating communication between students and management, and coordinating key campus events.",
        "As Webmaster of the ACM Club, built and maintained the official website, designed event posters, coordinated technical events, and helped expand the club’s membership to 400+ students.",
        "Led a team of 6 as Team Head for a Web/App Development Exhibition, guiding school students through the fundamentals of website and app development."
      ],
      coursework: [
        "Data Structures",
        "Algorithms",
        "Database Systems",
        "Web Development",
        "Cloud Computing",
        "Machine Learning",
        "Internet of Things (IoT)",
        "Artificial Inteligence",
        "Computer Networks"
      ]
    },
    {
      institution: "St. Gregorios School",
      degree: "High School Diploma",
      field: "CBSE",
      location: "Dwarka, DL",
      startDate: "2017",
      endDate: "2019",
      gpa: "89%",
      achievements: [
        "Achieved victory at the zonal level in my debut football tournament, showcasing strong teamwork, strategy, and determination on the field..",
        "Secured multiple medals in track and field events, demonstrating consistent athletic performance, discipline, and a passion for sports during my school years.",
        "Received the ‘Star Child’ award for consecutive years in recognition of exemplary behavior, leadership qualities, and positive contribution to the school community."
      ],
      coursework: [
        "Football",
        "Track and Field",
        "Science",
        "Computer Science",
        "Mathematics",
        "English"
      ]
    }
  ];

  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Education
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            My academic journey and educational qualifications
          </p>
        </div>

        <div className="space-y-6">
          {education.map((item, index) => (
            <Card 
              key={index} 
              className="hover-elevate"
              data-testid={`card-education-${item.institution.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">
                        {item.institution}
                      </h3>
                      <p className="text-base font-medium text-primary mb-2">
                        {item.degree} - {item.field}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{item.startDate} - {item.endDate}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{item.location}</span>
                        </div>
                        {item.gpa && (
                          <div className="flex items-center gap-1">
                            <Award className="h-4 w-4" />
                            <span>GPA: {item.gpa}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {item.achievements && item.achievements.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      Achievements
                    </h4>
                    <ul className="space-y-1">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex gap-3 pt-3 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {item.coursework && item.coursework.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      Relevant Coursework
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.coursework.map((course) => (
                        <Badge key={course} variant="secondary" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
