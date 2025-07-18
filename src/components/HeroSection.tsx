import { ArrowDown } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 container-custom section-padding">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Deposit-Free Rentals.
            <span className="block gradient-text bg-gradient-to-r from-secondary to-yellow-300 bg-clip-text text-transparent">
              Move in Faster.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We cover your security deposit. You pay us later in easy installments.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => scrollToSection('tenant-info')}
              className="hero-button-secondary w-full sm:w-auto"
            >
              I'm a Tenant
            </button>
            <button 
              onClick={() => scrollToSection('owner-info')}
              className="hero-button-primary w-full sm:w-auto"
            >
              I'm an Owner
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-secondary" />
      </div>
    </section>
  );
};

export default HeroSection;