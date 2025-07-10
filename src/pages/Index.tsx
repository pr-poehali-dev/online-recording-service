import {
  Header,
  HeroSection,
  ServicesSection,
  MastersSection,
  BookingSection,
  ContactsSection,
  Footer,
} from "@/components/sections";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <MastersSection />
      <BookingSection />
      <ContactsSection />
      <Footer />
    </div>
  );
};

export default Index;
