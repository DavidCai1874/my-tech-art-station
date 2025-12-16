import Banner from './components/1_banner';
import NavLinks from './components/2_nav_links';
import ContactSection from './components/3_submit_question';

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="w-full max-w-4xl mx-auto py-12">
        <NavLinks />
        <ContactSection />
      </div>
    </div>
  );
}