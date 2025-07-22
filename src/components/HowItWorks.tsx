import { Home, CreditCard, Calendar } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Home,
      title: "Choose your rental",
      description: "Browse and select your perfect PG, BHK, or rental property"
    },
    {
      icon: CreditCard,
      title: "We pay the deposit",
      description: "RentFlex covers the full security deposit amount instantly"
    },
    {
      icon: Calendar,
      title: "You repay us monthly",
      description: "Pay back in easy, affordable monthly installments"
    }
  ];

  return (
    <section id="tenant-info" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            For Tenants
            <span className="block text-secondary mt-2">How It Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Move into your dream rental in just 3 simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="step-card text-center group">
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto bg-secondary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                  <step.icon className="w-12 h-12 text-secondary-foreground" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://forms.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hero-button-primary"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;