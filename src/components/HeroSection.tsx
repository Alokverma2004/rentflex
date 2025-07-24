import { ArrowDown } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-background pt-16">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-foreground">
              Move In First. 
              <span className="block gradient-text bg-gradient-accent">
                Pay the Deposit Later.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground leading-relaxed">
              RentFlex covers your security deposit instantly — flexible repayment, zero hassle.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => scrollToSection('tenant-info')}
                className="hero-button-primary"
              >
                Apply as Tenant
              </button>
              <button 
                onClick={() => scrollToSection('owner-info')}
                className="hero-button-secondary"
              >
                Partner as Owner
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div 
              className="rounded-3xl shadow-soft h-96 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${heroImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;