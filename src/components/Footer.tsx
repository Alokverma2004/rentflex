const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary/90 to-primary text-primary-foreground section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/7e196370-6756-436f-88ce-ed3e23764645.png" 
                alt="RentFlex Logo" 
                className="h-8 w-auto"
              />
              <h3 className="text-2xl font-bold">RentFlex</h3>
            </div>
            <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-md">
              Making rentals accessible for everyone. Deposit-free living for the modern generation.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#tenant-info" className="text-primary-foreground/80 hover:text-secondary transition-colors">For Tenants</a></li>
              <li><a href="#owner-info" className="text-primary-foreground/80 hover:text-secondary transition-colors">For Owners</a></li>
              <li><a href="mailto:alokverma4237@gmail.com" className="text-primary-foreground/80 hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Legal</h4>
            <ul className="space-y-3">
              <li><a href="/about" className="text-primary-foreground/80 hover:text-secondary transition-colors">About</a></li>
              <li><a href="/terms" className="text-primary-foreground/80 hover:text-secondary transition-colors">Terms</a></li>
              <li><a href="/privacy" className="text-primary-foreground/80 hover:text-secondary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © 2025 RentFlex. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;