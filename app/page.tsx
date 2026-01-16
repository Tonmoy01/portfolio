import Navigation from '@/components/Navigation/Navigation';
import Hero from '@/components/Hero/Hero';
import Stats from '@/components/Sections/Stats';
import About from '@/components/Sections/About';
import Skills from '@/components/Sections/Skills';
import Projects from '@/components/Sections/Projects';
import Experience from '@/components/Sections/Experience';
import Education from '@/components/Sections/Education';
import HireMe from '@/components/Sections/HireMe';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className='relative pt-32 pb-20 px-6 max-w-[1920px] mx-auto overflow-hidden'>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <HireMe />
        <Footer />
      </main>
    </>
  );
}
