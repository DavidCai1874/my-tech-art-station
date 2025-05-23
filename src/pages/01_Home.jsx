import Banner from './01_Home/1_banner';
import NavLinks from './01_Home/2_nav_links';
import UpdatesSection from './01_Home/3_website_updates';
import ContactSection from './01_Home/4_submit_question';

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
