import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';

const moroccanPhoneRegex = /^(?:\+212|0)(?:[ \-]?[5-7])(?:[ \-]?\d{2}){4}$/;

const germanCourseSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(moroccanPhoneRegex, 'Veuillez entrer un numéro de téléphone marocain valide'),
  currentLevel: z.enum(['none', 'a1', 'a2', 'b1', 'b2', 'c1', 'c2']),
  studyGoal: z.string().min(10, 'Please provide more details about your study goals')
});

const studyAbroadSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(moroccanPhoneRegex, 'Veuillez entrer un numéro de téléphone marocain valide'),
  country: z.string().min(1, 'Please select a country'),
  message: z.string().min(10, 'Please provide more details about your study goals')
});

type GermanCourseData = z.infer<typeof germanCourseSchema>;
type StudyAbroadData = z.infer<typeof studyAbroadSchema>;

interface RegisterFormProps {
  onSubmit: (data: GermanCourseData | StudyAbroadData) => void;
  content: {
    form: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      currentLevel?: string;
      studyGoal?: string;
      country?: string;
      message?: string;
      submit: string;
      placeholders: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        studyGoal?: string;
        message?: string;
      };
      levels?: {
        [key: string]: string;
      };
      countries?: {
        [key: string]: any;
      };
    };
  };
  selectedCountry?: string | null;
  isStudyAbroad?: boolean;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
  onSubmit,
  content,
  selectedCountry,
  isStudyAbroad = false
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue
  } = useForm<GermanCourseData | StudyAbroadData>({
    resolver: zodResolver(isStudyAbroad ? studyAbroadSchema : germanCourseSchema),
    defaultValues: isStudyAbroad
      ? ({ country: selectedCountry || '' } as StudyAbroadData)
      : undefined
  });

  React.useEffect(() => {
    if (isStudyAbroad && selectedCountry) {
      setValue('country', selectedCountry);
    }
  }, [selectedCountry, setValue, isStudyAbroad]);

  const handleFormSubmit = async (data: GermanCourseData | StudyAbroadData) => {
    try {
      if (isStudyAbroad) {
        const { error } = await supabase
          .from('study_abroad_registrations')
          .insert([{
            first_name: data.firstName,
            last_name: data.lastName,
            email: data.email,
            phone: data.phone,
            country: (data as StudyAbroadData).country,
            message: (data as StudyAbroadData).message
          }]);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('inscription')
          .insert([{
            first_name: data.firstName,
            last_name: data.lastName,
            email: data.email,
            phone: data.phone,
            current_level: (data as GermanCourseData).currentLevel,
            study_goal: (data as GermanCourseData).studyGoal,
            type: 'german_course'
          }]);
        if (error) throw error;
      }

      onSubmit(data);
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  if (!content?.form) return null;

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">{content.form.firstName}</label>
          <input
            type="text"
            {...register('firstName')}
            placeholder={content.form.placeholders.firstName}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {'firstName' in errors && (
            <p className="mt-1 text-sm text-red-600">{errors.firstName?.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">{content.form.lastName}</label>
          <input
            type="text"
            {...register('lastName')}
            placeholder={content.form.placeholders.lastName}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {'lastName' in errors && (
            <p className="mt-1 text-sm text-red-600">{errors.lastName?.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">{content.form.email}</label>
        <input
          type="email"
          {...register('email')}
          placeholder={content.form.placeholders.email}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {'email' in errors && (
          <p className="mt-1 text-sm text-red-600">{errors.email?.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">{content.form.phone}</label>
        <input
          type="tel"
          {...register('phone')}
          placeholder="+212 6 XX XX XX XX"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {'phone' in errors && (
          <p className="mt-1 text-sm text-red-600">{errors.phone?.message}</p>
        )}
        <p className="mt-1 text-xs text-gray-500">Format: +212 6XX XX XX XX ou 06XX XX XX XX</p>
      </div>

      {isStudyAbroad ? (
        <>
          <div>
            <label className="block text-sm font-medium text-gray-700">{content.form.country}</label>
            <select
              {...register('country')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              disabled={!!selectedCountry}
            >
              <option value="">Sélectionnez un pays</option>
              {Object.entries(content.form.countries || {}).map(([key, value]) => (
                <option key={key} value={key}>{value.title}</option>
              ))}
            </select>
            {'country' in errors && (
              <p className="mt-1 text-sm text-red-600">{errors.country?.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">{content.form.message}</label>
            <textarea
              {...register('message')}
              rows={4}
              placeholder={content.form.placeholders.message}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {'message' in errors && (
              <p className="mt-1 text-sm text-red-600">{errors.message?.message}</p>
            )}
          </div>
        </>
      ) : (
        <>
          <div>
            <label className="block text-sm font-medium text-gray-700">{content.form.currentLevel}</label>
            <select
              {...register('currentLevel')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              {Object.entries(content.form.levels || {}).map(([key, value]) => (
                <option key={key} value={key}>{value}</option>
              ))}
            </select>
            {'currentLevel' in errors && (
              <p className="mt-1 text-sm text-red-600">{errors.currentLevel?.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">{content.form.studyGoal}</label>
            <textarea
              {...register('studyGoal')}
              rows={4}
              placeholder={content.form.placeholders.studyGoal}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {'studyGoal' in errors && (
              <p className="mt-1 text-sm text-red-600">{errors.studyGoal?.message}</p>
            )}
          </div>
        </>
      )}

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium disabled:opacity-50"
      >
        {isSubmitting ? 'Envoi en cours...' : content.form.submit}
      </motion.button>
    </form>
  );
};
