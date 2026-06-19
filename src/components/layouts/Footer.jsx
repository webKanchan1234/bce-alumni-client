import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-16">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10">

          <div>
            <h2 className="text-2xl font-bold">
              BCE Alumni
            </h2>

            <p className="mt-4 text-gray-400">
              Connecting alumni worldwide.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>Home</li>
              <li>About</li>
              <li>Events</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">
              Resources
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>Jobs</li>
              <li>Mentorship</li>
              <li>Gallery</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">
              Follow Us
            </h3>

            <div className="flex gap-4 text-2xl">
              <FaLinkedin />
              <FaFacebook />
              <FaGithub />
            </div>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-gray-500">
          © 2026 BCE Alumni Association
        </div>

      </div>

    </footer>
  );
};

export default Footer;