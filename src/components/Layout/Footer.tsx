import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LOGO_URL, CONTACT_INFO } from '../../config/constants';

export const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (sectionId: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div>
            <div className="h-20 sm:h-24 mb-6">
              <img 
                src={LOGO_URL}
                alt="LevelUp Logo" 
                className="h-full w-auto object-contain brightness-200"
              />
            </div>
            <p className="text-gray-400">
              Votre partenaire de confiance pour l'éducation en langue allemande et les services d'études à l'étranger.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNavClick('about')}
                  className="text-gray-400 hover:text-white transition"
                >
                  À propos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('courses')}
                  className="text-gray-400 hover:text-white transition"
                >
                  Cours
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('study-abroad')}
                  className="text-gray-400 hover:text-white transition"
                >
                  Études à l'étranger
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('contact')}
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Mentions Légales</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/legal/privacy-policy" className="text-gray-400 hover:text-white transition">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link to="/legal/terms-of-service" className="text-gray-400 hover:text-white transition">
                  Conditions d'utilisation
                </Link>
              </li>
              <li>
                <Link to="/legal/cookie-policy" className="text-gray-400 hover:text-white transition">
                  Politique des cookies
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>{CONTACT_INFO.email}</li>
              {CONTACT_INFO.locations.map((location, index) => (
                <li key={index}>{location.phone}</li>
              ))}
              <li className="mt-4">
                <p className="font-medium">Horaires d'ouverture :</p>
                <p>Lun-Ven : {CONTACT_INFO.hours.weekdays}</p>
                <p>Sam : {CONTACT_INFO.hours.saturday}</p>
                <p>Dim : {CONTACT_INFO.hours.sunday}</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} LevelUp. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};