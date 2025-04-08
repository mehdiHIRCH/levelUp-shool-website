import React from 'react';

interface TermsOfServiceProps {
  t: (key: string) => any;
}

export const TermsOfService: React.FC<TermsOfServiceProps> = ({ t }) => {
  const content = t('legal.termsOfService') || {};

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">{content?.title}</h1>
        
        <div className="bg-white shadow-lg rounded-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{content?.content?.intro?.title}</h2>
            <p className="text-gray-600">
              {content?.content?.intro?.text}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{content?.content?.services?.title}</h2>
            <p className="text-gray-600 mb-4">{content?.content?.services?.intro}</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              {content?.content?.services?.items?.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{content?.content?.responsibilities?.title}</h2>
            <p className="text-gray-600 mb-4">{content?.content?.responsibilities?.intro}</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              {content?.content?.responsibilities?.items?.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{content?.content?.payments?.title}</h2>
            <p className="text-gray-600 mb-4">{content?.content?.payments?.intro}</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              {content?.content?.payments?.items?.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{content?.content?.liability?.title}</h2>
            <p className="text-gray-600">
              {content?.content?.liability?.text}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{content?.content?.termination?.title}</h2>
            <p className="text-gray-600">
              {content?.content?.termination?.text}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};