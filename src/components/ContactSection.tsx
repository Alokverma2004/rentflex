import { MessageCircle, Mail, Phone, Twitter, Linkedin, Instagram } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Talk to Us
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to get started? We're here to help! 💬
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <div className="step-card text-center hover:scale-105 transition-all duration-300">
            <MessageCircle className="w-20 h-20 text-secondary mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-4 text-foreground">WhatsApp</h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Chat with us instantly for quick support and assistance
            </p>
            <a 
              href="https://wa.me/919876543210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hero-button-secondary w-full"
            >
              Start Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;