import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Users } from 'lucide-react';
import { cn } from '../utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' : 'bg-white/80 backdrop-blur-md py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-primary-600 text-white rounded-lg p-1.5 group-hover:bg-primary-700 transition-colors">
              <Users size={24} />
            </div>
            <span className="font-bold text-2xl text-primary-950 tracking-tight">AstranovaHR</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary-600',
                  location.pathname === item.href ? 'text-primary-600' : 'text-slate-600'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:block">
            <Link to="/contact" className="bg-primary-600 text-white px-5 py-2.5 rounded-md font-medium text-sm hover:bg-primary-700 transition-colors shadow-sm">
              Get Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-600 hover:text-primary-600 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full rounded-b-xl overflow-hidden border-t border-slate-100">
          <div className="px-4 py-4 flex flex-col space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'block px-4 py-3 rounded-md text-base font-medium transition-colors',
                  location.pathname === item.href ? 'bg-primary-50 text-primary-600' : 'text-slate-700 hover:bg-slate-50'
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block mt-4 text-center bg-primary-600 text-white px-4 py-3 rounded-md text-base font-medium"
            >
              Get Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
