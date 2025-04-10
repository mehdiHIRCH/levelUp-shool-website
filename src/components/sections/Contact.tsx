import React, { useState } from 'react';
import { supabase } from '../../lib/supabase';

interface ContactContent {
  title: string;
  subtitle?: string;
  form: {
    name: string;
    email: string;
    message: string;
    submit: string;
    placeholders: {
      name: string;
      email: string;
      message: string;
    };
  };
}

export const Contact = ({ content }: { content: ContactContent }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  if (!content?.title || !content?.form) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const { error } = await supabase
        .from('messages')
        .insert([{
          name: formData.name,
          email: formData.email,
          message: formData.message
        }]);

      if (error) throw error;

      setFormData({ name: '', email: '', message: '' });
      setSubmitStatus('success');
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">{content.title}</h2>
            {content.subtitle && (
              <p className="text-gray-600">{content.subtitle}</p>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">{content.form.name}</label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg border focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
                placeholder={content.form.placeholders.name}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">{content.form.email}</label>
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg border focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
                placeholder={content.form.placeholders.email}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">{content.form.message}</label>
              <textarea 
                required
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg border focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 h-32"
                placeholder={content.form.placeholders.message}
              ></textarea>
            </div>
            
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-100 text-green-700 rounded-lg">
                Message envoyé avec succès!
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-100 text-red-700 rounded-lg">
                Une erreur est survenue. Veuillez réessayer.
              </div>
            )}

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Envoi en cours...' : content.form.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};