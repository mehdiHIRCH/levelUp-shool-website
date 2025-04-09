import { useCallback } from 'react';
import { translations, Language } from '../config/translations';

export const useTranslation = (language: Language) => {
  const t = useCallback((key: string) => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return value;
  }, [language]);

  return { t };
};