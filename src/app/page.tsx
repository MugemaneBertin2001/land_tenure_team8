
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import FeaturesSection from '@/components/FeaturesSection'
import FooterSection from '@/components/FooterSection'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import PropertyListing from '@/components/PropertyListing'
import TestimonialSection from '@/components/TestimonialSection'


export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <div id='listing'>
        <PropertyListing />
        <ContactSection />
        <TestimonialSection />
      </div>
      <FooterSection />
    </div>
  )
}
