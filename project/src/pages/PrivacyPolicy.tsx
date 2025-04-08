import React from 'react';

interface PrivacyPolicyProps {
  t: (key: string) => any;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ t }) => {
  const content = t('legal.privacyPolicy') || {};
  const policyContent = content?.content || {};

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">{content?.title || 'Privacy Policy'}</h1>
        
        <div className="bg-white shadow-lg rounded-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{policyContent?.intro?.title || 'Introduction'}</h2>
            <p className="text-gray-600">
              {policyContent?.intro?.text || ''}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{policyContent?.dataCollection?.title || 'Data Collection'}</h2>
            <p className="text-gray-600 mb-4">{policyContent?.dataCollection?.intro || ''}</p>
            {policyContent?.dataCollection?.items?.length > 0 && (
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                {policyContent.dataCollection.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{policyContent?.dataUse?.title || 'Data Use'}</h2>
            <p className="text-gray-600 mb-4">{policyContent?.dataUse?.intro || ''}</p>
            {policyContent?.dataUse?.items?.length > 0 && (
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                {policyContent.dataUse.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{policyContent?.dataSecurity?.title || 'Data Security'}</h2>
            <p className="text-gray-600">
              {policyContent?.dataSecurity?.text || ''}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{policyContent?.rights?.title || 'Your Rights'}</h2>
            <p className="text-gray-600 mb-4">{policyContent?.rights?.intro || ''}</p>
            {policyContent?.rights?.items?.length > 0 && (
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                {policyContent.rights.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{policyContent?.cookies?.title || 'Cookies'}</h2>
            <p className="text-gray-600">
              {policyContent?.cookies?.text || ''}{' '}
              <a href="/cookie-policy" className="text-blue-600 hover:text-blue-800">
                {policyContent?.cookies?.link || 'Cookie Policy'}
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};