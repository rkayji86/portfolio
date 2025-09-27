import './App.css'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectSection from './components/ProjectSection'
import ServicesSection from './components/ServicesSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'


function App() {

  return (
    <div className='min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300'>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
