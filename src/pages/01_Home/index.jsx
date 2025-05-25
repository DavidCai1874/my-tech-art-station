import Banner from './1_banner';
import NavLinks from './2_nav_links';
import UpdatesSection from './3_website_updates';
import ContactSection from './4_submit_question';

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="w-full max-w-4xl mx-auto py-12">
        <NavLinks />
        <UpdatesSection />
        <ContactSection />
      </div>
    </div>
  );
}
