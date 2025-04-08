import React from 'react';
import { motion } from 'framer-motion';

interface PrivacyPolicyProps {
  content: any;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ content }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-8">{content?.title}</h1>
      
      <div className="bg-white shadow-lg rounded-lg p-8 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">{content?.content?.intro?.title}</h2>
          <p className="text-gray-600">{content?.content?.intro?.text}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">{content?.content?.dataCollection?.title}</h2>
          <p className="text-gray-600 mb-4">{content?.content?.dataCollection?.intro}</p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            {content?.content?.dataCollection?.items?.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">{content?.content?.dataUse?.title}</h2>
          <p className="text-gray-600 mb-4">{content?.content?.dataUse?.intro}</p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            {content?.content?.dataUse?.items?.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">{content?.content?.dataSecurity?.title}</h2>
          <p className="text-gray-600">{content?.content?.dataSecurity?.text}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">{content?.content?.rights?.title}</h2>
          <p className="text-gray-600 mb-4">{content?.content?.rights?.intro}</p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            {content?.content?.rights?.items?.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </motion.div>
  );
};