import { useState, useEffect } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    // 1) Main footer container with extra decorative styles
    <footer className="relative bg-primary text-white shadow-2xl overflow-hidden">
      {/* 2) Subtle gradient overlay filling the entire footer */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-gray-900 opacity-90"></div>

      {/* 3) Wave shape at the top (rotated 180°) */}
      <div className="absolute top-0 left-0 w-full rotate-180 overflow-hidden leading-none text-gray-100 opacity-20">
        <svg
          className="relative block h-[80px] w-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M321.39,56.81C381.71,37.75,441.55,1.64,501.81,0C587.5,0,673.28,42.54,759,45.79
               C837.53,48.66,917.31,20.36,995.78,14.24C1042.85,10.29,1089.64,16.75,1136.54,25.55
               C1155.83,29.09,1175.37,34,1194,39.66V120H0V0C47.6,25.25,99.31,50.59,148.49,47.24
               C191.69,44.34,232.91,26.95,275.1,16.75C295.86,11.71,318.52,8.29,321.39,56.81Z"
          />
        </svg>
      </div>

      {/* 4) Wave shape at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none text-gray-100 opacity-20">
        <svg
          className="relative block h-[80px] w-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M321.39,56.81C381.71,37.75,441.55,1.64,501.81,0C587.5,0,673.28,42.54,759,45.79
               C837.53,48.66,917.31,20.36,995.78,14.24C1042.85,10.29,1089.64,16.75,1136.54,25.55
               C1155.83,29.09,1175.37,34,1194,39.66V120H0V0C47.6,25.25,99.31,50.59,148.49,47.24
               C191.69,44.34,232.91,26.95,275.1,16.75C295.86,11.71,318.52,8.29,321.39,56.81Z"
          />
        </svg>
      </div>

      {/* 5) Original Footer Content (unchanged) */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">ArchiVista</h3>
              <p className="text-gray-300">
                Creating beautiful spaces for beautiful lives.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="hover:text-gray-300">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-gray-300">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/projects" className="hover:text-gray-300">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-gray-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-300">
                <li>123 Design Street</li>
                <li>New York, NY 10001</li>
                <li>Phone: (555) 123-4567</li>
                <li>Email: info@archivista.com</li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300">
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-gray-300">
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-gray-300">
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-gray-300">
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 8a6 6 0 00-6 6v6h-4v-6a6 6 0 00-6-6H0v-4h4a6 6 0 006-6V0h4v4a6 6 0 006 6h4v4h-4z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-300">
            <p>&copy; 2024 ArchiVista. All rights reserved.</p>
          </div>
        </div>

        {isVisible && (
          <div className="fixed bottom-4 right-4">
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-gray-700 text-white hover:bg-gray-600 
                         focus:outline-none focus:ring-2 focus:ring-gray-500 
                         shadow-md hover:shadow-xl transition-shadow duration-300 
                         transform hover:-translate-y-1"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
