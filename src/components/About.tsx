import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Code, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sobre <span className="text-gradient">Mim</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Conheça um pouco da minha trajetória e paixão por tecnologia
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Faço Graduação em Engenharia de Software e pratiquei em sala de aula as linguagens 
                <span className="text-primary font-semibold"> PHP, SQL, Java e Python</span>. 
                Estudo HTML e CSS por conta própria e procuro desenvolver projetos para aprofundar 
                meu conhecimento.
              </p>
              
              <p className="text-lg leading-relaxed">
                Minha paixão é criar soluções tecnológicas que fazem a diferença, sempre focando 
                em <span className="text-primary font-semibold">qualidade e consistência</span>  
                em cada projeto que desenvolvo.
              </p>

              <p className="text-lg leading-relaxed">
                Busco constantemente novos desafios e oportunidades para aplicar meus conhecimentos 
                e continuar evoluindo como desenvolvedor.
              </p>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 backdrop-blur-sm border border-primary/20">
                <div className="text-center">
                  <Code className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Desenvolvedor</h3>
                  <p className="text-muted-foreground">
                    Focado em criar experiências digitais excepcionais
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats/Highlights */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-hover border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Educação</h3>
                <p className="text-muted-foreground">
                  Graduação em Engenharia de Software
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Code className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Experiência</h3>
                <p className="text-muted-foreground">
                  Múltiplas linguagens e tecnologias
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Objetivo</h3>
                <p className="text-muted-foreground">
                  Entregar qualidade e consistência
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;