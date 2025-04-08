import { Language } from '../types';

export const SUPPORTED_LANGUAGES: Language[] = [
  { code: 'fr', name: 'Français', direction: 'ltr' }
];

export const DEFAULT_LANGUAGE = 'fr';

export const CONTACT_INFO = {
  email: 'schoollevelup20@gmail.com',
  locations: [
    {
      city: 'Casablanca',
      address: 'Rue Anwal, près de l\'intersection avec la rue Abdelmoumen, 4ème étage, Bureau 8',
      phone: '+212 6 75 79 71 60'
    },
    {
      city: 'Khouribga',
      address: 'Rue Marrakech, au dessus du Centre d\'analyse Ibn Sina, troisième étage',
      phone: '+212 6 14 76 26 69'
    }
  ],
  hours: {
    weekdays: '8:00 - 20:00',
    saturday: '9:00 - 17:00',
    sunday: 'Fermé'
  }
};

export const HERO_IMAGE = 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80';

export const LOGO_URL = 'https://raw.githubusercontent.com/mehdiHIRCH/level-up-school/main/levelup%20logo(1).png';