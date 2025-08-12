import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://br.linkedin.com/in/nicolas-marques2001",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:Nicolaspaiva@2001Gmail.com",
      label: "Email",
    },
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background/95 backdrop-blur-md border-t border-border">
      <div className="container-wide">
        <div className="py-12">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <button
                onClick={scrollToTop}
                className="text-2xl font-bold text-primary hover:text-accent smooth-transition"
              >
                Nicolas M.
              </button>
              <p className="text-muted-foreground">
                Desenvolvedor FullStack apaixonado por criar soluções tecnológicas 
                que fazem a diferença.
              </p>
              <p className="text-sm text-muted-foreground">
                📍 Curitiba - Paraná
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Links Rápidos</h3>
              <nav className="space-y-2">
                {[
                  { label: "Sobre", href: "#about" },
                  { label: "Projetos", href: "#projects" },
                  { label: "Habilidades", href: "#skills" },
                  { label: "Contato", href: "#contact" },
                ].map((link) => (
                  <button
                    key={link.label}
                    onClick={() => {
                      const element = document.getElementById(link.href.slice(1));
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="block text-muted-foreground hover:text-primary smooth-transition"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Conecte-se</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-muted p-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 smooth-transition"
                      aria-label={social.label}
                    >
                      <IconComponent className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
              <p className="text-sm text-muted-foreground">
                Vamos trabalhar juntos em seu próximo projeto!
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground text-center md:text-left">
                © {currentYear} Nicolas Marques dos Paiva Nascimento. 
                Todos os direitos reservados.
              </p>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Feito com</span>
                <Heart className="h-4 w-4 text-red-500 animate-pulse" />
                <span>e muita dedicação</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;