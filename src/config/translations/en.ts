export const en = {
  nav: {
    courses: 'Courses',
    about: 'About',
    studyAbroad: 'Study Abroad',
    contact: 'Contact',
    enroll: 'Register Now'
  },
  hero: {
    title: 'Your Gateway to Global Education',
    subtitle: 'Expert language instruction and comprehensive study abroad support for students seeking international education opportunities.',
    cta: {
      start: 'Start Learning',
      consult: 'Free Consultation'
    }
  },
  stats: {
    stats: [
      { value: '1000+', label: 'Students Taught' },
      { value: '95%', label: 'Success Rate' },
      { value: '50+', label: 'Partner Universities' },
      { value: '10+', label: 'Years Experience' }
    ]
  },
  courses: {
    title: 'Language Courses',
    subtitle: 'From beginners to advanced learners, our structured curriculum ensures steady progress towards your language goals.',
    levels: {
      beginner: {
        title: 'A1-A2 Beginner',
        description: 'First steps in German language',
        features: ['Basic conversation skills', 'Essential grammar', 'Everyday vocabulary']
      },
      intermediate: {
        title: 'B1-B2 Intermediate',
        description: 'Building fluency and confidence',
        features: ['Advanced communication', 'Complex grammar structures', 'Professional vocabulary']
      },
      advanced: {
        title: 'C1-C2 Advanced',
        description: 'Mastery level',
        features: ['Native-level fluency', 'Academic writing', 'Cultural competence']
      }
    }
  },
  studyAbroad: {
    title: 'Global Study Destinations',
    subtitle: 'Explore educational opportunities worldwide',
    destinations: {
      germany: {
        title: 'Study in Germany',
        description: 'Access world-class education with minimal tuition fees',
        features: ['Strong engineering programs', 'Work opportunities', 'Rich culture']
      },
      canada: {
        title: 'Study in Canada',
        description: 'Quality education in a multicultural environment',
        features: ['Post-study work permits', 'Path to residency', 'Safe environment']
      }
    },
    features: {
      application: {
        title: 'Application Support',
        description: 'Expert guidance through university applications'
      },
      visa: {
        title: 'Visa Assistance',
        description: 'Complete support with visa applications'
      },
      accommodation: {
        title: 'Accommodation',
        description: 'Help finding suitable student housing'
      }
    }
  },
  schedule: {
    title: 'Flexible Class Schedule',
    subtitle: 'Choose from our variety of class timings that suit your schedule',
    classes: {
      morning: {
        title: 'Morning Classes',
        description: 'Perfect for early birds',
        time: '9:00 AM - 12:00 PM'
      },
      afternoon: {
        title: 'Afternoon Classes',
        description: 'Ideal for professionals',
        time: '2:00 PM - 5:00 PM'
      },
      evening: {
        title: 'Evening Classes',
        description: 'Convenient for working professionals',
        time: '6:00 PM - 9:00 PM'
      }
    },
    days: 'Monday - Friday'
  },
  contact: {
    title: 'Get in Touch',
    subtitle: 'Have questions? We\'re here to help you start your journey',
    form: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      placeholders: {
        name: 'Your Name',
        email: 'your@email.com',
        message: 'How can we help you?'
      },
      submit: 'Send Message'
    }
  },
  enrollment: {
    title: 'Register for German Courses',
    subtitle: 'Start your journey to mastering the German language',
    form: {
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      phone: 'Phone Number',
      currentLevel: 'Current German Level',
      preferredSchedule: 'Preferred Schedule',
      studyGoal: 'Study Goals',
      submit: 'Register Now',
      placeholders: {
        firstName: 'Your First Name',
        lastName: 'Your Last Name',
        email: 'your@email.com',
        phone: '+1 (234) 567-8900',
        studyGoal: 'What are your goals for learning German? (e.g., studies, work, personal interest)'
      }
    },
    success: 'Registration successful! We will contact you shortly.'
  },
  legal: {
    privacyPolicy: {
      title: 'Privacy Policy',
      content: {
        intro: {
          title: 'Introduction',
          text: 'We are committed to protecting your privacy and personal data.'
        },
        dataCollection: {
          title: 'Data Collection',
          intro: 'We collect the following data:',
          items: [
            'Basic personal information',
            'Contact information',
            'Browsing data',
            'Payment information'
          ]
        },
        dataUse: {
          title: 'Data Use',
          intro: 'We use your data to:',
          items: [
            'Provide our services',
            'Improve user experience',
            'Communicate with you',
            'Comply with legal requirements'
          ]
        },
        dataSecurity: {
          title: 'Data Security',
          text: 'We take strict security measures to protect your data from unauthorized access.'
        },
        rights: {
          title: 'Your Rights',
          intro: 'You have the right to:',
          items: [
            'Access your data',
            'Correct your data',
            'Delete your data',
            'Object to processing of your data'
          ]
        },
        cookies: {
          title: 'Cookies',
          text: 'We use cookies to improve your experience.',
          link: 'Cookie Policy'
        }
      }
    }
  }
} as const;