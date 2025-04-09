import React from 'react';
import { motion } from 'framer-motion';

interface CookiePolicyProps {
  content: any;
}

export const CookiePolicy: React.FC<CookiePolicyProps> = ({ content }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-8">{content?.title ?? 'Cookie Policy'}</h1>
      
      <div className="bg-white shadow-lg rounded-lg p-8 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {content?.content?.intro?.title ?? 'Introduction'}
          </h2>
          <p className="text-gray-600">{content?.content?.intro?.text ?? ''}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {content?.content?.types?.title ?? 'Types of Cookies'}
          </h2>
          <div className="space-y-6">
            {content?.content?.types?.items?.map((item: any, index: number) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-2">{item?.title ?? ''}</h3>
                <p className="text-gray-600">{item?.description ?? ''}</p>
              </div>
            )) ?? []}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {content?.content?.purposes?.title ?? 'How We Use Cookies'}
          </h2>
          <p className="text-gray-600 mb-4">{content?.content?.purposes?.intro ?? ''}</p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            {content?.content?.purposes?.items?.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            )) ?? []}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {content?.content?.management?.title ?? 'Managing Cookies'}
          </h2>
          <p className="text-gray-600 mb-4">{content?.content?.management?.intro ?? ''}</p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            {content?.content?.management?.items?.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            )) ?? []}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {content?.content?.thirdParty?.title ?? 'Third-Party Cookies'}
          </h2>
          <p className="text-gray-600">{content?.content?.thirdParty?.text ?? ''}</p>
        </section>
      </div>
    </motion.div>
  );
};