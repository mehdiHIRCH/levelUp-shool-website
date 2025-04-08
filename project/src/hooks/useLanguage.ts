import { useState, useCallback } from 'react';
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from '../config/constants';

export const useLanguage = () => {
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);

  const changeLanguage = useCallback((lang: string) => {
    if (SUPPORTED_LANGUAGES.some(l => l.code === lang)) {
      setLanguage(lang);
      document.documentElement.dir = SUPPORTED_LANGUAGES.find(l => l.code === lang)?.direction || 'ltr';
    }
  }, []);

  return {
    language,
    changeLanguage,
    direction: 'ltr'
  };
};