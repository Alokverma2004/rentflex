import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import HowItWorksInteractive from '@/components/HowItWorksInteractive';
import SplitSection from '@/components/SplitSection';
import HowItWorks from '@/components/HowItWorks';
import ForOwners from '@/components/ForOwners';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <HowItWorksInteractive />
      <SplitSection />
      <HowItWorks />
      <ForOwners />
      <TestimonialsCarousel />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
