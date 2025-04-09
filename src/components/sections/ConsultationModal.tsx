import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../../config/constants';
import { supabase } from '../../lib/supabase';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [mode, setMode] = useState<'call' | 'callback' | null>(null);
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const { error: supabaseError } = await supabase
        .from('consultation_requests')
        .insert([{ phone }]);

      if (supabaseError) throw supabaseError;

      setSubmitted(true);
      setPhone('');
    } catch (err) {
      console.error('Error submitting consultation request:', err);
      setError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    onClose();
    // Reset state when modal is closed
    setMode(null);
    setSubmitted(false);
    setError(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={handleClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-2xl p-6 z-50"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-2xl font-bold mb-6">Consultation Gratuite</h3>

            {!mode ? (
              <div className="space-y-4">
                <button
                  onClick={() => setMode('call')}
                  className="w-full p-4 text-left bg-gray-50 rounded-lg hover:bg-gray-100 transition flex items-center gap-3"
                >
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span>Appeler maintenant</span>
                </button>
                <button
                  onClick={() => setMode('callback')}
                  className="w-full p-4 text-left bg-gray-50 rounded-lg hover:bg-gray-100 transition flex items-center gap-3"
                >
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span>Être rappelé</span>
                </button>
              </div>
            ) : mode === 'call' ? (
              <div className="space-y-4">
                <p className="text-gray-600 mb-4">Nos conseillers sont disponibles pour vous aider :</p>
                <div className="space-y-3">
                  {CONTACT_INFO.locations.map((location, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <p className="font-medium">{location.city}</p>
                      <a 
                        href={`tel:${location.phone}`} 
                        className="text-blue-600 hover:text-blue-800 transition"
                      >
                        {location.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ) : submitted ? (
              <div className="text-center py-4">
                <p className="text-green-600 font-medium">
                  Merci ! Nous vous rappellerons bientôt.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Votre numéro de téléphone
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+212 6 XX XX XX XX"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Format: +212 6XX XX XX XX ou 06XX XX XX XX
                  </p>
                </div>

                {error && (
                  <p className="text-red-600 text-sm">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Demander un rappel'}
                </button>
              </form>
            )}

            {mode && (
              <button
                onClick={() => setMode(null)}
                className="mt-4 text-gray-600 hover:text-gray-800 transition"
              >
                Retour
              </button>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};