import { MessageCircle, Mail, Phone, Twitter, Linkedin, Instagram } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? We're here to help you get started with deposit-free rentals
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* WhatsApp */}
          <a 
            href="https://wa.me/+911234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="step-card text-center group hover:bg-secondary/10 transition-colors"
          >
            <div className="w-16 h-16 mx-auto bg-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
            <p className="text-muted-foreground">Chat with us instantly</p>
          </a>
          
          {/* Email */}
          <a 
            href="mailto:hello@rentflex.in" 
            className="step-card text-center group hover:bg-secondary/10 transition-colors"
          >
            <div className="w-16 h-16 mx-auto bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Mail className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground">hello@rentflex.in</p>
          </a>
          
          {/* Phone */}
          <a 
            href="tel:+911234567890" 
            className="step-card text-center group hover:bg-secondary/10 transition-colors"
          >
            <div className="w-16 h-16 mx-auto bg-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Phone className="w-8 h-8 text-secondary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-muted-foreground">+91 12345 67890</p>
          </a>
        </div>
        
        {/* Social Media */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold mb-8">Follow Us</h3>
          <div className="flex justify-center gap-6">
            {[
              { icon: Twitter, href: "https://twitter.com/rentflex", label: "Twitter" },
              { icon: Linkedin, href: "https://linkedin.com/company/rentflex", label: "LinkedIn" },
              { icon: Instagram, href: "https://instagram.com/rentflex", label: "Instagram" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-card rounded-full flex items-center justify-center shadow-soft hover:shadow-lg transition-all hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 text-foreground" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;