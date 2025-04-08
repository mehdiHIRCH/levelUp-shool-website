import React from 'react';

interface CookiePolicyProps {
  t: (key: string) => any;
}

export const CookiePolicy: React.FC<CookiePolicyProps> = ({ t }) => {
  const content = t('legal.cookiePolicy');

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">{content?.title}</h1>
        
        <div className="bg-white shadow-lg rounded-lg p-8 space-y-6">
          {content?.content?.intro && (
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{content.content.intro.title}</h2>
              <p className="text-gray-600">
                {content.content.intro.text}
              </p>
            </section>
          )}

          {content?.content?.types?.items && (
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{content.content.types.title}</h2>
              <div className="space-y-4">
                {content.content.types.items.map((item: any, index: number) => (
                  <div key={index}>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {content?.content?.purposes?.items && (
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{content.content.purposes.title}</h2>
              <p className="text-gray-600 mb-4">{content.content.purposes.intro}</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                {content.content.purposes.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {content?.content?.management?.items && (
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{content.content.management.title}</h2>
              <p className="text-gray-600 mb-4">{content.content.management.intro}</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                {content.content.management.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {content?.content?.thirdParty && (
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{content.content.thirdParty.title}</h2>
              <p className="text-gray-600">
                {content.content.thirdParty.text}
              </p>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};