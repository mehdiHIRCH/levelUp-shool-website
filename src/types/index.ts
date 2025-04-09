export interface Language {
  code: string;
  name: string;
  direction: 'ltr' | 'rtl';
}

export interface NavLink {
  href: string;
  label: string;
}

export interface CourseLevel {
  title: string;
  description: string;
  features: string[];
}

export interface StudyDestination {
  title: string;
  description: string;
  features: string[];
  image: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}