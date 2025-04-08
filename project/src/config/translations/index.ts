import { fr } from './fr';

export const translations = {
  fr
} as const;

export type Language = keyof typeof translations;