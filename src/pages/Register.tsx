import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { RegisterForm } from '../components/RegisterForm';
import { motion } from 'framer-motion';

interface RegisterProps {
  t: (key: string) => any;
}

export const Register: React.FC<RegisterProps> = ({ t }) => {
  const [searchParams] = useSearchParams();
  const selectedCountry = searchParams.get('country');

  const germanCourseContent = {
    form: {
      firstName: t('enrollment.form.firstName'),
      lastName: t('enrollment.form.lastName'),
      email: t('enrollment.form.email'),
      phone: t('enrollment.form.phone'),
      currentLevel: t('enrollment.form.currentLevel'),
      studyGoal: t('enrollment.form.studyGoal'),
      submit: t('enrollment.form.submit'),
      placeholders: {
        firstName: t('enrollment.form.placeholders.firstName'),
        lastName: t('enrollment.form.placeholders.lastName'),
        email: t('enrollment.form.placeholders.email'),
        phone: t('enrollment.form.placeholders.phone'),
        studyGoal: t('enrollment.form.placeholders.studyGoal')
      },
      levels: t('enrollment.form.levels')
    }
  };

  const studyAbroadContent = {
    form: {
      firstName: 'Prénom',
      lastName: 'Nom',
      email: 'Email',
      phone: 'Téléphone',
      country: 'Pays d\'études souhaité',
      message: 'Message',
      submit: 'Envoyer',
      placeholders: {
        firstName: 'Votre prénom',
        lastName: 'Votre nom',
        email: 'votre@email.com',
        phone: '+33 6 12 34 56 78',
        message: 'Parlez-nous de vos objectifs d\'études et de vos questions'
      },
      countries: t('studyAbroad.destinations')
    }
  };

  const handleRegistration = async (data: any) => {
    console.log('Registration data:', data);
    alert(t('enrollment.success'));
  };

  const isStudyAbroad = !!selectedCountry;

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-xl shadow-lg"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              {isStudyAbroad ? 'Inscription pour études à l\'étranger' : t('enrollment.title')}
            </h1>
            <p className="mt-2 text-gray-600">
              {isStudyAbroad ? 'Commencez votre voyage vers l\'international' : t('enrollment.subtitle')}
            </p>
          </div>

          <RegisterForm 
            onSubmit={handleRegistration} 
            content={isStudyAbroad ? studyAbroadContent : germanCourseContent}
            selectedCountry={selectedCountry}
            isStudyAbroad={isStudyAbroad}
          />
        </motion.div>
      </div>
    </div>
  );
};