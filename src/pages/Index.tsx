import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import ForOwners from '@/components/ForOwners';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import FAQSection from '@/components/FAQSection';
import HowRentFlexWorksCode from '@/components/HowRentFlexWorksCode';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <HowItWorks />
      <ForOwners />
      <TestimonialsCarousel />
      <FAQSection />
      <HowRentFlexWorksCode />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
