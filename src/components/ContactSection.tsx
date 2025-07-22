import { MessageCircle } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Talk to Us
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Ready to get started? We're here to help at every step.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="step-card text-center p-8">
            <div className="w-20 h-20 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-foreground">WhatsApp Chat</h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Get instant answers to your questions and start your deposit-free rental journey
            </p>
            <a
              href="https://wa.me/919876543210"
              className="hero-button-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Chat Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;