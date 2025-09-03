import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MapPin, 
  CreditCard, 
  MessageCircle, 
  Globe, 
  Shield, 
  Zap,
  Users,
  Calendar
} from "lucide-react";
import appMockup from "@/assets/app-mockup.jpg";

const FeaturesSection = () => {
  const features = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Descubre Lugares Únicos",
      description: "Encuentra restaurantes, eventos, tours y tiendas locales con ofertas exclusivas."
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Pago Seguro Integrado",
      description: "Paga directamente en la app y ahorra en comisiones. Sin necesidad de efectivo."
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Chat Directo",
      description: "Comunícate directamente con los comerciantes para consultas y reservas."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Soporte Multiidioma",
      description: "IA que rompe las barreras del idioma para turistas internacionales."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Comerciantes Verificados",
      description: "Solo negocios locales verificados. Precios acordados previamente."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Experiencias Personalizadas",
      description: "IA que adapta ofertas según tu perfil y preferencias."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Comunidad Local",
      description: "Apoya únicamente a negocios locales bolivianos."
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Reserva y Pre-pago",
      description: "Reserva anticipada con pago seguro para garantizar tu experiencia."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-mountain bg-clip-text text-transparent">
            Una App, Infinitas Experiencias
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            DiscoverBolivia conecta turistas y locales con auténticas experiencias bolivianas, 
            desde la vibrante vida nocturna hasta tours únicos en la naturaleza.
          </p>
        </div>

        {/* App Mockup and Features Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* App Mockup */}
          <div className="relative">
            <div className="relative group">
              <img 
                src={appMockup} 
                alt="DiscoverBolivia App Screenshots"
                className="w-full rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-sun/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-border/50 hover:shadow-sun transition-all duration-300 hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;