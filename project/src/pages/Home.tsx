import React from 'react';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Stats } from '../components/sections/Stats';
import { Courses } from '../components/sections/Courses';
import { StudyAbroad } from '../components/sections/StudyAbroad';
import { Contact } from '../components/sections/Contact';
import { FloatingForm } from '../components/FloatingForm';

interface HomeProps {
  t: (key: string) => any;
}

export const Home: React.FC<HomeProps> = ({ t }) => {
  const formContent = t('contact.form') || {
    form: {
      name: 'Nom',
      email: 'Email',
      message: 'Message',
      placeholders: {
        name: 'Votre nom',
        email: 'Votre email',
        message: 'Votre message'
      },
      submit: 'Envoyer'
    }
  };

  return (
    <main>
      <FloatingForm content={formContent} />
      <Hero content={t('hero')} />
      <About content={t('about')} />
      <Stats content={t('stats')} />
      <Courses content={t('courses')} />
      <StudyAbroad content={t('studyAbroad')} />
      <Contact content={t('contact')} />
    </main>
  );
};