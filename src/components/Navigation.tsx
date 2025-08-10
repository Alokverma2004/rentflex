import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ApplyDialog from './ApplyDialog';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isApplyDialogOpen, setIsApplyDialogOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'For Tenants', id: 'tenant-info' },
    { label: 'For Owners', id: 'owner-info' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/7e196370-6756-436f-88ce-ed3e23764645.png" 
              alt="RentFlex Logo" 
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold text-foreground">RentFlex</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.path ? (
                <Link
                  key={item.label}
                  to={item.path}
                  className="nav-link"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id!)}
                  className="nav-link"
                >
                  {item.label}
                </button>
              )
            ))}
            {location.pathname === '/' ? (
              <button
                onClick={() => setIsApplyDialogOpen(true)}
                className="cta-button"
              >
                Apply Now
              </button>
            ) : (
              <Link
                to="/application"
                className="cta-button"
              >
                Apply Now
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container-custom py-4 space-y-4">
            {navItems.map((item) => (
              item.path ? (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-left nav-link py-2"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id!)}
                  className="block w-full text-left nav-link py-2"
                >
                  {item.label}
                </button>
              )
            ))}
            {location.pathname === '/' ? (
              <button
                onClick={() => setIsApplyDialogOpen(true)}
                className="cta-button w-full mt-4"
              >
                Apply Now
              </button>
            ) : (
              <Link
                to="/application"
                onClick={() => setIsMenuOpen(false)}
                className="cta-button w-full mt-4"
              >
                Apply Now
              </Link>
            )}
          </div>
        </div>
      )}
      
      <ApplyDialog 
        open={isApplyDialogOpen} 
        onOpenChange={setIsApplyDialogOpen} 
      />
    </nav>
  );
};

export default Navigation;