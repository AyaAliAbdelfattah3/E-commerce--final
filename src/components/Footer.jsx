import { BG } from "../assets";
import {
  BsFacebook,
  BsInstagram,
  BsTiktok,
  BsEnvelope,
  BsPhone,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = [
    { name: "Shipping Policy", path: "/ship" },
    { name: "Returns & Refunds", path: "/return" },
    { name: "FAQs", path: "/faq" },
  ];

  const footerLinks2 = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];
  return (
    <footer
      className="bg-cover bg-center bg-no-repeat relative overflow-hidden "
      style={{ backgroundImage: `url(${BG})` }}
    >
      {/* Overlay layers */}
      <div className="absolute inset-0 bg-[#1a0b2e]/80 dark:bg-[#0f051a]/100 backdrop-blur-md z-0 transition-all duration-500"></div>

      <div className="container mx-auto relative z-10 py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* 1. logo Section */}
          <div className="space-y-6">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#c568d3] to-[#600886] text-4xl font-bold italic dark:text-[#8a46b1]">
              AyaShop
            </h1>
            <p className="text-gray-300 font-serif text-md leading-relaxed">
              Your ultimate destination for modern elegance and smart
              technology. We bring quality to your doorstep.
            </p>
            <ul className="flex gap-4 mt-6">
              {[BsInstagram, BsFacebook, BsTiktok].map((Icon, index) => (
                <li
                  key={index}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:text-white hover:bg-[#ab0286] hover:-translate-y-1 transition-all duration-300 cursor-pointer dark:hover:bg-purple-900"
                >
                  <Icon size={20} />
                </li>
              ))}
            </ul>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6 border-b-2 border-[#ab0286] w-fit pb-1 dark:border-purple-900">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {footerLinks2.map((item) => (
                <Link
                  to={item.path}
                  key={item.path}
                  className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ab0286] opacity-0 group-hover:opacity-100 transition-opacity dark:bg-purple-900"></span>
                  {item.name}
                </Link>
              ))}
            </ul>
          </div>

          {/* 3. Support Section ) */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6 border-b-2 border-[#ab0286] w-fit pb-1 dark:border-purple-900">
              Support
            </h3>
            <ul className="space-y-4">
              {footerLinks.map((linkk) => (
                <Link
                  to={linkk.path}
                  key={linkk.path}
                  className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ab0286] opacity-0 group-hover:opacity-100 transition-opacity dark:bg-purple-900"></span>
                  {linkk.name}
                </Link>
              ))}
            </ul>
          </div>

          {/* 4. Contact & Newsletter */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6 border-b-2 border-[#ab0286] w-fit pb-1 dark:border-purple-900">
              Stay Updated
            </h3>
            <div className="relative group">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-[#ab0286] transition-all dark:focus:border-purple-900"
              />
              <Link to="/contact">
                <button className="mt-3 w-full bg-[#ab0286] hover:bg-[#600886] text-white py-3 rounded-lg font-bold transition-all duration-300 shadow-lg shadow-[#ab0286]/20 dark:bg-purple-950 dark:hover:bg-black dark:shadow-purple-800/20">
                  Subscribe Now
                </button>
              </Link>
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <div className="flex items-center gap-3 text-gray-400">
                <BsPhone className="text-[#ab0286] dark:text-purple-900" />
                <span>+123 456 789</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <BsEnvelope className="text-[#ab0286] dark:text-purple-900" />
                <span>support@ayashop.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="text-white">AyaShop</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
