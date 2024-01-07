
import AboutSection from '@/components/landingPage/AboutSection'
import ContactSection from '@/components/landingPage/ContactSection'
import FeaturesSection from '@/components/landingPage/FeaturesSection'
import FooterSection from '@/components/landingPage/FooterSection'
import Header from '@/components/landingPage/Header'
import HeroSection from '@/components/landingPage/HeroSection'
import PropertyListing from '@/components/landingPage/PropertyListing'
import TestimonialSection from '@/components/landingPage/TestimonialSection'


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
    <TestimonialSection  />
    <FooterSection />
    </div>
   </div>
  )
}
