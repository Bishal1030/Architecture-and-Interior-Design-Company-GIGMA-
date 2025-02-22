import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 ${isScrolled ? 'bg-primary bg-opacity-30 backdrop-filter backdrop-blur-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white text-2xl font-bold">
              ArchiVista
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-gray-300">HOME</Link>
              <Link to="/features" className="text-white hover:text-gray-300">FEATURES</Link>
              <Link to="/portfolios" className="text-white hover:text-gray-300">PORTFOLIOS</Link>
              <Link to="/blog" className="text-white hover:text-gray-300">BLOG</Link>
              <Link to="/about" className="text-white hover:text-gray-300">ABOUT US</Link> 
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-white hover:text-gray-300"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block text-white hover:text-gray-300 px-3 py-2">HOME</Link>
            <Link to="/features" className="block text-white hover:text-gray-300 px-3 py-2">FEATURES</Link>
            <Link to="/portfolios" className="block text-white hover:text-gray-300 px-3 py-2">PORTFOLIOS</Link>
            <Link to="/blog" className="block text-white hover:text-gray-300 px-3 py-2">BLOG</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;