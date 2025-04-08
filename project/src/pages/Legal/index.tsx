import React from 'react';
import { useParams } from 'react-router-dom';
import { PrivacyPolicy } from './PrivacyPolicy';
import { TermsOfService } from './TermsOfService';
import { CookiePolicy } from './CookiePolicy';

interface LegalProps {
  t: (key: string) => any;
}

export const Legal: React.FC<LegalProps> = ({ t }) => {
  const { page } = useParams();

  const renderPage = () => {
    switch (page) {
      case 'privacy-policy':
        return <PrivacyPolicy content={t('legal.privacyPolicy')} />;
      case 'terms-of-service':
        return <TermsOfService content={t('legal.termsOfService')} />;
      case 'cookie-policy':
        return <CookiePolicy content={t('legal.cookiePolicy')} />;
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {renderPage()}
      </div>
    </div>
  );
};