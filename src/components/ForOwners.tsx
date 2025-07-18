import { CheckCircle, Users, Shield, TrendingUp } from 'lucide-react';

const ForOwners = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Fill vacancies faster",
      description: "Attract more tenants with our deposit-free option"
    },
    {
      icon: Users,
      title: "Get verified tenants",
      description: "All tenants go through our thorough verification process"
    },
    {
      icon: Shield,
      title: "We handle repayment",
      description: "Zero hassle for you - we manage all payment collections"
    }
  ];

  return (
    <section id="owner-info" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            For Owners & PGs
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-primary mb-4">
            Get Your Full Security Deposit Instantly.
          </p>
          <p className="text-xl text-muted-foreground">
            No Risk, No Cost.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="step-card text-center">
              <div className="w-16 h-16 mx-auto bg-secondary rounded-2xl flex items-center justify-center mb-6">
                <benefit.icon className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-soft">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Why Partner with RentFlex?</h3>
              <ul className="space-y-4">
                {[
                  "Immediate deposit payment",
                  "Zero administrative overhead",
                  "Increased tenant pool",
                  "Professional tenant screening"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <a 
                href="https://forms.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hero-button-secondary"
              >
                Partner with RentFlex
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForOwners;