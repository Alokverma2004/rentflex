import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import ForOwners from '@/components/ForOwners';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowItWorks />
      <ForOwners />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
