// import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Clock, Users } from 'lucide-react';

interface Course {
  title: string;
  description: string;
  features?: string[];
}

interface CoursesContent {
  title: string;
  subtitle?: string;
  levels: {
    beginner: Course;
    intermediate: Course;
    advanced: Course;
  };
}

export const Courses = ({ content }: { content: CoursesContent }) => {
  // Early return with null if content or levels is not properly structured
  if (!content?.title || !content?.levels?.beginner || !content?.levels?.intermediate || !content?.levels?.advanced) {
    return null;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50" id="courses">
      <motion.div 
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
            variants={itemVariants}
          >
            {content.title}
          </motion.h2>
          {content.subtitle && (
            <motion.p 
              className="text-gray-600 text-lg"
              variants={itemVariants}
            >
              {content.subtitle}
            </motion.p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(content.levels).map(([key, course], index) => (
            <motion.div
              key={key}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100"
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-t-2xl transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              
              <div className="flex items-center mb-6">
                {index === 0 && <GraduationCap className="w-6 h-6 text-blue-500 mr-3" />}
                {index === 1 && <Clock className="w-6 h-6 text-blue-500 mr-3" />}
                {index === 2 && <Users className="w-6 h-6 text-blue-500 mr-3" />}
                <h3 className="text-xl font-semibold">{course.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6">{course.description}</p>
              
              {course.features && course.features.length > 0 && (
                <ul className="space-y-3">
                  {course.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-b-2xl"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};