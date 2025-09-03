import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { 
  Store, 
  Percent, 
  Smartphone, 
  TrendingUp,
  Heart,
  Zap
} from "lucide-react";
import merchantsImage from "@/assets/merchants.jpg";

const MerchantsSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      // Combine phone and message for the contacts table message field
      const contactMessage = `Teléfono: ${formData.phone || 'No proporcionado'}

${formData.message}`;
      
      const { error } = await supabase
        .from('contacts')
        .insert([{
          name: formData.name,
          email: formData.email,
          business: formData.business,
          message: contactMessage
        }]);
        
      if (error) {
        throw error;
      }
      
      toast({
        title: "¡Solicitud Enviada!",
        description: "Te contactaremos pronto para discutir tu participación.",
      });
      
      setFormData({ name: "", business: "", email: "", phone: "", message: "" });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Hubo un problema al enviar tu solicitud.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: <Store className="w-8 h-8" />,
      title: "Promoción Gratuita",
      description: "Promociona tu negocio sin costos de registro. Solo pagas una pequeña comisión por venta."
    },
    {
      icon: <Percent className="w-8 h-8" />,
      title: "Comisiones Mínimas",
      description: "Comisiones más bajas que otros servicios de pago. Maximiza tus ganancias."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Sin POS Costosos",
      description: "No necesitas sistemas POS caros. Solo conéctate en línea y empieza a ganar."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Más Clientes",
      description: "Accede a turistas y locales buscando experiencias auténticas bolivianas."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Comunidad Local",
      description: "Únete a una red que promueve y apoya exclusivamente negocios locales bolivianos."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fácil de Usar",
      description: "Interfaz simple y directa. Configura tu negocio y empieza a vender en minutos."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-mountain bg-clip-text text-transparent">
            Para Comerciantes Bolivianos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Una forma gratuita de promocionar tu negocio, sin tarifas de registro, 
            con comisiones mínimas y acceso directo a turistas y locales.
          </p>
        </div>

        {/* Benefits and Image Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-secondary/30 hover:shadow-sun transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-secondary/20 rounded-lg text-secondary">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Merchants Image */}
          <div className="relative">
            <div className="relative group">
              <img 
                src={merchantsImage} 
                alt="Comerciantes Bolivianos Exitosos"
                className="w-full rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-mountain/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-card/80 backdrop-blur-sm shadow-sun border-secondary/30">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl mb-2">¿Interesado en Unirte?</CardTitle>
              <p className="text-muted-foreground">
                Contáctanos para ser parte de la plataforma que está transformando el turismo en Bolivia.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nombre Completo *
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="business" className="block text-sm font-medium mb-2">
                      Nombre del Negocio *
                    </label>
                    <Input
                      id="business"
                      value={formData.business}
                      onChange={(e) => setFormData(prev => ({ ...prev, business: e.target.value }))}
                      required
                      placeholder="Nombre de tu negocio"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      required
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Teléfono
                    </label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="+591 xxx xxxx"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Cuéntanos sobre tu negocio
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Describe tu negocio, servicios y cómo te gustaría participar en DiscoverBolivia..."
                    rows={4}
                  />
                </div>

                <Button type="submit" variant="mountain" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Enviar Solicitud de Contacto"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MerchantsSection;