
import AboutSection from '@/components/landingPage/AboutSection'
import ContactSection from '@/components/landingPage/ContactSection/ContactSection'
import FeaturesSection from '@/components/landingPage/Features/FeaturesSection'
import FooterSection from '@/components/landingPage/Footer/FooterSection'
import Header from '@/components/landingPage/Header'
import HeroSection from '@/components/landingPage/HeroSection'
import PropertyListing from '@/components/landingPage/Property/PropertyListing'
import TestimonialSection from '@/components/landingPage/Testimonials/TestimonialSection'


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
