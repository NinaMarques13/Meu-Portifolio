import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-coding.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Coding workspace"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQHSrxo9Z7B1Dw/profile-displayphoto-scale_200_200/B4DZiUxN8oHwAY-/0/1754842588362?e=2147483647&v=beta&t=jz78T4mX04wXBPP5D4mSOmh32nT51mwyHb0a3RsrNek"
              alt="Nicolas Marques dos Paiva Nascimento"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-primary glow-effect animate-float"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-foreground">Olá, eu sou </span>
            <span className="text-gradient">Nicolas Marques</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 font-light">
            Engenharia de Software / Desenvolvedor FullStack
          </h2>

          {/* Location */}
          <p className="text-lg text-muted-foreground mb-8">
            📍 Curitiba - Paraná
          </p>

          {/* Slogan */}
          <p className="text-xl md:text-2xl text-primary font-medium mb-12 max-w-2xl mx-auto">
            "Entregar qualidade e consistência"
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="hero-gradient text-background font-semibold px-8 py-3 text-lg hover:scale-105 smooth-transition glow-effect"
            >
              Ver Projetos
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg"
            >
              Entre em Contato
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://br.linkedin.com/in/nicolas-marques2001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary smooth-transition hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:Nicolaspaiva@2001Gmail.com"
              className="text-muted-foreground hover:text-primary smooth-transition hover:scale-110"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary smooth-transition hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;