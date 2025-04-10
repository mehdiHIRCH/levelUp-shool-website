// import React from 'react';
import { Card } from '../Card';
import { useNavigate } from 'react-router-dom';

interface Destination {
  title: string;
  description: string;
  features: string[];
  flag: string;
}

interface StudyAbroadContent {
  title: string;
  subtitle: string;
  destinations: {
    [key: string]: Destination;
  };
  features: {
    [key: string]: {
      title: string;
      description: string;
    };
  };
}

export const StudyAbroad = ({ content }: { content: StudyAbroadContent }) => {
  const navigate = useNavigate();

  if (!content?.destinations || !content?.features) {
    return null;
  }

  const handleCountryClick = (countryKey: string) => {
    navigate(`/register?country=${countryKey}`);
  };

  return (
    <section className="py-16 bg-gray-50" id="study-abroad">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{content.title}</h2>
            <p className="text-base sm:text-lg text-gray-600">{content.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {Object.entries(content.destinations).map(([key, destination]) => (
              <div 
                key={key} 
                onClick={() => handleCountryClick(key)}
                className="cursor-pointer"
              >
                <Card className="h-full flex flex-col relative overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
                  <div 
                    className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300 bg-contain bg-center bg-no-repeat z-0"
                    style={{ backgroundImage: `url(${destination.flag})` }}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <img 
                        src={destination.flag} 
                        alt={`Drapeau ${destination.title.split(' ').pop()}`}
                        className="w-8 h-6 object-cover rounded shadow-sm"
                      />
                      <h3 className="text-lg sm:text-xl font-semibold">{destination.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4 flex-grow">{destination.description}</p>
                    <ul className="space-y-2">
                      {destination.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {Object.entries(content.features).map(([key, feature]) => (
              <div key={key} className="text-center">
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};