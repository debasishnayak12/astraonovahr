import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <img src="/logo_footer.png" alt="AstranovaHR Logo" className="h-20 md:h-24 w-auto mb-6 bg-white rounded-lg p-2 object-contain" />
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              End-to-end HR solutions empowering Indian businesses with efficient workforce management and comprehensive compliance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Globe size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services" className="hover:text-primary-400 transition-colors">Recruitment</Link></li>
              <li><Link to="/services" className="hover:text-primary-400 transition-colors">Payroll Outsourcing</Link></li>
              <li><Link to="/services" className="hover:text-primary-400 transition-colors">Workforce Solutions</Link></li>
              <li><Link to="/services" className="hover:text-primary-400 transition-colors">Legal & Compliance</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary-400 transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-primary-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-primary-500 shrink-0 mt-0.5" />
                <span>Level 4, Corporate Park,<br />Mumbai, Maharashtra 400051</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-primary-500 shrink-0" />
                <span>+91 22 1234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-primary-500 shrink-0" />
                <span>contact@astranovahr.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} AstranovaHR. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
