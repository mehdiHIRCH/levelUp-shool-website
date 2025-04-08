import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LOGO_URL } from '../../config/constants';

interface HeaderProps {
  content: any;
}

export const Header: React.FC<HeaderProps> = ({ content = { nav: {} } }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (sectionId: string) => {
    if (location.pathname === '/') {
      // If we're on the home page, scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, navigate to home and then scroll
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  return (
    <nav className="relative z-10 flex justify-between items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg">
      <Link to="/" className="h-24 w-auto">
        <img 
          src={LOGO_URL}
          alt="LevelUp Logo" 
          className="h-full w-auto object-contain brightness-200"
        />
      </Link>
      
      <div className="flex items-center gap-8">
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
    </nav>
  );
};