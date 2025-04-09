import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageSquare } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface FloatingFormProps {
  content: {
    form: {
      name: string;
      email: string;
      message: string;
      placeholders: {
        name: string;
        email: string;
        message: string;
      };
      submit: string;
    };
  };
}

export const FloatingForm: React.FC<FloatingFormProps> = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    studyDestination: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            study_destination: formData.studyDestination,
            message: formData.message
          }
        ]);

      if (error) {
        throw error;
      }

      // Reset form and close
      setFormData({
        name: '',
        email: '',
        phone: '',
        studyDestination: '',
        message: ''
      });
      setIsOpen(false);
      alert('Message envoyé avec succès!');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Early return if content or content.form is undefined
  if (!content?.form) {
    return null;
  }

  return (
    <>
      <motion.button
        className="fixed bottom-8 right-8 bg-primary-600 text-white p-4 rounded-full shadow-lg hover:bg-primary-700 transition-colors z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
      >
        <MessageSquare className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-2xl p-6 z-50 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>

              <h3 className="text-2xl font-bold mb-6 text-gradient">Commencer Aujourd'hui</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {content.form.name}
                  </label>
                  <input
                    type="text"
                    required
                    className="input-style"
                    placeholder={content.form.placeholders.name}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {content.form.email}
                  </label>
                  <input
                    type="email"
                    required
                    className="input-style"
                    placeholder={content.form.placeholders.email}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Numéro de téléphone
                  </label>
                  <input
                    type="tel"
                    className="input-style"
                    placeholder="+33 6 12 34 56 78"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Destination d'études préférée
                  </label>
                  <select
                    className="input-style"
                    value={formData.studyDestination}
                    onChange={(e) => setFormData({ ...formData, studyDestination: e.target.value })}
                  >
                    <option value="">Sélectionnez une destination</option>
                    <option value="germany">Allemagne</option>
                    <option value="austria">Autriche</option>
                    <option value="switzerland">Suisse</option>
                    <option value="netherlands">Pays-Bas</option>
                    <option value="denmark">Danemark</option>
                    <option value="canada">Canada</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {content.form.message}
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="input-style"
                    placeholder={content.form.placeholders.message}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-500 text-white py-3 rounded-lg hover:from-primary-700 hover:to-primary-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
                >
                  {isSubmitting ? 'Envoi en cours...' : content.form.submit}
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};