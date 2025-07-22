import { useState } from 'react';
import React from 'react';
import { Home, CreditCard, Calendar } from 'lucide-react';

const HowItWorksInteractive = () => {
  const [activeTab, setActiveTab] = useState(0);

  const steps = [
    {
      icon: Home,
      title: "You Choose a Room",
      description: "Browse and select your perfect PG, BHK, or rental property. Find the ideal place that fits your needs and budget.",
      emoji: "🏠"
    },
    {
      icon: CreditCard,
      title: "We Pay the Deposit",
      description: "RentFlex covers the full security deposit amount instantly. No need to block your money - we've got you covered.",
      emoji: "💳"
    },
    {
      icon: Calendar,
      title: "You Pay Us Later",
      description: "Repay us in easy, affordable monthly installments. Flexible terms that work with your budget and lifestyle.",
      emoji: "📅"
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            How RentFlex Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Move into your dream rental in just 3 simple steps
          </p>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex flex-col md:flex-row justify-center mb-12 space-y-2 md:space-y-0 md:space-x-4">
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-3 px-6 py-4 rounded-full font-semibold transition-all duration-300 ${
                activeTab === index ? 'tab-active' : 'tab-inactive'
              }`}
            >
              <span className="text-2xl">{step.emoji}</span>
              <span>Step {index + 1}</span>
            </button>
          ))}
        </div>

        {/* Active Step Content */}
        <div className="max-w-4xl mx-auto">
          <div className="step-card text-center">
            <div className="w-20 h-20 mx-auto bg-secondary rounded-full flex items-center justify-center mb-6">
              {React.createElement(steps[activeTab].icon, { className: "w-10 h-10 text-secondary-foreground" })}
            </div>
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              {steps[activeTab].title}
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {steps[activeTab].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksInteractive;