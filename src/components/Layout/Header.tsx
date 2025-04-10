import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { LOGO_URL } from '../../config/constants';

interface HeaderProps {
  content: any;
}

export const Header: React.FC<HeaderProps> = ({ content = { nav: {} } }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleNavClick = (sectionId: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false);
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="relative z-50 bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex-shrink-0">
            <img 
              src={LOGO_URL}
              alt="LevelUp Logo" 
              className="h-20 w-auto object-contain brightness-200"
            />
          </Link>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-200 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 text-sm font-medium">
              <button 
                onClick={() => handleNavClick('courses')}
                className="text-white hover:text-blue-200 transition-colors duration-200"
              >
                {content?.nav?.courses || 'Cours'}
              </button>
              <button 
                onClick={() => handleNavClick('about')}
                className="text-white hover:text-blue-200 transition-colors duration-200"
              >
                {content?.nav?.about || 'À propos'}
              </button>
              <button 
                onClick={() => handleNavClick('study-abroad')}
                className="text-white hover:text-blue-200 transition-colors duration-200"
              >
                {content?.nav?.studyAbroad || 'Études à l\'étranger'}
              </button>
              <button 
                onClick={() => handleNavClick('contact')}
                className="text-white hover:text-blue-200 transition-colors duration-200"
              >
                {content?.nav?.contact || 'Contact'}
              </button>
            </div>
            
            <Link 
              to="/register" 
              className="bg-white text-blue-600 hover:bg-blue-50 px-5 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 shadow-sm hover:shadow"
            >
              {content?.nav?.enroll || 'S\'inscrire'}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-700 rounded-b-lg">
          <button
            onClick={() => handleNavClick('courses')}
            className="block w-full text-left px-3 py-2 text-white hover:bg-blue-600 rounded-md"
          >
            {content?.nav?.courses || 'Cours'}
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="block w-full text-left px-3 py-2 text-white hover:bg-blue-600 rounded-md"
          >
            {content?.nav?.about || 'À propos'}
          </button>
          <button
            onClick={() => handleNavClick('study-abroad')}
            className="block w-full text-left px-3 py-2 text-white hover:bg-blue-600 rounded-md"
          >
            {content?.nav?.studyAbroad || 'Études à l\'étranger'}
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="block w-full text-left px-3 py-2 text-white hover:bg-blue-600 rounded-md"
          >
            {content?.nav?.contact || 'Contact'}
          </button>
          <Link
            to="/register"
            className="block w-full text-center px-3 py-2 bg-white text-blue-600 hover:bg-blue-50 rounded-md font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            {content?.nav?.enroll || 'S\'inscrire'}
          </Link>
        </div>
      </div>
    </nav>
  );
};