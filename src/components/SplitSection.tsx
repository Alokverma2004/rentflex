const SplitSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* For Tenants */}
          <div className="step-card text-center group cursor-pointer hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-6">📦</div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Don't Block ₹30K for a Deposit
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We take care of it. Move in now, repay later in easy monthly installments that fit your budget.
            </p>
            <button 
              onClick={() => scrollToSection('tenant-info')}
              className="hero-button-primary w-full"
            >
              I'm a Tenant
            </button>
          </div>

          {/* For Owners */}
          <div className="step-card text-center group cursor-pointer hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-6">💼</div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Get the Full Deposit Instantly
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Attract verified tenants faster. No risk, no fees. We handle everything for you.
            </p>
            <button 
              onClick={() => scrollToSection('owner-info')}
              className="hero-button-secondary w-full"
            >
              I'm an Owner
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitSection;