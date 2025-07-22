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
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="step-card text-center hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">💬</div>
            <MessageCircle className="w-8 h-8 text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4 text-foreground">WhatsApp</h3>
            <p className="text-muted-foreground mb-6">
              Chat with us instantly for quick support
            </p>
            <a 
              href="https://wa.me/919876543210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hero-button-secondary"
            >
              Start Chat
            </a>
          </div>

          <div className="step-card text-center hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">✉️</div>
            <Mail className="w-8 h-8 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4 text-foreground">Email</h3>
            <p className="text-muted-foreground mb-6">
              Send us your queries anytime
            </p>
            <a 
              href="mailto:hello@rentflex.in"
              className="hero-button-primary"
            >
              Send Email
            </a>
          </div>

          <div className="step-card text-center hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">📞</div>
            <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4 text-foreground">Phone</h3>
            <p className="text-muted-foreground mb-6">
              Call us for immediate assistance
            </p>
            <a 
              href="tel:+919876543210"
              className="cta-button"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;