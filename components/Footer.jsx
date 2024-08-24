import Image from "next/image";
import Logo from "/assets/images/logo.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 py-4 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="mb-4 md:mb-0">
          <Image src={Logo} alt="Logo" className="h-8 w-auto" />
        </div>
        <div className="flex flex-wrap justify-center md:justify-start mb-4 md:mb-0">
          <ul className="flex space-x-4 gap-6">
            <li>
              <a href="/properties.html">املاک</a>
            </li>
            <li>
              <a href="/terms.html">شرایط و خدمات</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm text-gray-500 mt-2 md:mt-0">
            &copy; تمامی حقوق محفوظ است. املاک آسمان {currentYear}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
