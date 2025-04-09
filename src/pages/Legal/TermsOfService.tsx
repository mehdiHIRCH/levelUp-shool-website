import React from 'react';
import { motion } from 'framer-motion';

interface TermsOfServiceProps {
  content: any;
}

export const TermsOfService: React.FC<TermsOfServiceProps> = ({ content }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-8">{content?.title ?? 'Terms of Service'}</h1>
      
      <div className="bg-white shadow-lg rounded-lg p-8 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {content?.content?.intro?.title ?? 'Introduction'}
          </h2>
          <p className="text-gray-600">{content?.content?.intro?.text ?? ''}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {content?.content?.services?.title ?? 'Our Services'}
          </h2>
          <p className="text-gray-600 mb-4">{content?.content?.services?.intro ?? ''}</p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            {content?.content?.services?.items?.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            )) ?? []}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {content?.content?.responsibilities?.title ?? 'User Responsibilities'}
          </h2>
          <p className="text-gray-600 mb-4">{content?.content?.responsibilities?.intro ?? ''}</p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            {content?.content?.responsibilities?.items?.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            )) ?? []}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {content?.content?.payments?.title ?? 'Payments and Fees'}
          </h2>
          <p className="text-gray-600 mb-4">{content?.content?.payments?.intro ?? ''}</p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            {content?.content?.payments?.items?.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            )) ?? []}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {content?.content?.liability?.title ?? 'Limitation of Liability'}
          </h2>
          <p className="text-gray-600">{content?.content?.liability?.text ?? ''}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {content?.content?.termination?.title ?? 'Account Termination'}
          </h2>
          <p className="text-gray-600">{content?.content?.termination?.text ?? ''}</p>
        </section>
      </div>
    </motion.div>
  );
};