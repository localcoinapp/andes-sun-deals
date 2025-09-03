import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Sun } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "¡Suscripción Exitosa!",
        description: "Te mantendremos informado sobre DiscoverBolivia.",
      });
      setEmail("");
    }
  };

  return (
    <footer className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-sun rounded-full flex items-center justify-center shadow-sun">
                <Sun className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                DiscoverBolivia
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Conectando turistas y locales con las auténticas experiencias bolivianas. 
              Descubre la verdadera Bolivia a través de ofertas locales, eventos únicos y 
              experiencias culturales incomparables.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Bolivia - Corazón de Sudamérica</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                  Características
                </a>
              </li>
              <li>
                <a href="#storyboard" className="text-muted-foreground hover:text-primary transition-colors">
                  Cómo Funciona
                </a>
              </li>
              <li>
                <a href="#merchants" className="text-muted-foreground hover:text-primary transition-colors">
                  Para Comerciantes
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Mantente Informado</h4>
            <p className="text-muted-foreground mb-4 text-sm">
              Suscríbete para recibir actualizaciones sobre el lanzamiento.
            </p>
            <form onSubmit={handleEmailSubmit} className="space-y-3">
              <Input 
                type="email" 
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" variant="sun" size="sm" className="w-full">
                Suscribirse
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground text-sm">
            © 2024 DiscoverBolivia. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Mail className="w-4 h-4" />
            <a href="mailto:localcoinapp@gmail.com" className="hover:text-primary transition-colors">
              localcoinapp@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;