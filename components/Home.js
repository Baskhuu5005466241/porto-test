// pages/index.js

import Header from './Header';
import Hero from './Hero';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import ProjectsSection from './ProjectsSection';
import Project from './Project';
import Projects from './Projects';

const Home = () => {
  return (
    <div>
      <Header />
      {/* <Hero /> */}
      {/* <Hero/> */}
      <HeroSection />
      <AboutSection/>
      <ContactSection/>
      <Project/>
      <Projects/>
      {/* Add more sections/components */}
    </div>
  );
};

export default Home;
