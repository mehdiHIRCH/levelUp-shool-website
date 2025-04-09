import React from 'react';
import { AnimatedSection } from '../AnimatedSection';

interface ScheduleClass {
  title: string;
  description: string;
  time: string;
}

interface ScheduleContent {
  title: string;
  subtitle: string;
  classes: {
    morning: ScheduleClass;
    afternoon: ScheduleClass;
    evening: ScheduleClass;
  };
  days: string;
}

export const Schedule = ({ content }: { content: ScheduleContent }) => {
  if (!content?.classes) {
    return null;
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">{content.title}</h2>
          <p className="text-gray-600">{content.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {Object.entries(content.classes).map(([key, classInfo], index) => (
            <AnimatedSection
              key={key}
              className="mb-6 bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              delay={index * 0.2}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{classInfo.title}</h3>
                  <p className="text-gray-600">{classInfo.description}</p>
                </div>
                <div className="mt-4 md:mt-0 text-blue-600 font-semibold">
                  {classInfo.time}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center mt-8 text-gray-600">
          <p>{content.days}</p>
        </div>
      </div>
    </section>
  );
};