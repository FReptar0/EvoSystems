// Analytics and conversion tracking utilities

declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config?: any) => void;
  }
}

// Google Analytics Events
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track events
export const event = (action: string, parameters: any = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, parameters);
  }
};

// Conversion tracking for specific actions
export const trackConversion = {
  // WhatsApp clicks
  whatsappClick: (service?: string, source?: string) => {
    event('whatsapp_click', {
      event_category: 'conversion',
      event_label: service || 'general',
      service_type: service,
      source_page: source || window.location.pathname,
      value: 1,
    });
  },

  // Email clicks
  emailClick: (source?: string) => {
    event('email_click', {
      event_category: 'conversion', 
      event_label: 'email_contact',
      source_page: source || window.location.pathname,
      value: 1,
    });
  },

  // Form submissions
  formSubmit: (formType: string, service?: string) => {
    event('form_submit', {
      event_category: 'conversion',
      event_label: formType,
      service_type: service,
      value: 3,
    });
  },

  // Service clicks
  serviceClick: (serviceName: string, source?: string) => {
    event('service_click', {
      event_category: 'engagement',
      event_label: serviceName,
      source_page: source || window.location.pathname,
      value: 1,
    });
  },

  // CTA clicks
  ctaClick: (ctaName: string, ctaLocation: string) => {
    event('cta_click', {
      event_category: 'engagement',
      event_label: ctaName,
      cta_location: ctaLocation,
      value: 1,
    });
  },

  // External link clicks
  externalLinkClick: (url: string, linkText: string) => {
    event('external_link_click', {
      event_category: 'engagement',
      event_label: linkText,
      external_url: url,
      value: 1,
    });
  },

  // Page engagement
  pageEngagement: (action: string, value?: number) => {
    event('page_engagement', {
      event_category: 'engagement',
      event_label: action,
      value: value || 1,
    });
  },
};

// Enhanced e-commerce tracking for service inquiries
export const trackEcommerce = {
  // When user shows interest in a service
  addToCart: (serviceName: string, serviceId: string, value: number = 0) => {
    event('add_to_cart', {
      event_category: 'ecommerce',
      currency: 'MXN',
      value: value,
      items: [{
        item_id: serviceId,
        item_name: serviceName,
        category: 'software_service',
        quantity: 1,
        price: value,
      }]
    });
  },

  // When user initiates purchase (contacts for quote)
  beginCheckout: (serviceName: string, serviceId: string, value: number = 0) => {
    event('begin_checkout', {
      event_category: 'ecommerce',
      currency: 'MXN',
      value: value,
      items: [{
        item_id: serviceId,
        item_name: serviceName,
        category: 'software_service',
        quantity: 1,
        price: value,
      }]
    });
  },

  // When user completes conversion (sends inquiry)
  purchase: (serviceName: string, serviceId: string, value: number = 1000) => {
    event('purchase', {
      event_category: 'ecommerce',
      transaction_id: `${serviceId}_${Date.now()}`,
      currency: 'MXN',
      value: value,
      items: [{
        item_id: serviceId,
        item_name: serviceName,
        category: 'software_service',
        quantity: 1,
        price: value,
      }]
    });
  },
};

// Heat map and user behavior tracking
export const trackUserBehavior = {
  // Scroll depth tracking
  scrollDepth: (percentage: number) => {
    event('scroll', {
      event_category: 'user_behavior',
      event_label: `scroll_${percentage}%`,
      value: percentage,
    });
  },

  // Time on page
  timeOnPage: (seconds: number) => {
    event('time_on_page', {
      event_category: 'user_behavior',
      event_label: 'engagement',
      value: seconds,
    });
  },

  // FAQ interactions
  faqClick: (question: string, category: string) => {
    event('faq_interaction', {
      event_category: 'user_behavior',
      event_label: question,
      faq_category: category,
      value: 1,
    });
  },

  // Navigation clicks
  navigationClick: (linkText: string, destination: string) => {
    event('navigation_click', {
      event_category: 'user_behavior',
      event_label: linkText,
      destination: destination,
      value: 1,
    });
  },
};

// Lead scoring system
export const calculateLeadScore = (actions: string[]): number => {
  const scoreMap: { [key: string]: number } = {
    'page_view': 1,
    'whatsapp_click': 15,
    'email_click': 10,
    'form_submit': 25,
    'service_click': 5,
    'cta_click': 8,
    'faq_interaction': 3,
    'scroll_75': 2,
    'time_on_page_60': 3,
  };

  return actions.reduce((total, action) => {
    return total + (scoreMap[action] || 0);
  }, 0);
};

// A/B testing utilities
export const abTest = {
  // Get variant for user
  getVariant: (testName: string, variants: string[]): string => {
    if (typeof window === 'undefined') return variants[0];
    
    const userId = localStorage.getItem('user_id') || 'anonymous';
    const hash = userId.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      
      return a & a;
    }, 0);
    
    const variantIndex = Math.abs(hash) % variants.length;

    return variants[variantIndex];
  },

  // Track variant exposure
  trackVariant: (testName: string, variant: string) => {
    event('ab_test_exposure', {
      event_category: 'ab_test',
      event_label: testName,
      variant: variant,
      value: 1,
    });
  },
};