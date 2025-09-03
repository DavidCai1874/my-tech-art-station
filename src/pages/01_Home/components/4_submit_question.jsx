import { Link } from 'react-router-dom';

export default function ContactSection() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <p>
        Have suggestions or want to report an issue? Please reach out to me on the&nbsp;
        <Link
          to="about"
          className="text-blue-600 hover:text-blue-800 font-semibold"
        >
          About
        </Link>
        &nbsp;page!
      </p>
    </section>
  );
}