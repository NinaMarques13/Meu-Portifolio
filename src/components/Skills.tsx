import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Globe, Terminal } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Globe,
      skills: ["HTML", "CSS", "JavaScript"],
      color: "text-blue-400",
    },
    {
      title: "Backend",
      icon: Terminal,
      skills: ["PHP", "Python", "Java"],
      color: "text-green-400",
    },
    {
      title: "Database",
      icon: Database,
      skills: ["SQL"],
      color: "text-purple-400",
    },
    {
      title: "Tools",
      icon: Code,
      skills: ["Git", "C"],
      color: "text-orange-400",
    },
  ];

  const allSkills = ["HTML", "CSS", "PHP", "Python", "Git", "SQL", "Java", "C"];

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Minhas <span className="text-gradient">Habilidades</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções completas
          </p>
        </div>

        {/* Skills by Category */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={index}
                className="card-hover border-primary/20 bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <IconComponent className={`h-12 w-12 mx-auto mb-4 ${category.color}`} />
                  <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20 mr-2"
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

        {/* All Skills Overview */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Stack Completo</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {allSkills.map((skill, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-4 py-2 text-lg border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground smooth-transition cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Learning Section */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto border-primary/20 bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Sempre <span className="text-gradient">Aprendendo</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Acredito no aprendizado contínuo e estou sempre explorando novas tecnologias 
                e aprimorando minhas habilidades existentes. A tecnologia evolui rapidamente, 
                e eu evoluo junto com ela.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;