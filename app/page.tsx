import Header from './components/header/page';
import Hero from './components/hero/page';
import WorkExperience from './components/workExperience/page';
import Skillset from './components/skillSet/page';
import Projects from './components/projects/projects';
import BlogSection from './components/blog/page';
import ContactSection from './components/contactSection/page';
import Footer from './components/footer/footer';

export default function Home() {
  return (<>
    <Header />
    <main className='w-full max-w-[2000px] flex flex-col items-center'>
      <Hero />
      <WorkExperience />
      <Skillset />
      <Projects />
      <BlogSection />
      <ContactSection />
    </main>
    <Footer />
  </>);
}