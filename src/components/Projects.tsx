import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import dashboardImage from "@/assets/project-dashboard.jpg";
import mobileImage from "@/assets/project-mobile.jpg";
import portfolioImage from "@/assets/project-portfolio.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Dashboard Analytics",
      description: "Aplicação web para visualização de dados e métricas em tempo real, desenvolvida com interface moderna e responsiva.",
      image: dashboardImage,
      technologies: ["PHP", "JavaScript", "CSS", "SQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "App Mobile E-commerce",
      description: "Aplicativo mobile para e-commerce com funcionalidades completas de carrinho, pagamento e gerenciamento de pedidos.",
      image: mobileImage,
      technologies: ["Java", "SQL", "XML"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Sistema de Portfólio",
      description: "Website responsivo para apresentação de projetos e habilidades, com design clean e foco na experiência do usuário.",
      image: portfolioImage,
      technologies: ["HTML", "CSS", "JavaScript", "Python"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meus <span className="text-gradient">Projetos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Uma seleção dos projetos que desenvolvi, demonstrando minhas habilidades 
            em diferentes tecnologias e cenários
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="card-hover border-primary/20 bg-card/50 backdrop-blur-sm overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 smooth-transition"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 smooth-transition" />
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold group-hover:text-primary smooth-transition">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver Demo
                    </a>
                  </Button>
                  
                  <Button
                    size="sm"
                    variant="ghost"
                    className="flex-1 hover:bg-primary/10 hover:text-primary"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interessado em ver mais projetos ou colaborar?
          </p>
          <Button
            size="lg"
            className="hero-gradient text-background font-semibold hover:scale-105 smooth-transition"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Vamos Conversar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;