import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const emailBody = `Nome: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AAssunto: ${formData.subject}%0D%0A%0D%0AMensagem:%0D%0A${formData.message}`;
    const mailtoUrl = `mailto:Nicolaspaiva@2001Gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${emailBody}`;
    
    // Open email client
    window.location.href = mailtoUrl;
    
    // Show success message
    toast({
      title: "Email preparado!",
      description: "Seu cliente de email será aberto para enviar a mensagem.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "Nicolaspaiva@2001Gmail.com",
      link: "mailto:Nicolaspaiva@2001Gmail.com",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "nicolas-marques2001",
      link: "https://br.linkedin.com/in/nicolas-marques2001",
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "Curitiba - Paraná",
      link: null,
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Entre em <span className="text-gradient">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tem algum projeto em mente? Vamos conversar sobre como posso ajudar 
            a transformar suas ideias em realidade
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Vamos trabalhar juntos!</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Estou sempre aberto a novas oportunidades e colaborações. 
                Se você tem um projeto interessante ou quer discutir ideias, 
                não hesite em entrar em contato.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card
                    key={index}
                    className="border-primary/20 bg-card/50 backdrop-blur-sm hover:bg-card/80 smooth-transition"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg">{item.title}</h4>
                          {item.link ? (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:text-accent smooth-transition"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{item.value}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Envie uma mensagem</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Assunto</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Assunto da mensagem"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Conte-me sobre seu projeto ou como posso ajudar..."
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full hero-gradient text-background font-semibold hover:scale-105 smooth-transition"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;