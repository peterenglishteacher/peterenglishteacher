export type Locale = "es" | "en";

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface ContactFormState {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    message?: string[];
  };
}

export interface NavLink {
  href: string;
  label: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface ReasonItem {
  icon: string;
  title: string;
  description: string;
}

export interface AudienceItem {
  icon: string;
  label: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  nav: {
    links: NavLink[];
    cta: string;
    langSwitch: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
    online: string;
    photoAlt: string;
  };
  about: {
    sectionTitle: string;
    sectionSubtitle: string;
    paragraphs: string[];
    photoAlt: string;
  };
  services: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: ServiceItem[];
  };
  howItWorks: {
    sectionTitle: string;
    sectionSubtitle: string;
    steps: StepItem[];
  };
  whyChoose: {
    sectionTitle: string;
    sectionSubtitle: string;
    reasons: ReasonItem[];
  };
  whoItsFor: {
    sectionTitle: string;
    sectionSubtitle: string;
    audiences: AudienceItem[];
  };
  testimonials: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: TestimonialItem[];
  };
  contact: {
    sectionTitle: string;
    sectionSubtitle: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
    };
    info: {
      title: string;
      emailLabel: string;
      whatsappLabel: string;
      facebookLabel: string;
    };
  };
  footer: {
    copyright: string;
    brand: string;
    privacyPolicy: string;
    cookiesPolicy: string;
    legalNotice: string;
  };
  cookieBanner: {
    message: string;
    accept: string;
    reject: string;
  };
}
