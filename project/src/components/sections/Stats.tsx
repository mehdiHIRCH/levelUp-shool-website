import React from 'react';
import { AnimatedSection } from '../AnimatedSection';

interface StatsContent {
  stats: Array<{
    value: string;
    label: string;
  }>;
}

export const Stats = ({ content }: { content: StatsContent }) => {
  // Early return if content or stats array is not available
  if (!content?.stats || !Array.isArray(content.stats)) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {content.stats.map((stat, index) => (
            <AnimatedSection
              key={index}
              className="text-center"
              delay={index * 0.2}
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};