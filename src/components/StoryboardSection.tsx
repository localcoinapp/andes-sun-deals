import storyboardImage from "@/assets/storyboard.jpg";

const StoryboardSection = () => {
  const scenarios = [
    {
      step: "01",
      title: "Buscar & Descubrir",
      description: "Los turistas buscan restaurantes auténticos, eventos locales y experiencias únicas en DiscoverBolivia."
    },
    {
      step: "02", 
      title: "Explorar Ofertas",
      description: "Encuentra ofertas especiales, shows de DJ, fiestas en bares y tours guiados con precios transparentes."
    },
    {
      step: "03",
      title: "Conectar & Reservar", 
      description: "Chatea directamente con comerciantes locales, haz preguntas y reserva tu experiencia."
    },
    {
      step: "04",
      title: "Pagar de Forma Segura",
      description: "Paga directamente en la app con tarifas reducidas y sin necesidad de efectivo."
    },
    {
      step: "05",
      title: "Vivir la Experiencia",
      description: "Disfruta de experiencias auténticas bolivianas con la tranquilidad de servicios verificados."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-amazon bg-clip-text text-transparent">
            Tu Viaje, Paso a Paso
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desde la búsqueda hasta la experiencia completa, DiscoverBolivia hace que descubrir Bolivia sea fácil y seguro.
          </p>
        </div>

        {/* Storyboard Image */}
        <div className="relative mb-16">
          <div className="relative group">
            <img 
              src={storyboardImage} 
              alt="DiscoverBolivia User Journey Storyboard"
              className="w-full rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-hero/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>

        {/* Journey Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {scenarios.map((scenario, index) => (
            <div key={index} className="text-center group">
              {/* Step Number */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-sun rounded-full text-primary-foreground font-bold text-xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sun">
                {scenario.step}
              </div>
              
              {/* Step Content */}
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                {scenario.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {scenario.description}
              </p>
              
              {/* Connector Line (hidden on last item) */}
              {index < scenarios.length - 1 && (
                <div className="hidden xl:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent transform translate-x-8 -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoryboardSection;