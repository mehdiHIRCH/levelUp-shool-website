// import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Globe, Users, Award } from 'lucide-react';

interface AboutContent {
  title: string;
  subtitle: string;
  description: string;
  features: Array<{
    title: string;
    description: string;
  }>;
}

export const About = ({ content }: { content: AboutContent }) => {
  // Return null if no content is provided
  if (!content) return null;

  // Ensure features exists and is an array, otherwise use empty array
  const features = Array.isArray(content.features) ? content.features : [];

  return (
    <section className="py-16 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-4"
            >
              {content.title || ''}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-lg mb-8"
            >
              {content.subtitle || ''}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-700 max-w-3xl mx-auto"
            >
              {content.description || ''}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">
                  {index === 0 && <GraduationCap className="w-8 h-8 text-blue-600" />}
                  {index === 1 && <Globe className="w-8 h-8 text-blue-600" />}
                  {index === 2 && <Users className="w-8 h-8 text-blue-600" />}
                  {index === 3 && <Award className="w-8 h-8 text-blue-600" />}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title || ''}</h3>
                <p className="text-gray-600">{feature.description || ''}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};