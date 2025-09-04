import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import heroImage from "@/assets/hero-bolivia.jpg";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('bolivia_waitlist')
        .insert([{ email }]);
        
      if (error) {
        throw error;
      }
      
      toast({
        title: "¡Gracias por unirte!",
        description: "Te notificaremos cuando DiscoverBolivia esté listo.",
      });
      setEmail("");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Hubo un problema al procesar tu solicitud.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-background/80" />
      </div>
      
      {/* Floating Andean Pattern Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-primary/20 rounded-full animate-float" />
      <div className="absolute top-40 right-20 w-12 h-12 bg-secondary/20 rounded-full animate-float" style={{animationDelay: '2s'}} />
      <div className="absolute bottom-40 left-20 w-20 h-20 bg-accent/20 rounded-full animate-float" style={{animationDelay: '4s'}} />
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Golden Sun Symbol */}
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 bg-gradient-sun rounded-full flex items-center justify-center shadow-sun animate-pulse-glow">
              <div className="w-16 h-16 border-4 border-primary-foreground rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-primary-foreground rounded-full" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            <span className="block sm:inline">Discover</span>
            <span className="block sm:inline">Bolivia</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed">
            Tu portal a la auténtica Bolivia. Conecta con ofertas locales, eventos únicos y experiencias inolvidables.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Explorar Ofertas
            </Button>
            <Button variant="mountain" size="lg" className="text-lg px-8 py-4">
              Para Comerciantes
            </Button>
          </div>
          
          {/* Email Signup */}
          <div className="max-w-md mx-auto bg-card/80 backdrop-blur-sm rounded-lg p-6 shadow-sun">
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Únete a la lista de espera
            </h3>
            <form onSubmit={handleEmailSubmit} className="flex gap-2">
              <Input 
                type="email" 
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button type="submit" variant="sun" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Notificarme"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
